import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Logo</Link>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-8">
            <a href="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="/how-it-works" className="text-white hover:text-purple-400 transition-colors">
              How it works
            </a>
            <a href="/features" className="text-white hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="/pricing" className="text-white hover:text-purple-400 transition-colors">
              Premium
            </a>
          </div>
        </nav>
    );
};

export default Navbar;