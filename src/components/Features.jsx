import React, { useState, useEffect, useRef } from 'react';
import './Features.css';

const features = [
  {
    title: "主菜单概览",
    description: "简洁直观的主菜单界面，快速访问您的媒体库、直播、动态及设置。",
    images: ["/assets/feature-menu.jpg", "/assets/feature-menu-2.jpg", "/assets/feature-menu-3.jpg"],
    align: "left"
  },
  {
    title: "多维融合播放",
    description: "彻底打破常规。MVision 独有的融合播放模式，支持 4K/HDR/杜比视界 智能清晰度切换。让您在沉浸观影的同时，同屏掌握热力图、播放记录与实时评论。通过智能数据可视化，感知每一个精彩瞬间。",
    images: ["/assets/feature-fusion-1.jpg", "/assets/feature-fusion-3.jpg", "/assets/feature-fusion-4.jpg", "/assets/feature-fusion-5.jpg", "/assets/feature-fusion-6.jpg"],
    layout: "center"
  },
  {
    title: "媒体索引首页",
    description: "全新的视觉导视系统，为您呈现实时更新的媒体资讯与个性化推荐。",
    images: ["/assets/feature-index.jpg"],
    align: "left"
  },
  {
    title: "直播中心",
    description: "集成丰富的直播频道，支持流畅的清晰度切换与实时预览，尽享电视直播乐趣。",
    images: ["/assets/feature-live-2.jpg", "/assets/feature-live-3.jpg"],
    align: "right"
  },
  {
    title: "灵动动态与聚合",
    description: "实时捕捉您常看 UP 主的最新动态，确保每一份志趣相投的更新都不被错过。",
    images: ["/assets/feature-feed-new.jpg"],
    align: "left"
  },
  {
    title: "智能全局搜索",
    description: "强大的全局搜索功能，一键直达您想看的任何内容，支持多维过滤。",
    images: ["/assets/feature-search.jpg"],
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
        images: [
          "/assets/feature-custom-1.jpg",
          "/assets/feature-custom-2.jpg",
          "/assets/feature-custom-3.jpg",
          "/assets/feature-custom-4.jpg"
        ]
      }
    ]
  }
];

const GridFeatureCard = ({ item }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const appStoreUrl = "https://apps.apple.com/us/app/mvision-music/id6754966409";
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!item.images || item.images.length <= 1) return;

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setActiveIdx(prev => (prev + 1) % item.images.length);
      }, 3000);
    };

    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [item.images]);

  const handleDotClick = (idx) => {
    setActiveIdx(idx);
    // Reset timer on manual interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIdx(prev => (prev + 1) % item.images.length);
      }, 3000);
    }
  };

  return (
    <div className="feature-card">
      <div className="card-image">
        {item.images && item.images.length > 0 ? (
          <>
            {item.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${item.title} ${idx}`}
                className={`card-carousel-image ${idx === activeIdx ? 'active' : ''}`}
                loading="lazy"
              />
            ))}
            {/* Pagination Dots */}
            <div className="grid-card-dots">
              {item.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`grid-dot ${idx === activeIdx ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent link click if card is wrapped in a link
                    handleDotClick(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <img src={item.image} alt={item.title} loading="lazy" />
        )}
      </div>
      <div className="card-text">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="card-link">Apple TV 搜索MVision下载</a>
      </div>
    </div>
  );
};


const ScrollFeature = ({ feature, index }) => {
  const containerRef = useRef(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const containerHeight = rect.height;

      // Calculate progress based on container position relative to viewport
      const start = viewHeight * 0.5;
      const end = containerHeight - viewHeight * 0.5;
      const current = -rect.top + start;

      let progress = current / (end + start); // Normalize
      progress = Math.max(0, Math.min(1, progress));

      const count = feature.images.length;
      const idx = Math.min(Math.floor(progress * count), count - 1);

      setActiveImgIdx(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [feature.images.length]);

  return (
    <div
      className="scroll-feature-wrapper"
      ref={containerRef}
      style={{ height: `${feature.images.length * 80 + 50}vh` }} /* Dynamic height based on image count */
    >
      <div className="scroll-feature-sticky">
        <div className={`feature-content-wrapper ${feature.align || 'center'} ${feature.layout === 'center' ? 'layout-center' : ''}`}>

          <div className="feature-text">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>

          {/* Desktop: Cross-fade container */}
          <div className="feature-showcase-container desktop-only">
            {feature.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${feature.title} ${idx}`}
                className={`showcase-image ${idx === activeImgIdx ? 'active' : ''}`}
                loading="lazy"
              />
            ))}
          </div>

          {/* Mobile: Horizontal Scroll Snap */}
          <div className="feature-mobile-scroll mobile-only">
            {feature.images.map((img, idx) => (
              <div key={idx} className="mobile-scroll-item">
                <img src={img} alt={`${feature.title} ${idx}`} loading="lazy" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

// Side Navigation Component
const FeaturesNav = ({ features, activeIndex }) => {
  const scrollToFeature = (index) => {
    const element = document.getElementById(`feature-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="features-nav desktop-only">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`nav-dot-container ${index === activeIndex ? 'active' : ''}`}
          onClick={() => scrollToFeature(index)}
        >
          <div className="nav-label">{feature.title || feature.items?.[0]?.title}</div>
          <div className="nav-dot"></div>
        </div>
      ))}
    </div>
  );
};

const Features = () => {
  const appStoreUrl = "https://apps.apple.com/us/app/mvision-music/id6754966409";
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in "hot zone"
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.id.split('-')[1]);
          if (!isNaN(index)) {
            setActiveFeatureIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all feature sections
    features.forEach((_, index) => {
      const el = document.getElementById(`feature-${index}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features">
      <FeaturesNav features={features} activeIndex={activeFeatureIndex} />

      {features.map((feature, index) => {
        const sectionId = `feature-${index}`;

        let content;
        if (feature.layout === 'grid-2') {
          content = (
            <div className="feature-grid-2">
              {feature.items.map((item, itemIdx) => (
                <GridFeatureCard key={itemIdx} item={item} />
              ))}
            </div>
          );
        } else if (feature.images && feature.images.length > 1) {
          content = <ScrollFeature feature={feature} index={index} />;
        } else {
          // Single Image Feature (Static)
          const className = feature.layout === 'center' ? 'feature-row center' : `feature-row ${feature.align}`;
          content = (
            <div className={className}>
              <div className="feature-text">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                  <button className="cta-download-small">Apple TV 搜索MVision下载</button>
                </a>
              </div>
              <div className="feature-image-container static-single">
                <img src={feature.images[0]} alt={feature.title} className="static-image" loading="lazy" />
              </div>
            </div>
          );
        }

        return (
          <div id={sectionId} key={index} className="feature-section-wrapper">
            {content}
          </div>
        );
      })}
    </section>
  );
};

export default Features;
