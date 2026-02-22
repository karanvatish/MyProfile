import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <section id="contact" className={`${styles.contact_section} section`}>
            <div className="container">
                <div className={styles.section_header}>
                    <h2 className={styles.title}>Get In Touch</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.contact_container}>
                    <div className={styles.contact_info}>
                        <h3 className={styles.info_title}>Contact Details</h3>
                        <p className={styles.info_text}>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className={styles.info_list}>
                            <div className={styles.info_item}>
                                <div className={styles.icon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:karanvatish@gmail.com">karanvatish@gmail.com</a></p>
                                </div>
                            </div>

                            <div className={styles.info_item}>
                                <div className={styles.icon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:9999815887">9999815887</a></p>
                                </div>
                            </div>

                            <div className={styles.info_item}>
                                <div className={styles.icon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p><a href="https://www.linkedin.com/in/karanvatish" target="_blank" rel="noopener noreferrer">in/karanvatish</a></p>
                                </div>
                            </div>

                            <div className={styles.info_item}>
                                <div className={styles.icon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Bengaluru, KA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contact_form_container}>
                        {/* Education info could also fit here as a card */}
                        <div className={styles.education_card}>
                            <h3 className={styles.info_title}>Education</h3>
                            <div className={styles.edu_item}>
                                <p className={styles.edu_degree}>B-Tech in Computer Science Engineering</p>
                                <p className={styles.edu_uni}>Punjab Technical University | 2008 - 2012</p>
                            </div>
                            <div className={styles.edu_item}>
                                <p className={styles.edu_degree}>Higher Secondary School / Secondary School</p>
                                <p className={styles.edu_uni}>C.B.S.E / I.C.S.E | 2006 - 2008</p>
                            </div>
                            <div className={styles.languages}>
                                <p><strong>Languages:</strong> English, Hindi, Punjabi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Karan Sharma. Built with Next.js</p>
                </div>
            </footer>
        </section>
    );
};

export default ContactUs;
