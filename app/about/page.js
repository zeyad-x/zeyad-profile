'use client';
import { useState } from 'react';

// Icon components (since we can't import react-icons, I'll create SVG versions)
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.988-5.366 11.988-11.99C24.005 5.367 18.641.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.185-1.547-.737-.951-1.14-2.199-1.14-3.528s.403-2.577 1.14-3.528c.737-.951 1.888-1.547 3.185-1.547s2.448.596 3.185 1.547c.737.951 1.14 2.199 1.14 3.528s-.403 2.577-1.14 3.528c-.737.951-1.888 1.547-3.185 1.547zm7.718-1.066c-.684 0-1.24-.555-1.24-1.24s.556-1.24 1.24-1.24 1.24.555 1.24 1.24-.556 1.24-1.24 1.24z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export default function About() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 max-w-2xl w-full text-center relative z-10 border border-white/20">
        {/* Profile Image Section */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <img 
            src="/photos/IMG-20250613-WA0000.jpg" 
            alt="Zeyad Maher" 
            className="sm:w-40 sm:h-40 mx-auto rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl relative z-10 transition-all duration-500 hover:scale-110 hover:rotate-3"
            style={{ 
              border: '4px solid transparent',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6) border-box',
              backgroundClip: 'border-box'
            }}
          />
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-md animate-pulse"></div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Zeyad Maher
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            I'm a passionate Web Developer skilled in{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, and Next.js
            </span>.
            Always eager to learn new technologies and build functional, creative websites and applications.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-lg mx-auto">
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
              <span className="font-bold text-lg">Z</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Name</p>
              <p className="font-semibold text-gray-800">Zeyad Maher</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white">
              <EmailIcon />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <p className="font-semibold text-gray-800 text-sm">zeyadmaher177@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
              <PhoneIcon />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Phone</p>
              <p className="font-semibold text-gray-800">+20 106 703 9320</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white">
              <LocationIcon />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Location</p>
              <p className="font-semibold text-gray-800">Cairo, Damietta</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Connect with me</h3>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {[
              { icon: GitHubIcon, href: "https://github.com/zeyad-x", color: "hover:text-gray-800", name: "github" },
              { icon: TwitterIcon, href: "https://x.com/zeyadmaher199", color: "hover:text-blue-500", name: "twitter" },
            ].map(({ icon: Icon, href, color, name }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 ${color} transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-lg`}
                onMouseEnter={() => setHoveredSocial(name)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <Icon />
                {hoveredSocial === name && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm capitalize">
                    {name}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-pink-600">
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
}