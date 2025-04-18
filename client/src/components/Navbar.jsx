import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto p-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img width={25} src="/src/assets/Logo.png" alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="bg-black rounded-full px-3 py-2 flex items-center shadow-lg">
          <div className='pl-4'><img width={20} src="/src/assets/Navbar-leaf-logo.png" alt="Navbar-leaf-logo" /></div>
          <div className=''>
            <ul className='px-12 text-white flex items-center space-x-4'>
              <li><NavLink to="/home" className={({ isActive }) =>
                `relative px-4 text-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-[40px] ${isActive
                  ? "after:bg-[linear-gradient(to_right,#8B4513_50%,#228B22_50%)]"
                  : "after:hidden"
                }`
              }>Home</NavLink></li>
              <li><NavLink to="/features" className={({ isActive }) =>
                `relative px-4 text-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-[40px] ${isActive
                  ? "after:bg-[linear-gradient(to_right,#8B4513_50%,#228B22_50%)]"
                  : "after:hidden"
                }`
              }>Features</NavLink></li>
              <li><NavLink to="/veggielist" className={({ isActive }) =>
                `relative px-4 text-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-[40px] ${isActive
                  ? "after:bg-[linear-gradient(to_right,#8B4513_50%,#228B22_50%)]"
                  : "after:hidden"
                }`
              }>Explore Veggies</NavLink></li>
              <li><NavLink to="/forfarmers" className={({ isActive }) =>
                `relative px-4 text-[15px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-[40px] ${isActive
                  ? "after:bg-[linear-gradient(to_right,#8B4513_50%,#228B22_50%)]"
                  : "after:hidden"
                }`
              }>For Farmers</NavLink></li>
            </ul>

          </div>
          {/* Get Started Button */}
          <button className="bg-transparent border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>

        {/* Right side elements */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-800"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* User profile icon */}
          <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;