import React from 'react';
import { ArrowRight, Users, Cpu, Globe } from 'lucide-react';

const About = () => {
  const sections = [
    {
      id: 'team',
      title: 'Our Team',
      subtitle: 'Meet Our Corvanauts',
      description: 'Passionate professionals driving energy innovation forward',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Users className="w-6 h-6" />,
      cta: 'Meet Our Corvanauts'
    },
    {
      id: 'tech',
      title: 'Our Tech',
      subtitle: 'Transform Your Operations',
      description: 'Cutting-edge technology solutions for the energy sector',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Cpu className="w-6 h-6" />,
      cta: 'Transform Your Operations'
    }
  ];

  return (
    <section className="section-padding bg-dark-900 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-4 block">
            About Devop360
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Team. Our Tech. Our Community.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="feature-card glass-card rounded-2xl overflow-hidden group cursor-pointer h-80"
            >
              <div className="relative h-full">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>{section.cta}</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Section - Full Width */}
        <div className="feature-card glass-card rounded-2xl overflow-hidden group cursor-pointer h-80">
          <div className="relative h-full">
            <img
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Our Community"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Our Community
                </h3>
              </div>
              
              <div className="flex items-center gap-2 text-primary-400 font-medium group-hover:gap-4 transition-all duration-300">
                <span>Join Energy Innovation</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;