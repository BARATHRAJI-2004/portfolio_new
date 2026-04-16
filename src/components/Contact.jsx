import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo. In a real application, this would send an email.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">&lt;contact&gt;</span>
                    <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Let's talk about your project</h3>
                        <p>
                            Whether you've got a question, a project proposal, or just want to say hi, 
                            my inbox is always open. I'll do my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item glass-card" onClick={() => window.location.href='mailto:barathraji2004@gmail.com'}>
                                <Mail />
                                <div>
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">barathraji2004@gmail.com</span>
                                </div>
                            </div>
                            <div className="contact-item glass-card" onClick={() => window.location.href='tel:+918760306705'}>
                                <Phone />
                                <div>
                                    <span className="contact-label">Phone</span>
                                    <span className="contact-value">+91 87603 06705</span>
                                </div>
                            </div>
                            <div className="contact-item glass-card">
                                <MapPin />
                                <div>
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">Tamil Nadu, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="https://www.linkedin.com/in/barathraji" target="_blank" rel="noreferrer" className="contact-social-link">
                                <Linkedin size={18} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/BARATHRAJI" target="_blank" rel="noreferrer" className="contact-social-link">
                                <Github size={18} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            <label>Name</label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                            <label>Email</label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder=" "
                                value={formData.subject}
                                onChange={handleChange}
                                required 
                            />
                            <label>Subject</label>
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                placeholder=" "
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label>Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">
                            <Send size={18} />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
