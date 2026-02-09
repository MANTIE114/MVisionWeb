import React, { useState } from 'react';
import './ActivationModal.css';

const ActivationModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('activation'); // 'activation' or 'redeem'

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="关闭">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="modal-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'activation' ? 'active' : ''}`}
                        onClick={() => setActiveTab('activation')}
                    >
                        激活指南
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'redeem' ? 'active' : ''}`}
                        onClick={() => setActiveTab('redeem')}
                    >
                        兑换流程
                    </button>
                </div>

                <div className="modal-header">
                    <h3>{activeTab === 'activation' ? 'MVision 激活指南' : '兑换码兑换流程'}</h3>
                    <p>{activeTab === 'activation' ? '请按照以下步骤完成应用激活' : '请参考以下图示完成兑换码兑换'}</p>
                </div>

                <div className="modal-body">
                    {activeTab === 'activation' ? (
                        <img src="/assets/activation.png" alt="激活方式" className="activation-img" />
                    ) : (
                        <div className="redeem-content">
                            <div className="redemption-info">
                                <div className="platform-card apple">
                                    <div className="platform-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                        </svg>
                                    </div>
                                    <div className="platform-text">
                                        <h4>Apple 用户</h4>
                                        <p>iPhone / iPad / Mac</p>
                                        <span className="location">前往 <strong>App Store</strong> 或 <strong>Apple Music</strong> 兑换</span>
                                    </div>
                                </div>
                                <div className="platform-card android">
                                    <div className="platform-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.523 15.3414C17.0609 15.3414 16.691 14.962 16.691 14.4811C16.691 14.0189 17.0609 13.6394 17.523 13.6394C17.985 13.6394 18.3549 14.0189 18.3549 14.4811C18.3549 14.962 17.985 15.3414 17.523 15.3414ZM6.47703 15.3414C6.01503 15.3414 5.64508 14.962 5.64508 14.4811C5.64508 14.0189 6.01503 13.6394 6.47703 13.6394C6.93902 13.6394 7.30898 14.0189 7.30898 14.4811C7.30898 14.962 6.93902 15.3414 6.47703 15.3414ZM17.965 10.8601L19.7582 7.64939C19.9231 7.35339 19.8211 6.97401 19.5342 6.80401C19.247 6.63401 18.8804 6.73711 18.7111 7.02534L16.8841 10.3013C15.4343 9.61057 13.8016 9.21401 12 9.21401C10.1984 9.21401 8.56574 9.61057 7.1159 10.3013L15.2882 7.02534C15.1196 6.73711 14.753 6.63401 14.4658 6.80401C14.1789 6.97401 14.0769 7.35339 12.2418 7.64939L16.035 10.8601C13.636 10.8601 12 12.5165 12 14.6133V15.1118H20.2458C20.2458 13.0152 18.609 11.3582 17.965 10.8601ZM3.75422 10.8601C3.11029 11.3582 1.47417 13.0152 1.47417 15.1118H22.5258C22.5258 13.0152 20.8897 11.3582 20.2458 10.8601C20.2458 10.8601 3.75422 10.8601 3.75422 10.8601ZM1.47417 16.0352V20.2458C1.47417 21.0425 2.1121 21.6811 2.90807 21.6811H21.0919C21.8879 21.6811 22.5258 21.0425 22.5258 20.2458V16.0352H1.47417Z" />
                                        </svg>
                                    </div>
                                    <div className="platform-text">
                                        <h4>Android 用户</h4>
                                        <p>Apple Music 应用</p>
                                        <span className="location">前往 <strong>Apple Music</strong> 设置中兑换</span>
                                    </div>
                                </div>
                            </div>
                            <div className="redeem-visual-guide">
                                <h5>详细图文步骤：</h5>
                                <img src="/assets/redeem-guide.png" alt="兑换流程图示" className="activation-img" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActivationModal;
