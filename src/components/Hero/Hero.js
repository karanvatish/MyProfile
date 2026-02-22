"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    const roles = useMemo(() => [
        "Solution Architect - Digital Customer Experience",
        "Transformation Leader",
        "Full stack Developer",
        "AI Enthusiast"
    ], []);

    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[roleIndex];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, roles, typingSpeed]);

    return (
        <section id="home" className={styles.hero}>
            <div className={`container ${styles.hero_container}`}>
                <div className={styles.content}>
                    <h2 className={styles.greeting}>Building Digital Customer Experience</h2>
                    <h1 className={styles.name}>Hey! I'm <span className={styles.highlight}>Karan Sharma</span></h1>
                    <div className={styles.typing_container}>
                        <p className={styles.i_am}>I am a <span className={styles.role}>{text}<span className={styles.cursor}>|</span></span></p>
                    </div>
                    <p className={styles.description}>
                        Accomplished Solution Architect with 13+ years of experience driving digital customer experience and distributed architecture transformations.
                    </p>
                    <div className={styles.actions}>
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className={`${styles.btn_outline} btn`}>Contact Me</a>
                    </div>
                </div>
                <div className={styles.image_container}>
                    <div className={styles.profile_image_wrapper}>
                        <Image
                            src="/profile-photo.png"
                            alt="Karan Sharma"
                            width={400}
                            height={400}
                            className={styles.profile_image}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
