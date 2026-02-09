import React from 'react';
import './PurchaseChannels.css';

const PurchaseChannels = () => {
    const xhsProfileUrl = "https://www.xiaohongshu.com/user/profile/5c9034680000000012036a9c?xsec_token=ABWJqxQZ47ba0t2jkzHkD-qZY4ZNXlh1cnkEqnB7HJJxI=&xsec_source=pc_search";
    const xhsGoodsUrl = "https://www.xiaohongshu.com/goods-detail-tob/69802158f0c4840001cd641b";
    const appStoreUrl = "https://apps.apple.com/us/app/mvision-music/id6754966409";

    return (
        <section id="purchase" className="purchase-channels">
            <div className="container">
                <h2 className="section-title">获取 MVision</h2>
                <p className="section-subtitle">选择您偏好的渠道开启极致视听之旅</p>

                <div className="channels-grid">
                    <div className="channel-card app-store">
                        <div className="channel-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                        </div>
                        <h3>App Store</h3>
                        <p>在 Apple TV App Store 搜索 MVision 直接购买并安装。</p>
                        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="channel-btn">
                            前往 App Store
                        </a>
                    </div>

                    <div className="channel-card xhs">
                        <div className="channel-icon xhs-icon">
                            <span className="xhs-text">小</span>
                        </div>
                        <h3>小红书官方店</h3>
                        <p>关注官方小红书账号，获取最新活动福利与激活码购买。</p>
                        <div className="channel-actions">
                            <a href={xhsGoodsUrl} target="_blank" rel="noopener noreferrer" className="channel-btn goods-btn">
                                立即购买商品
                            </a>
                            <a href={xhsProfileUrl} target="_blank" rel="noopener noreferrer" className="channel-btn profile-btn">
                                访问官方主页
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurchaseChannels;
