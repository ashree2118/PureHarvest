import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                
            </div>
            <div className="hidden md:flex items-center justify-center space-x-8">
            <a href="/" className="text-black hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="/how-it-works" className="text-black hover:text-purple-400 transition-colors">
              How it works
            </a>
            <a href="/features" className="text-black hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="/pricing" className="text-black hover:text-purple-400 transition-colors">
              Premium
            </a>
          </div>
        </nav>
    );
};

export default Navbar;