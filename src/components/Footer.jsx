import React from 'react';
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GithubIcon, 
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Energy Solutions',
      links: [
        'GeoDrilling',
        'Production Optimization',
        'Reservoir Intelligence',
        'Data Analytics',
        'AI Solutions'
      ]
    },
    {
      title: 'Platform',
      links: [
        'Fusion',
        'Dev Center',
        'Data Quality',
        'Health Score',
        'API Documentation'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'News',
        'Partners'
      ]
    },
    {
      title: 'Support',
      links: [
        'Documentation',
        'Help Center',
        'Contact Us',
        'Status Page',
        'Community'
      ]
    }
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-white mb-6 tracking-wider">
                CORVA
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Accelerating the energy future with innovative solutions that drive efficiency, 
                productivity, and profitability across energy operations worldwide.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <MailIcon size={16} className="text-primary-400" />
                  <span>hello@corva.ai</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <PhoneIcon size={16} className="text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPinIcon size={16} className="text-primary-400" />
                  <span>Houston, TX</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                  { icon: TwitterIcon, href: '#', label: 'Twitter' },
                  { icon: GithubIcon, href: '#', label: 'GitHub' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Corva AI LLC. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;