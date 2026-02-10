import React from 'react';
import './Footer.css';

const Footer = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contact">
                    <p>联系我们</p>
                    <div className="contact-items">
                        <a href="https://t.me/MVisionTChannel" target="_blank" rel="noopener noreferrer">TG: @MVisionTChannel</a>
                        <span>小红书: @Mvision Music</span>
                    </div>
                </div>

                <div className="footer-views">
                    <span id="busuanzi_container_site_pv" style={{ display: 'none' }}>
                        总访问量: <span id="busuanzi_value_site_pv"></span>
                    </span>
                    <span id="busuanzi_container_site_uv" style={{ display: 'none' }}>
                        访客数: <span id="busuanzi_value_site_uv"></span>
                    </span>
                </div>

                <div className="footer-copy">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
