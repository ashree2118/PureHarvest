import React from 'react';
import Features from './Features';

import ViewFarms from '../pages/buyer/ViewFarms';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            {/*<div className="font-sans">
              
               <header className="flex justify-between items-center p-4 bg-green-700 text-white">
                <h1 className="text-2xl font-bold">OrganicHub</h1>
                <nav className="space-x-4">
                  <Link to="/" className="hover:underline">Home</Link>
                  <Link to="/browse" className="hover:underline">Browse Farms</Link>
                  <Link to="/about" className="hover:underline">About</Link>
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </nav>
                <div className="space-x-2">
                  <Link to="/login" className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100">Login</Link>
                  <Link to="/register" className="bg-white text-green-700 px-4 py-1 rounded hover:bg-green-100">Register</Link>
                </div>
              </header> */
        
            /* Hero Section */
              /* <section className="text-center py-20 bg-green-50">
                <h2 className="text-4xl font-bold mb-4">Fresh Organic Produce from Local Farms</h2>
                <p className="text-lg text-gray-700 mb-6">Connecting buyers with trusted local farmers every day.</p>
                <div className="space-x-4">
                  <Link to="/farm" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">Browse Farms</Link>
                  <Link to="/" className="bg-white text-green-700 border border-green-700 px-6 py-2 rounded hover:bg-green-100">Join as Farmer</Link>
                </div>
              </section>
        
              
              <section className="py-16 px-4 bg-white">
                <h3 className="text-3xl text-center font-semibold mb-10">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">For Buyers</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Find nearby organic farms</li>
                      <li>Browse daily fresh produce</li>
                      <li>Add items to your cart & place orders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">For Farmers</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Create a farm profile</li>
                      <li>Update your daily inventory</li>
                      <li>Receive and manage orders</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <Features /> 
              </section>
            
              <section className="py-16 bg-green-50 px-4">
                <h3 className="text-3xl text-center font-semibold mb-10">Explore Popular Farms</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
                  <ViewFarms />
                </div>
              </section>
        
              
              <section className="py-16 bg-white px-4">
                <h3 className="text-3xl text-center font-semibold mb-10">What People Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-700">
                  <blockquote className="italic border-l-4 border-green-700 pl-4">
                    “I love being able to support local farmers and get super fresh veggies.”
                    <div className="mt-2 text-sm">– Ananya, Buyer</div>
                  </blockquote>
                  <blockquote className="italic border-l-4 border-green-700 pl-4">
                    “OrganicHub helped me sell out every morning! Super easy to use.”
                    <div className="mt-2 text-sm">– Ramesh, Farmer</div>
                  </blockquote>
                </div>
              </section>
        
              
              
            </div> */}
        
        
        
        <React.Fragment><div className="bg-gray-50 min-h-screen relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 grid grid-cols-24 grid-rows-24">
                {Array(24).fill(0).map((_, rowIndex) => (
                    Array(24).fill(0).map((_, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="border border-gray-200" />
                    ))
                ))}
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-8">
                {/* Header/Navigation */}

                {/* Main Content */}
                <main className="flex justify-between">
                    <div className="max-w-lg">
                        <h1 className="text-7xl font-bold leading-tight mb-6">
                            Pure<br />Harvest
                        </h1>
                        <p className="text-gray-700 mb-8">
                            Discover farm-fresh organic vegetables from trusted local
                            growers. Browse daily listings, book your order, an
                        </p>
                        <button className="bg-black text-white px-8 py-3 rounded-lg font-medium">
                            Get Started
                        </button>

                        <div className="flex mt-20 space-x-4">
                            <button className="bg-gray-100 text-black px-8 py-4 rounded-full flex items-center">
                                <span className="mr-2">Explore Farms</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" className="transform rotate-45">
                                    <path fill="currentColor" d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path>
                                </svg>
                            </button>
                            <button className="bg-gray-100 text-black px-8 py-4 rounded-full flex items-center">
                                <span className="mr-2">Join as Farmer</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" className="transform rotate-45">
                                    <path fill="currentColor" d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="mt-16">
                            <div className="relative">
                                <img src="/api/placeholder/400/320" alt="Plant seedling" className="object-contain" />
                                <svg className="absolute top-0 right-0" width="120" height="60" viewBox="0 0 120 60" fill="none">
                                    <path d="M10,10 Q60,10 80,40 T120,50" stroke="black" strokeWidth="2" fill="transparent" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-20 text-gray-500 flex space-x-6 tracking-widest text-xs">
                    <span>O R G A N I C</span>
                    <span>·</span>
                    <span>L O C A L</span>
                    <span>·</span>
                    <span>F R E S H</span>
                    <span>·</span>
                    <span>O R G A N I C</span>
                    <span>·</span>
                    <span>L O C A L</span>
                    <span>·</span>
                    <span>F R E S H</span>
                </footer>
            </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4 relative">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Farm Image */}
                    <div className="relative">
                        <img
                            src="/api/placeholder/1200/600"
                            alt="Organic vegetable farm with rows of crops"
                            className="w-full h-[550px] object-cover" />

                        {/* Pure Harvest Logo/Text Overlay */}
                        <div className="absolute bottom-8 left-8">
                            <h1 className="text-white text-7xl font-bold leading-tight">
                                Pure<span className="relative">
                                    <svg className="absolute -right-8 top-0 h-24 w-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30,50 Q50,20 70,50 T90,50" stroke="white" strokeWidth="4" fill="transparent" />
                                    </svg>
                                </span><br />
                                Harvest
                            </h1>
                        </div>
                    </div>

                    {/* Black Info Panel */}
                    <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-black text-white p-8 rounded-xl w-[450px]">
                        <h2 className="text-3xl font-bold mb-8">
                            Get Organic Veggies<br />
                            Straight From The Farm
                        </h2>

                        <div className="space-y-6">
                            {/* Feature 1 */}
                            <div className="flex items-start">
                                <div className="mr-4">
                                    <span className="text-xl font-bold">01.</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">100% Organic & Fresh</h3>
                                    <p className="text-gray-300 italic">Straight from the farm, no middlemen.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start">
                                <div className="mr-4">
                                    <span className="text-xl font-bold">02.</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Support Local Farmers</h3>
                                    <p className="text-gray-300 italic">Help small farmers thrive.</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start">
                                <div className="mr-4">
                                    <span className="text-xl font-bold">03.</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">No Delivery Fees</h3>
                                    <p className="text-gray-300 italic">Pick up directly from the source.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Features /> {/* Include the Features component here */}
            </React.Fragment>
            
            </>
    );
};

export default Hero;