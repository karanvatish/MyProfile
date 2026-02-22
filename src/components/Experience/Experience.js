import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            company: "Honeywell",
            role: "Principal Architect",
            period: "06/2025 - Ongoing",
            highlights: [
                "Led a $4.5M legacy app migration project at Honeywell Aerospace, enhancing digital customer experience.",
                "Defined AI initiative to enhance customer experience, implementing recommendation engine.",
                "Spearheaded SEO strategy resulting in a 30% increase in organic traffic.",
                "Directed architecture strategy for Building Automation SBG valued at $4M.",
                "Spearheaded technical integration efforts for 2 Mergers and Acquisitions.",
                "Led implementation of micro frontend architecture and upgraded search experience using Coveo."
            ]
        },
        {
            company: "Honeywell",
            role: "Lead Architect",
            period: "08/2023 - 06/2025",
            highlights: [
                "Integrated legacy systems with modern platforms, resulting in 20% improvement in efficiency.",
                "Established a standardized micro-frontend framework, decreasing dev costs by 35%.",
                "Improved page load times by 83% and user engagement by 23%.",
                "Established robust governance framework, reducing production disruptions by 34%.",
                "Developed serverless solutions, reducing infrastructure costs by 35%."
            ]
        },
        {
            company: "Honeywell",
            role: "Senior Advance Software Engineer",
            period: "09/2017 - 08/2023",
            highlights: [
                "Migrated critical Apps to Azure in 4 weeks, reducing cost by 30%.",
                "Modularized monolithic application into 6 microservices.",
                "Automated infrastructure and release management, decreasing time-to-market by 30%.",
                "Saved $10M annually by implementing Enterprise Log Monitoring using Elastic-Stack."
            ]
        },
        {
            company: "Honeywell",
            role: "Senior Engineer",
            period: "04/2016 - 09/2017",
            highlights: [
                "Led end-to-end development of 20 new features.",
                "Increased team velocity by 20% through new development guidelines.",
                "Created automated Dashboards for tracking proactively, decreasing tracking time by 10%."
            ]
        },
        {
            company: "Tata Consultancy Services",
            role: "System Engineer",
            period: "03/2013 - 04/2016",
            highlights: [
                "Created middleware using Java, Spring and Hibernate for health-watch application.",
                "Developed custom logging framework using AspectJ.",
                "Worked on performance analysis using MAT (Memory Analysis Tool)."
            ]
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
                                <ul className={styles.highlights}>
                                    {exp.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
