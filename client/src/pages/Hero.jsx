import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to PureHarvest</h1>
                <p>Your trusted partner in sustainable farming</p>
                <button className="hero-button">Learn More</button>
                <button 
                    className="hero-button" 
                    onClick={() => window.location.href = '/login-buyer'}
                >
                    Login as Buyer
                </button>
                <button 
                    className="hero-button" 
                    onClick={() => window.location.href = '/login-seller'}
                >
                    Login as Farmer
                </button>
            </div>
        </div>
    );
};

export default Hero;