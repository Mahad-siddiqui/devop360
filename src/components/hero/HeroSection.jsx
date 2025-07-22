import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import CircularVisualization from './CircularVisualization'
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle"> Devop360 solutions (Software Development Agency)</p>
            <h1 className="hero-title">
             Innovative Digital <br />  Solutions to Elevate Your Business
            </h1>
            <p className="hero-description">
              We build powerful, scalable, and user-centric web and mobile applications—tailored to your goals. From startups to enterprises, Devop360 delivers technology that drives growth.
            </p>
            <Button className="btn-outline hero-btn">
              Discover More
              <ArrowRightOutlined />
            </Button>
          </div>
          <div className="hero-visual">
            <CircularVisualization />
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
      </div>
    </section>
  );
};

export default HeroSection;