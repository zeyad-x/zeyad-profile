'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home', active: true, icon: '🏠' },
    { href: '/about', label: 'About', icon: '👨‍💻' },
    { href: '/tools', label: 'Tools', icon: '🛠️' }, 
    { href: '/projects', label: 'projects', icon: '🎯' }
  ];

  return (
    <>
      {/* Floating orb that follows mouse */}
      <div 
        className=" w-96 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: scrolled ? 0.3 : 0.1
        }}
      />

      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-2xl border-b border-cyan-500/30' 
          : 'bg-gradient-to-r from-gray-900/70 via-black/60 to-gray-900/70 backdrop-blur-lg'
      }`}>
        
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Enhanced Logo */}
            <a href="/" className="group flex items-center space-x-3 relative">
              <div className="relative">
                {/* Glowing ring effect */}

                {/* Orbiting particles */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{top: '0px', left: '50%'}}></div>
                  <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{bottom: '0px', right: '0px', animationDelay: '0.5s'}}></div>
                  <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{top: '50%', left: '0px', animationDelay: '1s'}}></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                
                <span style={{transform: 'translateX(-10px)'}} className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  Zeyad
                </span>
                {/* <span className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                  Creative Dev
                </span> */}
              </div>
            </a>

            {/* Enhanced Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                      item.active
                        ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50'
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Morphing background */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl transform transition-all duration-500 ${
                      hoveredItem === index ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center space-x-2 z-10">
                      <span className="text-lg group-hover:animate-bounce">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    
                    {/* Animated underline */}
                    <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                      item.active 
                        ? 'w-full -translate-x-1/2' 
                        : hoveredItem === index 
                          ? 'w-full -translate-x-1/2' 
                          : 'w-0 -translate-x-1/2'
                    }`}></div>
                    
                    {/* Particle effect on hover */}
                    {hoveredItem === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-75" style={{top: '20%', left: '20%'}}></div>
                        <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75" style={{top: '70%', right: '20%', animationDelay: '0.3s'}}></div>
                      </div>
                    )}
                  </a>
                ))}
                
                {/* CTA Button */}
              
              </div>
            </div>

            {/* Creative Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative w-6 h-6 mx-auto">
                  <span className={`absolute block w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-2.5' : 'top-1.5'
                  }`}></span>
                  <span className={`absolute block w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transform transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'top-2.5 opacity-100 scale-100'
                  }`}></span>
                  <span className={`absolute block w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-2.5' : 'top-3.5'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`md:hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 pb-6 translate-y-0' 
              : 'max-h-0 opacity-0 overflow-hidden -translate-y-4'
          }`}>
            <div className="relative mt-4 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl backdrop-blur-xl border border-gray-800/50 shadow-2xl">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
              
              <div className="relative p-6 space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-4 px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-[1.02] group ${
                      item.active
                        ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 shadow-lg border-l-4 border-cyan-400'
                        : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br transition-all duration-300 flex items-center justify-center ${
                      item.active 
                        ? 'from-cyan-500/30 to-purple-500/30 shadow-lg' 
                        : 'from-gray-700 to-gray-800 group-hover:from-cyan-500/20 group-hover:to-purple-500/20'
                    }`}>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-lg font-semibold">{item.label}</span>
                      <div className={`h-px bg-gradient-to-r from-transparent transition-all duration-300 ${
                        item.active ? 'via-cyan-400 to-transparent' : 'via-gray-600 to-transparent group-hover:via-cyan-400/50'
                      }`}></div>
                    </div>
                    
                    {item.active && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-gray-800">
                  <a
                    href="/contact"
                    className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Get In Touch</span>
                    <span className="ml-2 text-xl">✨</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic bottom gradient */}
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
          scrolled 
            ? 'bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-purple-400/50 to-transparent'
        }`}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float" style={{top: '60%', right: '15%', animationDelay: '2s'}}></div>
          <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float" style={{top: '40%', left: '60%', animationDelay: '4s'}}></div>
        </div>
      </nav>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}