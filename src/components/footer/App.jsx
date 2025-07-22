import React from 'react';
import { ConfigProvider, theme } from 'antd';
import './App.css';
import Header from './components/Layout/Header';
import HeroSection from './components/Sections/HeroSection';
import EnergySolutions from './components/Sections/EnergySolutions';
import PlatformSection from './components/Sections/PlatformSection';
import AboutSection from './components/Sections/AboutSection';
import ContactSection from './components/Sections/ContactSection';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#14b8a6',
          colorBgBase: '#0a0e1a',
          colorText: '#ffffff',
          borderRadius: 8,
        },
      }}
    >
      <div className="app">
        <Header />
        <HeroSection />
        <EnergySolutions />
        <PlatformSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default App;