import React from "react";      

const Features = () => {    
    
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Features</h1>
        <p className="text-gray-700 mb-4">
          Explore the amazing features of our platform that make it easy to grow and sell your produce.
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">Feature 1: User-friendly interface for farmers and buyers.</li>
          <li className="mb-2">Feature 2: Real-time tracking of orders and deliveries.</li>
          <li className="mb-2">Feature 3: Secure payment options for hassle-free transactions.</li>
          <li className="mb-2">Feature 4: Community support and resources for farmers.</li>
        </ul>
      </div>
    </div>
  );
}
export default Features;