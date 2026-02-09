import React from 'react';
import './Slogan.css';

const Slogan = () => {
    return (
        <section className="slogan-section">
            <div className="slogan-container">
                <img src="/assets/logo.png" alt="MVision App Logo" className="slogan-logo" />
                <h2 className="slogan-title">MVision</h2>
                <div className="slogan-content">
                    <p>一个专注于 Apple TV APP 开发的作品</p>
                    <p>感谢每一位用户的支持</p>
                    <p className="slogan-author">— 独立开发者</p>
                </div>
            </div>
        </section>
    );
};

export default Slogan;
