import React from 'react';
import { ConfigProvider } from 'antd';
import Header from './components/Header';
// import Hero from './components/Hero';
import EnergySolutions from './components/EnergySolutions';
import Platform from './components/Platform';
import About from './components/About';
import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
import Footer from "./components/Footer/Footer"
import HeroSection from "./components/hero/HeroSection"


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#14b8a6',
          colorBgContainer: '#1a1a1a',
          colorBgElevated: '#2a2a2a',
          colorText: '#ffffff',
          colorTextSecondary: '#a0a0a0',
          colorBorder: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 8,
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        components: {
          Input: {
            colorBgContainer: 'rgba(64, 64, 64, 0.5)',
            colorBorder: 'rgba(255, 255, 255, 0.2)',
            colorText: '#ffffff',
          },
          Select: {
            colorBgContainer: 'rgba(64, 64, 64, 0.5)',
            colorBorder: 'rgba(255, 255, 255, 0.2)',
            colorText: '#ffffff',
          },
          Button: {
            primaryShadow: 'none',
          },
        },
      }}
    >
      <div className="App">
        <Header />
        <main>
          {/* <Hero /> */}
          <HeroSection />
          <EnergySolutions />
          <Platform />
          {/* <PlatformSection /> */}
          
          <About />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;