import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Wayanad() {
    return (
        <div className="font-sans">

            {/* 1. Banner Section */}
            <div className="relative w-full h-[350px] sm:h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
                style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/wayanad-tea-plantation-savour-beauty-nature-lover-s-paradise-welcomes-green-delights-enjoy-tour-155232741.jpg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 container mx-auto pt-16 sm:pt-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Kerala - Wayanad</h1>
                    <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base opacity-90 flex-wrap">
                        <Home size={16} /> <span>Home</span>
                        <ChevronRight size={16} /> <span>Domestic Tours</span>
                        <ChevronRight size={16} /> <span>Kerala</span>
                        <ChevronRight size={16} /> <span className="text-[#00AEEF]">Wayanad</span>
                    </div>
                </div>
            </div>

            {/* 2. Main Content Layout */}
            <div className="container mx-auto px-4 md:px-12 py-12 flex flex-col lg:flex-row gap-10">

                {/* --- LEFT SIDE CONTENT (Itinerary) --- */}
                <div className="w-full lg:w-2/3">

                    {/* Destination Title */}
                    <div className="mb-8">
                        <h2 className="text-[#00AEEF] text-base sm:text-lg font-bold uppercase mb-1">Destination</h2>
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Wayanad</h1>
                    </div>

                    {/* Main Image */}
                    <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
                        <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2Ftestimage-coverimage--Wayanaddrew.jpg&w=1920&q=75" alt="Wayanad Tea Garden" className="w-full h-auto hover:scale-105 transition duration-700" />
                    </div>

                    {/* Trip Plan Overview Cards */}
                    <div className="mb-10">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Trip Plan</h3>
                        <div className="bg-[#8B2248] text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex gap-4">
                                <div className="bg-white text-[#8B2248] w-28 sm:w-32 h-20 rounded-lg flex flex-col items-center justify-center font-bold shadow-md">
                                    <Sun size={24} className="mb-1" />
                                    <span className="text-sm sm:text-base">Day 1</span>
                                </div>
                                <div className="bg-white text-[#8B2248] w-28 sm:w-32 h-20 rounded-lg flex flex-col items-center justify-center font-bold shadow-md">
                                    <Bus size={24} className="mb-1" />
                                    <span className="text-sm sm:text-base">Day 2</span>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <h4 className="text-lg sm:text-xl font-bold">Destination – Wayanad</h4>
                                <p className="opacity-90 text-sm sm:text-base">Duration – 1 Nights 2 Days</p>
                            </div>
                        </div>
                    </div>

                    {/* Day 1 Itinerary */}
                    <div className="mb-12">
                        <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-base sm:text-lg mb-6 shadow-md">Day 1</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 text-sm sm:text-base">
                            <li className="list-none flex items-center gap-2"><StarIcon /> Pickup at Calicut Junction & Proceed to Wayanad</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Lunch</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Reaches Wayanad</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Karlad Lake</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Refreshment ( Rooms will be Allotted )</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Shopping</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Dinner</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Banasura Sagar Dam, Parrot Park</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Stay</li>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <img src="https://www.indianholiday.com/wordpress/wp-content/uploads/2025/06/Things-to-Do-in-Wayanad.jpg" className="rounded-lg h-40 sm:h-48 w-full object-cover" alt="Dam" />
                            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2024/12/23174053/glass-bridge-wayanad.jpeg" className="rounded-lg h-40 sm:h-48 w-full object-cover" alt="Resort" />
                        </div>
                    </div>

                    {/* Day 2 Itinerary */}
                    <div className="mb-12">
                        <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-base sm:text-lg mb-6 shadow-md">Day 2</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 text-sm sm:text-base">
                            <li className="list-none flex items-center gap-2"><StarIcon /> Refreshment</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Pookode Lake</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Checkout from Hotel</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Proceed to Calicut</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Kozhikode Beach</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> 900 Kandi</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Dinner</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Lunch</li>
                            <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Calicut with lot of memories</li>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKRkPUKuSQTtJ8bSSXrNfYmekTDefj7NZjw&s" className="rounded-lg h-40 sm:h-48 w-full object-cover" alt="900 Kandi" />
                            <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2022/06/Bamboo-Rafting-at-Kuruva-Island.jpg" className="rounded-lg h-40 sm:h-48 w-full object-cover" alt="Lake" />
                        </div>
                    </div>

                    {/* Inclusions */}
                    <div className="mb-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
                        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                            <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1 flex-shrink-0" /> Any Non Ac vehicle for 2 days including all charges</li>
                            <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1 flex-shrink-0" /> One Night Hotel Stay at Wayanad ( Quad Sharing as Non Ac Rooms )</li>
                            <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1 flex-shrink-0" /> 2 Breakfasts and 1 Dinner</li>
                            <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1 flex-shrink-0" /> Jeep Safari Charges at 900 Kandi</li>
                            <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1 flex-shrink-0" /> Guidance</li>
                        </ul>
                    </div>

                    {/* Exclusions */}
                    <div className="mb-10">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Exclusions</h3>
                        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                            <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1 flex-shrink-0" /> Food not mentioned above in Inclusion</li>
                            <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1 flex-shrink-0" /> All Entry Tickets</li>
                            <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1 flex-shrink-0" /> Other Expenses</li>
                            <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1 flex-shrink-0" /> 900 Kandi Entry</li>
                            <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1 flex-shrink-0" /> Train Tickets</li>
                        </ul>
                    </div>

                    {/* Rates */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#8B2248] mb-6">Rate</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 font-medium text-gray-800 text-sm sm:text-base">
                            <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 2700 Per Head For 12 Pax</p>
                            <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3400 Per Head For 6 Pax</p>
                            <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3000 Per Head For 10 Pax</p>
                            <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3600 Per Head For 4 Pax</p>
                            <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3300 Per Head For 8 Pax</p>
                        </div>
                    </div>

                </div>

                {/* --- RIGHT SIDE SIDEBAR (Sticky Booking Form) --- */}
                <div className="w-full lg:w-1/3">
                    <div className="lg:sticky lg:top-28">
                        <BookingForm tourName="Kerala Wayanad" />
                    </div>
                </div>

            </div>
        </div>
    )

        
}

// Small Helper Component for Star Bullet
function StarIcon() {
    return <span className="text-[#00AEEF] text-lg flex-shrink-0">☆</span>;
}
