import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: "Merger and Acquisition Integration",
            description: "Led the successful technical integration of 2 M&A, establishing a framework and processes that streamlined IT integration.",
            impact: ["Accelerated TTM by 50%", "Improved operational efficiency by 20%", "Reduced technical debt by 60%"],
            tags: ["M&A", "Strategy", "Integration"]
        },
        {
            title: "Modernized Web App: Micro-frontend",
            description: "Implemented micro-frontend architecture, achieving significant improvements in delivery and performance.",
            impact: ["80% improved time to market", "35% cost reduction", "4x deployment frequency", "83% faster page load"],
            tags: ["Micro-frontend", "React", "Architecture"]
        },
        {
            title: "Legacy Application Migration",
            description: "Devised strategy for flawless migration of critical legacy applications from on-prem environment to Azure Cloud in 4 weeks.",
            impact: ["30% reduction in application cost", "Cloud Native setup", "Improved scalability"],
            tags: ["Azure", "Cloud Migration", "Cost Optimization"]
        },
        {
            title: "Business Growth & Digital Transformation",
            description: "Contributed to 2% YOY business growth by digitalizing revenue channels (automated RMA, online training orders).",
            impact: ["Revenue digitalization", "Automated workflows", "Process efficiency"],
            tags: ["Digital Transformation", "Growth", "Automation"]
        },
        {
            title: "Security Compliance Automation",
            description: "Attained 100% security compliance and slashed time to identify risks by 70% through DevSecOps integration.",
            impact: ["100% security compliance", "70% faster risk identification", "Integrated scan tools"],
            tags: ["Security", "DevSecOps", "Compliance"]
        },
        {
            title: "Infrastructure Cost Optimization",
            description: "Developed Serverless solutions using AWS Lambda and Azure Functions, optimizing resource utilization.",
            impact: ["35% reduction in infrastructure costs", "Serverless architecture", "Auto-scaling"],
            tags: ["AWS Lambda", "Azure Functions", "FinOps"]
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className={styles.section_header}>
                    <h2 className={styles.title}>Key Projects & Achievements</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.projects_grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.project_card}>
                            <div className={styles.project_header}>
                                <div className={styles.tags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className={styles.project_title}>{project.title}</h3>
                            </div>
                            <p className={styles.project_description}>{project.description}</p>
                            <div className={styles.impact_section}>
                                <h4 className={styles.impact_title}>Key Impact:</h4>
                                <ul className={styles.impact_list}>
                                    {project.impact.map((item, i) => (
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

export default Projects;
