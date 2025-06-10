import React, { useState } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Mock NavLink component for demonstration
  const NavLink = ({ to, children, className, onClick }) => (
    <a 
      href={to} 
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="w-full max-w-[1180px] mx-auto p-2 bg-transparent">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center z-50">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">L</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex bg-black rounded-full px-3 py-2 items-center shadow-lg">
          <div className='pl-4'>
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
          </div>
          <div>
            <ul className='px-8 xl:px-12 text-white flex items-center space-x-2 xl:space-x-4'>
              <li>
                <NavLink 
                  to="/home" 
                  className="relative px-2 xl:px-4 text-[14px] xl:text-[15px] hover:text-green-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/features" 
                  className="relative px-2 xl:px-4 text-[14px] xl:text-[15px] hover:text-green-400 transition-colors"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/farms" 
                  className="relative px-2 xl:px-4 text-[14px] xl:text-[15px] hover:text-green-400 transition-colors"
                >
                  Browse Farms
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/login-farmer" 
                  className="relative px-2 xl:px-4 text-[14px] xl:text-[15px] hover:text-green-400 transition-colors"
                >
                  For Farmers
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Desktop Get Started Button */}
          <button className="bg-transparent border border-white text-white px-3 xl:px-4 py-1 text-sm xl:text-base rounded-full hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>

        {/* Right side elements */}
        <div className="flex items-center space-x-2 sm:space-x-4 z-50">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800 hover:text-gray-600 transition-colors flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-400"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* User profile icon */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full cursor-pointer hover:bg-gray-800 transition-colors"></div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-8 h-8 text-gray-800 hover:text-gray-600 transition-colors flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-400 z-40 lg:hidden" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Navigation Menu */}
      <div className={`
        fixed inset-0 z-50 lg:hidden transform transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        <div className="w-full h-full bg-gray-400 p-12 flex flex-col">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={closeMobileMenu}
              className="text-gray-800 hover:text-black transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Card */}
          <div className="bg-black rounded-3xl px-8 py-12 mx-auto w-full max-w-sm">
            <nav>
              <ul className="space-y-8 text-center">
                <li>
                  <NavLink 
                    to="/home" 
                    onClick={closeMobileMenu}
                    className="block text-white text-xl font-medium hover:text-green-400 transition-colors"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    onClick={closeMobileMenu}
                    className="block text-white text-xl font-medium hover:text-green-400 transition-colors"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/features" 
                    onClick={closeMobileMenu}
                    className="block text-white text-xl font-medium hover:text-green-400 transition-colors"
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/farms" 
                    onClick={closeMobileMenu}
                    className="block text-white text-xl font-medium hover:text-green-400 transition-colors"
                  >
                    Browse Farms
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/login-farmer" 
                    onClick={closeMobileMenu}
                    className="block text-white text-xl font-medium hover:text-green-400 transition-colors"
                  >
                    For Farmers
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;