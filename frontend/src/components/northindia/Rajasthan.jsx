import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Rajasthan() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800')" }}> {/* Jaipur Jal Mahal */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">North India - Rajasthan</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>North India</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Rajasthan</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="container mx-auto px-4 md:px-12 py-8 flex flex-col lg:flex-row gap-10">
        
        {/* --- LEFT SIDE CONTENT (Itinerary) --- */}
        <div className="w-full lg:w-2/3">
          
          {/* Destination Title */}
          <div className="mb-6">
             <h2 className="text-[#00AEEF] text-lg font-bold uppercase mb-1">Destination</h2>
             <h1 className="text-3xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Rajasthan (Land of Kings)</h1>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800" alt="Amber Fort Jaipur" className="w-full h-[350px] object-cover hover:scale-105 transition duration-700" />
          </div>

          {/* Trip Plan Overview Cards */}
          <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Trip Plan</h3>
              <div className="bg-[#8B2248] text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex gap-4">
                      <div className="bg-white text-[#8B2248] w-32 h-20 rounded-lg flex flex-col items-center justify-center font-bold shadow-md">
                          <Sun size={24} className="mb-1" />
                          <span>Day 1-2</span>
                      </div>
                      <div className="bg-white text-[#8B2248] w-32 h-20 rounded-lg flex flex-col items-center justify-center font-bold shadow-md">
                          <Bus size={24} className="mb-1" />
                          <span>Day 3-4</span>
                      </div>
                  </div>
                  <div className="text-center md:text-right">
                      <h4 className="text-xl font-bold">Destination – Jaipur, Udaipur</h4>
                      <p className="opacity-90">Duration – 3 Nights 4 Days</p>
                  </div>
              </div>
          </div>

          {/* Day 1 & 2 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1 & 2 - Pink City Jaipur</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup from Jaipur Airport</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Amber Fort (Elephant Ride)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Hawa Mahal & City Palace</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Jantar Mantar (Observatory)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Albert Hall Museum</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Chokhi Dhani Dinner</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Overnight Stay in Jaipur</li>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://chokhidhani.com/wp-content/uploads/2024/08/hawa-mahal-1.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Hawa Mahal" />
                 <img src="https://media.architecturaldigest.com/photos/5dcc34bda1a0ed00088ead55/master/w_1600%2Cc_limit/KOJ_press_1920x1280_D.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Jaipur Palace" />
              </div>
          </div>

          {/* Day 3 & 4 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 3 & 4 - Udaipur (Lakes)</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Proceed to Udaipur</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> City Palace Udaipur</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lake Pichola Boat Ride</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Jag Mandir & Fateh Sagar Lake</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Saheliyon Ki Bari</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Vintage Car Museum</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Udaipur Airport / Station</li>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=600" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Lake Pichola" />
                 <img src="https://cdn.esquireindia.co.in/article/2025-08-27T11%3A29%3A12.540Z-LEAD%20Facade_4%20copia.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Udaipur Palace" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Private AC Cab for 4 Days</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> 3 Nights Stay (Heritage/3 Star Hotels)</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Daily Breakfast & Welcome Drink</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Driver Bata, Toll, Parking</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> GST Included</li>
              </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-10">
              <h3 className="text-xl font-bold text-[#8B2248] mb-4 border-b pb-2">Exclusions</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Lunch & Dinner</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Entry Tickets for Monuments</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Elephant/Boat Ride Charges</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Personal Expenses</li>
              </ul>
          </div>

          {/* Rates */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-6">Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium text-gray-800">
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 6800 Per Head For 12 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 8900 Per Head For 6 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 7500 Per Head For 10 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 9800 Per Head For 4 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
                <BookingForm tourName="NorthIndia Rajasthan" />
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="tel" placeholder="Phone" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="text" value="Rajasthan" readOnly className="w-full p-3 rounded bg-white/20 border border-white/30 font-bold" />
                    <input type="date" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none text-white" />
                    <input type="number" placeholder="Pax" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                  </form>  
            </div>
        </div>

      </div>
    </div>
  );
}

function StarIcon() { return <span className="text-[#00AEEF] text-lg">☆</span>; }