import React from 'react';
import { Row, Col, Button } from 'antd';
import { 
  LinkedinOutlined, 
  TwitterOutlined, 
  YoutubeOutlined,
  ArrowRightOutlined 
} from '@ant-design/icons';
import './Footer.css';
import { useLogo } from '../../Context/logoContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logo = useLogo();
  console.log(logo);

  const footerLinks = {
    platform: [
      'Fusion',
      'Dev Center',
      'App Store',
      'API Documentation'
    ],
    solutions: [
      'GeoDrilling',
      'Energy Analytics',
      'Operations Center',
      'Data Quality'
    ],
    company: [
      'About Us',
      'Careers',
      'News & Events',
      'Contact'
    ],
    resources: [
      'Documentation',
      'Support',
      'Community',
      'Blog'
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          {/* Newsletter Section */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3 className="newsletter-title">Stay Connected</h3>
              <p className="newsletter-description">
                Get the latest updates on energy innovation and platform developments
              </p>
            </div>
            <div className="newsletter-form">
              <div className="email-input-container">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="email-input"
                />
                <Button className="subscribe-btn">
                  Subscribe
                  <ArrowRightOutlined />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <Row gutter={[48, 32]}>
              <Col xs={24} sm={12} md={6}>
                <div className="footer-column">
                  <div className="footer-logo">
                    <span className="logo-text"><img src={logo.logo_lg_light
} alt="" /></span>
                  </div>
                  <p className="footer-description">
                    Accelerating the energy future with innovative solutions and cutting-edge technology.
                  </p>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <LinkedinOutlined />
                    </a>
                    <a href="#" className="social-link">
                      <TwitterOutlined />
                    </a>
                    <a href="#" className="social-link">
                      <YoutubeOutlined />
                    </a>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="footer-column">
                  <h4 className="footer-column-title">Platform</h4>
                  <ul className="footer-links-list">
                    {footerLinks.platform.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="footer-column">
                  <h4 className="footer-column-title">Solutions</h4>
                  <ul className="footer-links-list">
                    {footerLinks.solutions.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="footer-column">
                  <h4 className="footer-column-title">Company</h4>
                  <ul className="footer-links-list">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="footer-column">
                  <h4 className="footer-column-title">Resources</h4>
                  <ul className="footer-links-list">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; {currentYear} DEVOP360 Solutions LLC. All rights reserved.</p>
              </div>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                <a href="#" className="footer-bottom-link">Terms of Service</a>
                <a href="#" className="footer-bottom-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;