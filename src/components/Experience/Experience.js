import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            company: "Honeywell",
            role: "Principal Architect",
            period: "06/2025 - Ongoing"
        },
        {
            company: "Honeywell",
            role: "Lead Architect",
            period: "08/2023 - 06/2025"
        },
        {
            company: "Honeywell",
            role: "Senior Advance Software Engineer",
            period: "09/2017 - 08/2023"
        },
        {
            company: "Honeywell",
            role: "Senior Engineer",
            period: "04/2016 - 09/2017"
        },
        {
            company: "Tata Consultancy Services",
            role: "System Engineer",
            period: "03/2013 - 04/2016"
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className={styles.section_header}>
                    <h2 className={styles.title}>Professional Journey</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.line}></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}>
                            <div className={styles.dot}></div>
                            <div className={styles.content}>
                                <span className={styles.period}>{exp.period}</span>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <h4 className={styles.company}>{exp.company}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
