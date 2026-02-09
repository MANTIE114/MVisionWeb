import React from 'react';
import './Recommendation.css';

const Recommendation = () => {
    const videos = [
        {
            id: 1,
            url: "https://www.bilibili.com/video/BV1h1ymBAEUg/",
            title: "最有“苹果味”的Apple TV小破站客户端MVision",
            upName: "小鹏Digital",
            desc: "“这可能是目前体验最好的 Apple TV BiliBili 第三方客户端...”",
            cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 2,
            url: "https://www.bilibili.com/video/BV1L1ipBmENt/?spm_id_from=333.1387.0.0&vd_source=6aaa86a09ad3b974ffb56c9ea995ddf4",
            title: "MVision 深度体验：这才是 Apple TV 该有的样子",
            upName: "Bilibili UP主",
            desc: "点击观看最新评测视频",
            cover: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <section className="recommendation-section">
            <div className="recommendation-container">
                <div className="recommendation-header">
                    <span className="badge">UP主推荐</span>
                    <h2>听听大咖怎么说</h2>
                </div>

                <div className="recommendation-list">
                    {videos.map(video => (
                        <a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-card"
                        >
                            <div className="video-preview" style={{ '--bg-image': `url('${video.cover}')` }}>
                                <div className="play-button">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="video-info">
                                <h3>{video.title}</h3>
                                <div className="uploader">
                                    <span className="up-label">UP主：</span>
                                    <span className="up-name">{video.upName}</span>
                                </div>
                                <p>{video.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recommendation;
