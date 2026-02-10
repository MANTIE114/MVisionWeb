import React from 'react';
import './UserReviews.css';

const UserReviews = () => {
    // To add more reviews, simple add the filename to this array
    // Ensure the file is placed in public/assets/reviews/
    const reviewImages = [
        "ScreenShot_2026-02-09_122717_702.png",
        "IMG_5943.jpg",
        "IMG_5951.jpg",
        "ScreenShot_2026-02-09_122900_451.png",
        "ScreenShot_2026-02-09_122931_535.png"
    ];

    const featuredImage = "ScreenShot_2026-02-09_122717_702.png";

    return (
        <section className="user-reviews-section">
            <div className="container">
                <div className="section-header">
                    <span className="badge">用户反馈</span>
                    <h2>大家怎么说</h2>
                    <p className="subtitle">来自真实用户的体验分享</p>
                    <div className="scroll-hint">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="animate-left">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                        <span>左右滑动查看更多</span>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="animate-right">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                        </svg>
                    </div>
                </div>

                <div className="reviews-scroll-container">
                    <div className="reviews-track">
                        {reviewImages.map((img, index) => (
                            <div
                                key={index}
                                className={`review-card ${img === featuredImage ? 'featured' : ''}`}
                            >
                                <img
                                    src={`/assets/reviews/${img}`}
                                    alt={`User Review ${index + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserReviews;
