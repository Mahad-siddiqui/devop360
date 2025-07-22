// import React, { useState, useEffect } from 'react';
// import { Button } from 'antd';
// import { ArrowRight } from 'lucide-react';

// const EnergySolutions = () => {
//   const [currentSlide, setCurrentSlide] = useState(1); // Start with middle slide (GeoDrilling)

//   const solutions = [
//     {
//       id: 1,
//       title: 'Data Analytics',
//       subtitle: 'Real-time Insights',
//       description: 'Advanced analytics and real-time data processing for energy operations',
//       image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
//       cta: 'Learn More',
//       gradient: 'from-teal-900/40 to-cyan-900/40'
//     },
//     {
//       id: 2,
//       title: 'GeoDrilling',
//       subtitle: 'Unprecedented Subsurface Insights',
//       description: 'Advanced drilling analytics and real-time subsurface data visualization',
//       image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
//       cta: 'Explore GeoDrilling',
//       gradient: 'from-purple-900/40 to-blue-900/40',
//       featured: true
//     },
//     {
//       id: 3,
//       title: 'AI Solutions',
//       subtitle: 'Machine Learning Excellence',
//       description: 'AI-powered insights and machine learning for operational excellence',
//       image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
//       cta: 'Discover AI',
//       gradient: 'from-red-900/40 to-orange-900/40'
//     },
//      {
//       id: 6,
//       title: 'Data Analytics',
//       subtitle: 'Real-time Insights',
//       description: 'Advanced analytics and real-time data processing for energy operations',
//       image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
//       cta: 'Learn More',
//       gradient: 'from-teal-900/40 to-cyan-900/40'
//     },
//       {
//       id: 5,
//       title: 'GeoDrilling',
//       subtitle: 'Unprecedented Subsurface Insights',
//       description: 'Advanced drilling analytics and real-time subsurface data visualization',
//       image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
//       cta: 'Explore GeoDrilling',
//       gradient: 'from-purple-900/40 to-blue-900/40',
//       featured: true
//     },
//      {
//       id: 4,
//       title: 'AI Solutions',
//       subtitle: 'Machine Learning Excellence',
//       description: 'AI-powered insights and machine learning for operational excellence',
//       image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
//       cta: 'Discover AI',
//       gradient: 'from-red-900/40 to-orange-900/40'
//     }
//   ];

//   // Auto-advance carousel every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % solutions.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [solutions.length]);

//   const getSlidePosition = (index) => {
//     const diff = index - currentSlide;
//     if (diff === 0) return 'translate-x-0 scale-100 z-20';
//     if (diff === 1 || diff === -(solutions.length - 1)) return 'translate-x-full scale-90 z-10';
//     if (diff === -1 || diff === solutions.length - 1) return '-translate-x-full scale-90 z-10';
//     return 'translate-x-full scale-75 z-0 opacity-0';
//   };

//   return (
//     <section className="py-24 bg-gray-900 relative overflow-hidden">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Explore Devop360 Energy Solutions
//           </h2>
//           <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             Discover the limitless potential of the Corva App Store, and explore a wide range of real-time and innovative product solutions to power your operations.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative h-96 mb-12">
//           <div className="absolute inset-0 flex items-center justify-center">
//             {solutions.map((solution, index) => (
//               <div
//                 key={solution.id}
//                 className={`absolute w-80 h-80 transition-all duration-700 ease-in-out ${getSlidePosition(index)}`}
//               >
//                 <div className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer">
//                   {/* Background Image */}
//                   <div className="absolute inset-0">
//                     <img
//                       src={solution.image}
//                       alt={solution.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}></div>
//                     <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient}`}></div>
//                   </div>

//                   {/* Content */}
//                   <div className="relative z-10 p-8 h-full flex flex-col justify-end">
//                     <div className="text-center">
//                       <h3 className="text-2xl font-bold text-white mb-2">
//                         {solution.featured ? (
//                           <>
//                             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                               {solution.title}
//                             </span>
//                             <span className="text-white"> - {solution.subtitle}</span>
//                           </>
//                         ) : (
//                           solution.title
//                         )}
//                       </h3>
//                       {!solution.featured && (
//                         <p className="text-gray-300 mb-4 text-sm">
//                           {solution.subtitle}
//                         </p>
//                       )}
//                       <Button
//                         className="bg-transparent border-2 border-white/30 text-white font-medium px-6 py-2 h-auto rounded-lg transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 inline-flex items-center gap-2"
//                       >
//                         {solution.cta}
//                         <ArrowRight size={16} />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Carousel Indicators */}
//         <div className="flex justify-center space-x-2">
//           {solutions.map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-cyan-400 w-8' 
//                   : 'bg-gray-600 w-2 hover:bg-gray-500'
//               }`}
//               onClick={() => setCurrentSlide(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnergySolutions;
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { ArrowRight } from 'lucide-react';

const EnergySolutions = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle slide (GeoDrilling)

  const solutions = [
    {
      id: 1,
      title: 'Data Analytics',
      subtitle: 'Real-time Insights',
      description: 'Advanced analytics and real-time data processing for energy operations',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: 'Learn More',
      gradient: 'from-teal-900/40 to-cyan-900/40'
    },
    {
      id: 2,
      title: 'GeoDrilling',
      subtitle: 'Unprecedented Subsurface Insights',
      description: 'Advanced drilling analytics and real-time subsurface data visualization',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: 'Explore GeoDrilling',
      gradient: 'from-purple-900/40 to-blue-900/40',
      featured: true
    },
    {
      id: 3,
      title: 'AI Solutions',
      subtitle: 'Machine Learning Excellence',
      description: 'AI-powered insights and machine learning for operational excellence',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: 'Discover AI',
      gradient: 'from-red-900/40 to-orange-900/40'
    },
    {
      id: 6,
      title: 'Data Analytics',
      subtitle: 'Real-time Insights',
      description: 'Advanced analytics and real-time data processing for energy operations',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: 'Learn More',
      gradient: 'from-teal-900/40 to-cyan-900/40'
    },
    {
      id: 5,
      title: 'GeoDrilling',
      subtitle: 'Unprecedented Subsurface Insights',
      description: 'Advanced drilling analytics and real-time subsurface data visualization',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: 'Explore GeoDrilling',
      gradient: 'from-purple-900/40 to-blue-900/40',
      featured: true
    },
    {
      id: 4,
      title: 'AI Solutions',
      subtitle: 'Machine Learning Excellence',
      description: 'AI-powered insights and machine learning for operational excellence',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: 'Discover AI',
      gradient: 'from-red-900/40 to-orange-900/40'
    }
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [solutions.length]);

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const totalSlides = solutions.length;
    
    // Calculate positions with larger size for center slide
    if (diff === 0) return 'translate-x-0 scale-110 z-20'; // Larger center slide
    if (diff === 1 || diff === -(totalSlides - 1)) return 'translate-x-[60%] scale-90 z-10';
    if (diff === -1 || diff === totalSlides - 1) return '-translate-x-[60%] scale-90 z-10';
    if (diff > 1 && diff <= Math.floor(totalSlides/2)) return 'translate-x-[120%] scale-80 z-0 opacity-70';
    if (diff < -1 && diff >= -Math.floor(totalSlides/2)) return '-translate-x-[120%] scale-80 z-0 opacity-70';
    return 'translate-x-full scale-75 z-0 opacity-0';
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Devop360 Energy Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the limitless potential of the Corva App Store, and explore a wide range of real-time and innovative product solutions to power your operations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`absolute w-[600px] h-[500px] transition-all duration-700 ease-in-out ${getSlidePosition(index)}`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient}`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {solution.featured ? (
                          <>
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                              {solution.title}
                            </span>
                            <span className="text-white"> - {solution.subtitle}</span>
                          </>
                        ) : (
                          solution.title
                        )}
                      </h3>
                      {!solution.featured && (
                        <p className="text-gray-300 mb-6 text-lg">
                          {solution.subtitle}
                        </p>
                      )}
                      <p className="text-gray-200 mb-6 text-base">
                        {solution.description}
                      </p>
                      <Button
                        className="bg-transparent border-2 border-white/30 text-white font-medium px-8 py-3 h-auto rounded-lg transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 inline-flex items-center gap-2 text-lg"
                      >
                        {solution.cta}
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3">
          {solutions.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 w-10' 
                  : 'bg-gray-600 w-3 hover:bg-gray-500'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergySolutions;