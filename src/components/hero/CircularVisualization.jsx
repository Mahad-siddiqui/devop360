import React from 'react';
import './CircularVisualization.css';
import { useLogo } from '../../Context/logoContext';

const CircularVisualization = () => {
  const energyIcons = [
    { id: 1, delay: 0, icon: '⚡' },
    { id: 2, delay: 1, icon: '🔋' },
    { id: 3, delay: 2, icon: '⚙️' },
    { id: 4, delay: 3, icon: '📊' },
    { id: 5, delay: 4, icon: '🔧' },
    { id: 6, delay: 5, icon: '💡' },
    { id: 7, delay: 0.5, icon: '🌐' },
    { id: 8, delay: 1.5, icon: '📈' },
  ];
  const logo = useLogo();
  return (
    <div className="circular-visualization">
      <div className="circular-border">
        <div className="gradient-ring"></div>
      </div>
      <div className="energy-icons">
        {energyIcons.map((icon) => (
          <div
            key={icon.id}
            className={`energy-icon energy-icon-${icon.id}`}
            style={{ animationDelay: `${icon.delay}s` }}
          >
            <div className="icon-content">
              <span className="icon-symbol">{icon.icon}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="center-hub  ">
        <div className="hub-core">
            <img src={logo.logo_sm_light} alt="" />
          <div className="hub-pulse">
          </div>
        </div>
        <div className="hub-ring"></div>
      </div>
      <div className="connecting-lines">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={`connection-line line-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default CircularVisualization;