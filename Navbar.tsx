
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Name Logo */}
        <div className="text-2xl font-bold text-white tracking-tight">
          Mehedi <span className="text-blue-500">Hassan</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon placeholder */}
        <div className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
