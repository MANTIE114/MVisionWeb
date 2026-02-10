import React, { useState, useEffect } from 'react';
import './Features.css';

const features = [
  {
    title: "主菜单概览",
    description: "简洁直观的主菜单界面，快速访问您的媒体库、直播、动态及设置。",
    images: ["/assets/feature-menu.jpg", "/assets/feature-menu-2.png", "/assets/feature-menu-3.png"],
    align: "left"
  },
  {
    title: "多维融合播放",
    description: "彻底打破常规。MVision 独有的融合播放模式，支持 4K/HDR/杜比视界 智能清晰度切换。让您在沉浸观影的同时，同屏掌握热力图、播放记录与实时评论。通过智能数据可视化，感知每一个精彩瞬间。",
    images: ["/assets/feature-fusion-1.jpg", "/assets/feature-fusion-2.jpg", "/assets/feature-fusion-3.jpg", "/assets/feature-fusion-4.png"],
    layout: "center"
  },
  {
    title: "媒体索引首页",
    description: "全新的视觉导视系统，为您呈现实时更新的媒体资讯与个性化推荐。",
    images: ["/assets/feature-index.jpg", "/assets/feature-detail.jpg"],
    align: "left"
  },
  {
    title: "直播中心",
    description: "集成丰富的直播频道，支持流畅的清晰度切换与实时预览，尽享电视直播乐趣。",
    images: ["/assets/feature-live.jpg", "/assets/feature-live-2.jpg", "/assets/feature-live-3.png"],
    align: "right"
  },
  {
    title: "灵动动态与聚合",
    description: "实时捕捉您常看 UP 主的最新动态，确保每一份志趣相投的更新都不被错过。",
    images: ["/assets/feature-feed.jpg"],
    align: "left"
  },
  {
    title: "智能全局搜索",
    description: "强大的全局搜索功能，一键直达您想看的任何内容，支持多维过滤。",
    images: ["/assets/feature-search.jpg", "/assets/feature-search-2.jpg"],
    align: "right"
  },
  {
    layout: "grid-2",
    items: [
      {
        title: "个性化设置",
        description: "从外观主题到播放参数，一切尽在您的掌控。",
        image: "/assets/feature-settings.jpg"
      },
      {
        title: "自定义工作空间",
        description: "让您的 Apple TV 界面更符合个人使用习惯。",
        image: "/assets/feature-custom.jpg"
      }
    ]
  }
];

const Features = () => {
  const [activeCarouselIndices, setActiveCarouselIndices] = useState({});
  const appStoreUrl = "https://apps.apple.com/us/app/mvision-music/id6754966409";

  useEffect(() => {
    const intervals = features.map((feature, idx) => {
      if (feature.images && feature.images.length > 1) {
        return setInterval(() => {
          setActiveCarouselIndices(prev => ({
            ...prev,
            [idx]: ((prev[idx] || 0) + 1) % feature.images.length
          }));
        }, 4000);
      }
      return null;
    });

    return () => intervals.forEach(inv => inv && clearInterval(inv));
  }, []);

  return (
    <section id="features" className="features">
      {features.map((feature, index) => {
        if (feature.layout === 'grid-2') {
          return (
            <div key={index} className="feature-grid-2">
              {feature.items.map((item, itemIdx) => (
                <div key={itemIdx} className="feature-card">
                  <div className="card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="card-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="card-link">Apple TV 搜索MVision下载</a>
                  </div>
                </div>
              ))}
            </div>
          );
        }

        const activeIdx = activeCarouselIndices[index] || 0;
        const className = feature.layout === 'center' ? 'feature-row center' : `feature-row ${feature.align}`;

        return (
          <div key={index} className={className}>
            <div className="feature-text">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                <button className="cta-download-small">Apple TV 搜索MVision下载</button>
              </a>
            </div>
            <div className="feature-image-container">
              <div className="feature-image">
                {feature.images.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img}
                    alt={`${feature.title} ${imgIdx}`}
                    className={imgIdx === activeIdx ? 'active' : ''}
                    loading="lazy"
                  />
                ))}
              </div>
              {feature.images.length > 1 && (
                <div className="carousel-dots">
                  {feature.images.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`dot ${dotIdx === activeIdx ? 'active' : ''}`}
                      onClick={() => setActiveCarouselIndices(prev => ({ ...prev, [index]: dotIdx }))}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
