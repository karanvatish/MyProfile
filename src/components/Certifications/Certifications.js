import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
    const certifications = [
        { title: "Software Security Practitioner Software Architect", issuer: "Security Compass" },
        { title: "Coveo Platform Developer Certificate", issuer: "Coveo" },
        { title: "Microsoft Azure Fundamentals", issuer: "Microsoft" },
        { title: "AWS Fundamentals: Going Cloud-Native", issuer: "AWS" },
        { title: "Lean Six Sigma Green Belt Certification", issuer: "Honeywell" },
        { title: "Certified SAFe 4 Agilist", issuer: "Scaled Agile" },
        { title: "SAP Commerce Cloud / Business Platform Technology", issuer: "SAP" },
        { title: "Microservices Fundamentals - IBM", issuer: "Coursera (IBM)" },
        { title: "API Design and Fundamentals of Apigee API Platform", issuer: "Coursera (Google)" },
        { title: "Python for Everybody", issuer: "Coursera (University of Michigan)" }
    ];

    return (
        <section id="certifications" className={`${styles.cert_section} section`}>
            <div className="container">
                <div id="badges" className={styles.section_header}>
                    <h2 className={styles.title}>Certifications & Badges</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.cert_grid}>
                    {certifications.map((cert, index) => (
                        <div key={index} className={styles.cert_card}>
                            <div className={styles.cert_icon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <div className={styles.cert_info}>
                                <h3 className={styles.cert_title}>{cert.title}</h3>
                                <p className={styles.cert_issuer}>{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
