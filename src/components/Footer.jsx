import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        BARATHRAJI<span> P</span>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Barathraji P. All rights reserved.</p>
                    <p className="footer-tagline">Built with React & Three.js</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
