import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1>极致视听体验</h1>
                <p>尽在 Apple TV MVision</p>
                <div className="hero-actions">
                    <a href="#purchase">
                        <button className="cta-primary">立即购买</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
