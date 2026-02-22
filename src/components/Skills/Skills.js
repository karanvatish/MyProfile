import React from 'react';
import {
    Cloud,
    Search,
    Layers,
    Code2,
    Cpu,
    ShieldCheck,
    Database,
    Server
} from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Enterprise Platform & Cloud",
            icon: <Cloud size={24} />,
            skills: ["Adobe Experience Manager", "Salesforce", "Informatica", "Azure"]
        },
        {
            title: "Search Engines",
            icon: <Search size={24} />,
            skills: ["Elasticsearch", "Coveo"]
        },
        {
            title: "Software Architecture",
            icon: <Layers size={24} />,
            skills: ["TOGAF", "Distributed System Architecture", "Event-Driven Architecture", "Microservice Architecture", "Cloud-Native Architecture"]
        },
        {
            title: "Programming Languages",
            icon: <Code2 size={24} />,
            skills: ["Java 8", "ReactJs", "HTML5", "JavaScript", "jQuery", "CSS3", "SCSS/SASS", "Python"]
        },
        {
            title: "Programming Frameworks",
            icon: <Cpu size={24} />,
            skills: ["Spring", "Spring Boot", "Hibernate", "Maven", "MVC", "JPA", "Next.js", "Material-UI"]
        },
        {
            title: "DevSecOps (CI/CD/Security)",
            icon: <ShieldCheck size={24} />,
            skills: ["GitHub", "Opsera", "Octopus", "Bitbucket", "Coverity", "Black Duck", "Bamboo", "Jenkins"]
        },
        {
            title: "Databases",
            icon: <Database size={24} />,
            skills: ["Oracle", "MSSQL", "Elastic (No-SQL)", "AWS RDS"]
        },
        {
            title: "Server",
            icon: <Server size={24} />,
            skills: ["Apache Tomcat", "JBoss", "WebSphere Application Server", "WebSphere Portal Server"]
        }
    ];

    return (
        <section id="skills" className={`${styles.skills_section} section`}>
            <div className="container">
                <div className={styles.section_header}>
                    <h2 className={styles.title}>Skills & Expertise</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.categories_container}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className={styles.category_card}>
                            <div className={styles.category_header}>
                                <div className={styles.icon_wrapper}>
                                    {category.icon}
                                </div>
                                <h3 className={styles.category_title}>{category.title}</h3>
                            </div>
                            <div className={styles.skills_list}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} className={styles.skill_tag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
