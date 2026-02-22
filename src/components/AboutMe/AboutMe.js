import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section id="about" className="section">
            <div className={`container ${styles.about_container}`}>
                <div className={styles.section_header}>
                    <h2 className={styles.title}>About Me</h2>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.text_content}>
                        <p>
                            Renowned for effective cross-functional leadership and stakeholder alignment, expediting project approvals and supporting strategic objectives. Expert in Micro-Frontend (React), Microservices, and Azure, with a strong record of modernizing legacy systems for higher agility and business value.
                        </p>
                        <p>
                            Successfully architected technical strategies for major M&A's, leading to business continuity. My approach combines deep technical expertise with a strategic business mindset to deliver solutions that are not just technically sound but also drive significant business growth.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.stat_item}>
                                <span className={styles.stat_number}>13+</span>
                                <span className={styles.stat_label}>Years Exp</span>
                            </div>
                            <div className={styles.stat_item}>
                                <span className={styles.stat_number}>20+</span>
                                <span className={styles.stat_label}>Major Projects</span>
                            </div>
                            <div className={styles.stat_item}>
                                <span className={styles.stat_number}>2</span>
                                <span className={styles.stat_label}>Merger & Acqusition</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
