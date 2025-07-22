import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Menu, X } from 'lucide-react';
import { useLogo } from '../Context/logoContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    'Energy Solutions',
    'Platform',
    'Company',
    'Contact'
  ];
    const logo = useLogo();


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-800/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white tracking-wider">
              <span className="sizet-2xl font-bold text-white tracking-wider">{logo?<img src={logo.logo_lg_dark} alt="devop" width={200} className='devop-logo'/>:"DEVOP"}</span>

            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item}
                href="#"
                className="nav-link text-white hover:text-primary-500 font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="btn-outline px-6 py-2 h-auto font-medium"
            >
              Sign In
            </Button>
            <Button
              className="btn-primary px-6 py-2 h-auto font-medium text-white"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-dark-800/95 backdrop-blur-md rounded-lg mt-2 p-6">
            <div className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-white hover:text-primary-500 font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  className="btn-outline w-full font-medium"
                >
                  Sign In
                </Button>
                <Button
                  className="btn-primary w-full font-medium text-white"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;