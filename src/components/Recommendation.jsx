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
            title: "年度最佳推荐：MVision 的设计与体验",
            upName: "UP主口碑力荐",
            desc: "UP主深度评测：2025年度体验最好的 Apple TV 客户端...",
            cover: "/assets/feature-menu-3.png",
            isAward: true
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
                            className={`video-card ${video.isAward ? 'award-card' : ''}`}
                        >
                            <div className="video-preview" style={{ '--bg-image': `url('${video.cover}')` }}>
                                <div className="play-button">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                {video.isAward && (
                                    <div className="award-badge">
                                        <div className="award-content">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="laurel-leading">
                                                <path d="M9.5 3C9.5 3 10.5 4 9.5 5C8.5 6 7 5.5 6.5 4.5C6 3.5 7 2.5 8 2.5C9 2.5 9.5 3 9.5 3ZM6.5 6C6.5 6 7.5 7 6.5 8C5.5 9 4 8.5 3.5 7.5C3 6.5 4 5.5 5 5.5C6 5.5 6.5 6 6.5 6ZM4.5 9.5C4.5 9.5 5.5 10.5 4.5 11.5C3.5 12.5 2 12 1.5 11C1 10 2 9 3 9C4 9 4.5 9.5 4.5 9.5ZM4.5 14C4.5 14 5.5 15 4.5 16C3.5 17 2 16.5 1.5 15.5C1 14.5 2 13.5 3 13.5C4 13.5 4.5 14 4.5 14ZM6.5 17.5C6.5 17.5 7.5 18.5 6.5 19.5C5.5 20.5 4 20 3.5 19C3 18 4 17 5 17C6 17 6.5 17.5 6.5 17.5ZM9.5 20.5C9.5 20.5 10.5 21.5 9.5 22.5C8.5 23.5 7 23 6.5 22C6 21 7 20 8 20C9 20 9.5 20.5 9.5 20.5ZM12.5 21.5C12.5 21.5 13 22.5 12 23C11 23.5 10 22.5 10 21.5C10 20.5 11 20 12 20C12.5 20 12.5 21.5 12.5 21.5Z" />
                                            </svg>
                                            <div className="award-text">BEST</div>
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="laurel-trailing">
                                                <path d="M14.5 3C14.5 3 13.5 4 14.5 5C15.5 6 17 5.5 17.5 4.5C18 3.5 17 2.5 16 2.5C15 2.5 14.5 3 14.5 3ZM17.5 6C17.5 6 16.5 7 17.5 8C18.5 9 20 8.5 20.5 7.5C21 6.5 20 5.5 19 5.5C18 5.5 17.5 6 17.5 6ZM19.5 9.5C19.5 9.5 18.5 10.5 19.5 11.5C20.5 12.5 22 12 22.5 11C23 10 22 9 21 9C20 9 19.5 9.5 19.5 9.5ZM19.5 14C19.5 14 18.5 15 19.5 16C20.5 17 22 16.5 22.5 15.5C23 14.5 22 13.5 21 13.5C20 13.5 19.5 14 19.5 14ZM17.5 17.5C17.5 17.5 16.5 18.5 17.5 19.5C18.5 20.5 20 20 20.5 19C21 18 20 17 19 17C18 17 17.5 17.5 17.5 17.5ZM14.5 20.5C14.5 20.5 13.5 21.5 14.5 22.5C15.5 23.5 17 23 17.5 22C18 21 17 20 16 20C15 20 14.5 20.5 14.5 20.5ZM11.5 21.5C11.5 21.5 11 22.5 12 23C13 23.5 14 22.5 14 21.5C14 20.5 13 20 12 20C11.5 20 11.5 21.5 11.5 21.5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
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
