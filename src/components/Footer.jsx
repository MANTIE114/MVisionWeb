import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contact">
                    <p>联系我们</p>
                    <div className="contact-items">
                        <a href="https://t.me/MVisionTChannel" target="_blank" rel="noopener noreferrer">TG: @MVisionTChannel</a>
                        <span>小红书: @Mvision Music</span>
                    </div>
                </div>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
