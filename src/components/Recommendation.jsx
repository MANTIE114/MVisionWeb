import React from 'react';
import './Recommendation.css';

const Recommendation = () => {
    return (
        <section className="recommendation-section">
            <div className="recommendation-container">
                <div className="recommendation-header">
                    <span className="badge">UP主推荐</span>
                    <h2>听听大咖怎么说</h2>
                </div>

                <a
                    href="https://www.bilibili.com/video/BV1h1ymBAEUg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-card"
                >
                    <div className="video-preview">
                        <div className="play-button">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                    <div className="video-info">
                        <h3>最有“苹果味”的Apple TV小破站客户端MVision</h3>
                        <div className="uploader">
                            <span className="up-label">UP主：</span>
                            <span className="up-name">小鹏Digital</span>
                        </div>
                        <p>“这可能是目前体验最好的 Apple TV BiliBili 第三方客户端...”</p>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Recommendation;
