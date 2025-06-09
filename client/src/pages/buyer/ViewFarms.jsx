import React, { useEffect, useState } from 'react';
import axios from 'axios';

const farms = [
    {
      "name": "GreenHarvest Organics",
      "location": "Sector 23, Dwarka, Delhi",
      "rating": 4.6,
      "farmImage": "https://example.com/images/greenharvest.jpg",
      "veg_stock": [
        { "name": "Tomato", "quantity_kg": 25, "price_per_kg": 40 },
        { "name": "Cucumber", "quantity_kg": 18, "price_per_kg": 30 },
        { "name": "Spinach", "quantity_kg": 10, "price_per_kg": 20 }
      ]
    },
    {
      "name": "Nature’s Basket Farm",
      "location": "Sector 19, Dwarka, Delhi",
      "rating": 4.4,
      "farmImage": "https://example.com/images/naturesbasket.jpg",
      "veg_stock": [
        { "name": "Carrot", "quantity_kg": 15, "price_per_kg": 35 },
        { "name": "Beetroot", "quantity_kg": 12, "price_per_kg": 30 },
        { "name": "Bottle Gourd", "quantity_kg": 8, "price_per_kg": 25 }
      ]
    },
    {
      "name": "Sattvik Greens",
      "location": "Sector 16B, Dwarka, Delhi",
      "rating": 4.8,
      "farmImage": "https://example.com/images/sattvikgreens.jpg",
      "veg_stock": [
        { "name": "Lady Finger", "quantity_kg": 20, "price_per_kg": 38 },
        { "name": "Brinjal", "quantity_kg": 22, "price_per_kg": 28 },
        { "name": "Coriander", "quantity_kg": 5, "price_per_kg": 15 }
      ]
    },
    {
      "name": "Farm Fresh Co.",
      "location": "Sector 22, Dwarka, Delhi",
      "rating": 4.5,
      "farmImage": "https://example.com/images/farmfreshco.jpg",
      "veg_stock": [
        { "name": "Capsicum", "quantity_kg": 10, "price_per_kg": 50 },
        { "name": "Cauliflower", "quantity_kg": 7, "price_per_kg": 32 },
        { "name": "Radish", "quantity_kg": 14, "price_per_kg": 20 }
      ]
    },
    {
      "name": "Urban Roots Farm",
      "location": "Sector 9, Dwarka, Delhi",
      "rating": 4.7,
      "farmImage": "https://example.com/images/urbanroots.jpg",
      "veg_stock": [
        { "name": "Pumpkin", "quantity_kg": 12, "price_per_kg": 27 },
        { "name": "Zucchini", "quantity_kg": 9, "price_per_kg": 55 },
        { "name": "Green Beans", "quantity_kg": 15, "price_per_kg": 40 }
      ]
    }
  ]
  
const ViewFarms = () => {
    const [farm, setFarm] = useState([]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-green-700 mb-6">Available Organic Farms in Dwarka</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {farms.map((farm, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={farm.farmImage}
              alt={farm.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-green-800">{farm.name}</h2>
            <p className="text-sm text-gray-500">{farm.location}</p>
            <p className="text-sm text-yellow-600 mt-1">⭐ {farm.rating} / 5</p>

            <div className="mt-3">
              <h3 className="font-medium text-gray-700 mb-1">Vegetable Stock</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {farm.veg_stock.map((veg, vegIndex) => (
                  <li key={vegIndex} className="flex justify-between">
                    <span>{veg.name}</span>
                    <span>{veg.quantity_kg}kg @ ₹{veg.price_per_kg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    // // Fetch data from a placeholder API (simulate veggie listings)
    // useEffect(() => {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts?_limit=6')
    //         .then((response) => {
    //             setVeggies(response.data);
    //             setLoading(false);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             setError('Failed to load data.');
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    // if (error) return <p className="text-center text-red-500">{error}</p>;

    // return (
    //     <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //         {veggies.map((item) => (
    //             <div
    //                 key={item.id}
    //                 className="p-4 border rounded-lg shadow hover:shadow-md transition"
    //             >
    //                 <h2 className="text-lg font-bold text-green-700">{item.title}</h2>
    //                 <p className="text-gray-600 mt-2">{item.body}</p>
    //             </div>
    //         ))}
    //     </div>
    // );
};

export default ViewFarms;