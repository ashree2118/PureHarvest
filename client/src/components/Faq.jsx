import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';  

function Faq() {
    const faqItems = [
        {
            id: 1,
            question: "What Is This Platform About?",
            answer: "Pure Harvest is a platform connecting consumers directly with local farmers for fresh, organic produce. We eliminate middlemen to ensure you get the freshest vegetables while supporting local agriculture."
        },
        {
            id: 2,
            question: "How Do I Place An Order?",
            answer: "Browse farms near your location, select the vegetables you want, choose your preferred pickup time, and complete your payment. You'll receive a confirmation email with all the details for your order."
        },
        {
            id: 3,
            question: "What Kind Of Produce Can I Sell?",
            answer: "Farmers can sell all types of organic, locally grown produce including vegetables, fruits, herbs, and specialty crops. All produce must be grown following organic principles and meet our quality standards."
        },
        {
            id: 4,
            question: "Who Can Use This Platform?",
            answer: "The platform is open to both consumers looking for fresh organic produce and farmers wanting to sell directly to local customers. We welcome small-scale and family farms as well as individual buyers."
        },
        {
            id: 5,
            question: "How Can I Contact Support?",
            answer: "You can reach our support team via email at support@pureharvest.com, through the chat feature in our app, or by calling our helpline at (555) 123-4567. We're available 7 days a week from 8AM to 8PM."
        }
    ];

    // State to track which FAQ item is currently open
    const [openItem, setOpenItem] = useState(null);

    // Toggle function for expanding/collapsing FAQ items
    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Left side - Image with badge */}
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden h-[500px]">
                        <img
                            src="/api/placeholder/600/500"
                            alt="Young plant seedling growing in soil"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6">
                            <div className="flex items-center bg-white rounded-full pl-3 pr-5 py-2">
                                <div className="bg-black rounded-full p-2 mr-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="black" />
                                        <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.53 0 2.921-.574 3.978-1.516" stroke="#4ADE80" strokeWidth="3" />
                                    </svg>
                                </div>
                                <span className="font-bold">Check Fresh</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - FAQ accordion */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-5xl font-bold mb-8">FAQS</h2>

                    <div className="space-y-4">
                        {faqItems.map((item) => (
                            <div key={item.id} className="bg-gray-200 rounded-2xl overflow-hidden">
                                <button
                                    className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <span className="font-medium text-lg">{item.question}</span>
                                    <ChevronRight
                                        className={`transition-transform duration-300 ${openItem === item.id ? 'transform rotate-90' : ''}`}
                                        size={20}
                                    />
                                </button>

                                {openItem === item.id && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-700">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Faq;