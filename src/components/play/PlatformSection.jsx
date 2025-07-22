import  { useState } from 'react';
import { Tabs, Card, Button } from 'antd';
import { ArrowRightOutlined, CheckCircleOutlined, BarChartOutlined } from '@ant-design/icons';
import './PlatformSection.css';

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState('fusion');

  const platformFeatures = [
    {
      id: 1,
      title: 'Infinite Data Quality',
      description: 'Fusion combines industry experts with advanced technologies and processes to provide seamless data ingestion with unmatched data quality transparency for driving continuous improvement across your operations.',
      action: 'Learn More',
      visual: (
        <div className="feature-visual quality-visual">
          <div className="quality-indicator">
            <CheckCircleOutlined className="quality-icon" />
            <span className="quality-score">100%</span>
          </div>
          <div className="quality-metrics">
            <div className="metric-bar">
              <span>METRICS</span>
            </div>
            <div className="metric-bar">
              <span>TIMELINE</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Data Ingestion',
      description: "Fusion's proprietary data ingestion platform seamlessly aggregates well information management system data, stream data, and vendor data in real-time, and rapidly flags data quality issues related to incoming data.",
      action: 'Get Setup',
      visual: (
        <div className="feature-visual ingestion-visual">
          <div className="data-streams">
            <div className="stream stream-1"></div>
            <div className="stream stream-2"></div>
            <div className="stream stream-3"></div>
          </div>
          <div className="ingestion-hub"></div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Data Quality Operations',
      description: 'Fusion is guided by 50+ energy experts dedicated to monitoring our customer\'s data quality 24/7, 365.',
      action: 'Explore Fusion',
      visual: (
        <div className="feature-visual operations-visual">
          <BarChartOutlined className="operations-icon" />
          <div className="monitoring-badge">24/7</div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Health Score',
      description: 'As part of Fusion, Corva has developed the industry\'s first data quality scoring system to increase visibility of data quality across various ingested sources. Our goal is to reach the highest data quality score in the fastest amount of time.',
      action: 'Start Scoring',
      visual: (
        <div className="feature-visual health-visual">
          <div className="health-chart">
            <div className="chart-line"></div>
            <div className="chart-glow"></div>
          </div>
        </div>
      )
    }
  ];

  const tabItems = [
    {
      key: 'fusion',
      label: (
        <span className="tab-label">
          <div className="tab-icon fusion-icon"></div>
          Fusion
        </span>
      )
    },
    {
      key: 'dev-center',
      label: (
        <span className="tab-label">
          <div className="tab-icon dev-icon"></div>
          Dev Center
        </span>
      )
    }
  ];

  return (
    <section className="platform-section section">
      <div className="container">
        <div className="platform-header">
          <p className="platform-subtitle">PLATFORM</p>
          <h2 className="section-title">
            Transform Your Operations with<br />
            Devop Integrated Platform
          </h2>
        </div>

        <div className="platform-tabs">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems}
            className="custom-tabs"
            centered
          />
        </div>

        <div className="platform-grid">
          {platformFeatures.map((feature, index) => (
            <Card
              key={feature.id}
              className={`platform-card glass-card ${index === 0 ? 'large-card' : ''}`}
            >
              <div className="card-header">
                <h3 className="card-title">{feature.title}</h3>
              </div>
              <div className="card-body">
                <p className="card-description">{feature.description}</p>
                <Button className="btn-outline card-action">
                  {feature.action}
                  <ArrowRightOutlined />
                </Button>
              </div>
              <div className="card-visual">
                {feature.visual}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;