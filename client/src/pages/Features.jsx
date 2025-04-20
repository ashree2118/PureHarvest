import React from "react";  
import { ArrowUpRight } from "lucide-react"; // Importing ArrowUpRight icon from lucide-react
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom    

const Features = () => {    
    
  const featureCards = [
    {
      id: 1,
      title: "Browse Farms nearest to your location",
      image: null,
      hasIcon: true,
      position: "top-left"
    },
    {
      id: 2,
      title: null,
      image: "/api/placeholder/400/250",
      imageAlt: "Fresh vegetables and greens",
      hasIcon: false,
      position: "top-center"
    },
    {
      id: 3,
      title: "Book your order of fresh veggies",
      image: null,
      hasIcon: true,
      position: "top-right"
    },
    {
      id: 4,
      title: null,
      image: "/api/placeholder/400/250",
      imageAlt: "Farmer harvesting vegetables",
      hasIcon: false,
      position: "bottom-left"
    },
    {
      id: 5,
      title: "Update your daily farm produce stock",
      image: null,
      hasIcon: true,
      position: "bottom-center"
    },
    {
      id: 6,
      title: null,
      image: "/api/placeholder/400/250",
      imageAlt: "Paper bag with fresh green vegetables",
      hasIcon: false,
      position: "bottom-right"
    }
  ];

  const handleCardClick = (id) => {
    console.log(`Card ${id} clicked`);
    // Add your navigation or action logic here
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Powering Farm-Fresh<br />
          with Smart Features
        </h2>

        {/* Feature Cards Grid - explicitly 3x2 layout */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          {featureCards.map((card) => (
            <div 
              key={card.id}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-sm h-60
                ${!card.image && 'flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow'}`}
              onClick={() => card.hasIcon ? handleCardClick(card.id) : null}
            >
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  {/* Circle Icon */}
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                    {/* Icon placeholder */}
                  </div>
                  
                  {/* Card Title */}
                  <p className="text-center px-8 text-lg font-medium">
                    {card.title}
                  </p>
                  
                  {/* Arrow Button */}
                  {card.hasIcon && (
                    <button 
                      className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center"
                      aria-label="View details"
                    >
                      <ArrowUpRight size={16} color="white" />
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Features;