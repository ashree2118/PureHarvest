import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VeggieList = () => {
    const [veggies, setVeggies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from a placeholder API (simulate veggie listings)
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts?_limit=6')
            .then((response) => {
                setVeggies(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load data.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {veggies.map((item) => (
                <div
                    key={item.id}
                    className="p-4 border rounded-lg shadow hover:shadow-md transition"
                >
                    <h2 className="text-lg font-bold text-green-700">{item.title}</h2>
                    <p className="text-gray-600 mt-2">{item.body}</p>
                </div>
            ))}
        </div>
    );
};

export default VeggieList;
