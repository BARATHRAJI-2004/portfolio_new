import React, { useState, useEffect } from 'react';
import { FolderOpen, Download, Linkedin, Github, Mail, Phone } from 'lucide-react';

const Hero = () => {
    const occupations = ["Full-Stack Developer", "Cybersecurity Professional", "UI/UX Designer"];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const current = loopIndex % occupations.length;
            const fullText = occupations[current];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopIndex(loopIndex + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopIndex, typingSpeed]);

    return (
        <section id="hero" className="section hero-section">
            <div className="hero-content">
                <div className="hero-text-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Available for opportunities</span>
                    </div>
                    <h1 className="hero-name">
                        <span className="hero-greeting">Hello, I'm</span>
                        <span className="hero-title">BARATHRAJI<span className="accent"> P</span></span>
                    </h1>
                    <div className="hero-role">
                        <span className="role-prefix">I'm a </span>
                        <span className="typewriter">{text}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Full-Stack Developer, Android Developer & Cybersecurity Professional passionate about
                        building secure, scalable applications and identifying vulnerabilities before attackers do.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            <FolderOpen size={18} />
                            <span>View Projects</span>
                        </a>
                        <a href="/assets/Resume.pdf" download="Barathraji_Resume.pdf" className="btn btn-outline">
                            <Download size={18} />
                            <span>Download CV</span>
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href="https://www.linkedin.com/in/barathraji" target="_blank" className="social-link" rel="noreferrer">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/BARATHRAJI" target="_blank" className="social-link" rel="noreferrer">
                            <Github size={20} />
                        </a>
                        <a href="mailto:barathraji2004@gmail.com" className="social-link">
                            <Mail size={20} />
                        </a>
                        <a href="tel:+918760306705" className="social-link">
                            <Phone size={20} />
                        </a>
                    </div>
                </div>

                <div className="hero-image-content">
                    <div className="profile-container">
                        <div className="profile-ring profile-ring-1"></div>
                        <div className="profile-ring profile-ring-2"></div>
                        <div className="profile-ring profile-ring-3"></div>
                        <div className="profile-glow"></div>
                        <div className="profile-circle">
                            <img src="/assets/profile.png" alt="BARATHRAJI P" className="profile-img" />
                        </div>
                        <div className="profile-dots">
                            {[...Array(8)].map((_, i) => <span key={i}></span>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="mouse-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
