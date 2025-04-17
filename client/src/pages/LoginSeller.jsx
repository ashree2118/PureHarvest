import React from "react";
const LoginSeller = () => { 
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Login as Seller</h1>
            <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">Login</button>
            </form>
        </div>
        </div>
    );
    }
export default LoginSeller;