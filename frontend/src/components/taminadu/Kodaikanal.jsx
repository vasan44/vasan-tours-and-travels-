import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Kodaikanal() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://www.thekodaichronicle.com/wp-content/uploads/2022/07/Fog.jpg')" }}> {/* Kodaikanal Mist */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Tamilnadu - Kodaikanal</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>Tamilnadu</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Kodaikanal</span>
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
             <h1 className="text-3xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Kodaikanal (Princess of Hills)</h1>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://content.jdmagicbox.com/v2/comp/dindigul/e1/9999px451.x451.220131210804.r8e1/catalogue/upper-lake-view-point-kodaikanal-observatory-dindigul-tourist-attraction-rrlxjfezip.jpg" alt="Kodaikanal Lake View" className="w-full h-[350px] object-cover hover:scale-105 transition duration-700" />
          </div>

          {/* Trip Plan Overview Cards */}
          <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Trip Plan</h3>
              <div className="bg-[#8B2248] text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex gap-4">
                      <div className="bg-white text-[#8B2248] w-32 h-20 rounded-lg flex flex-col items-center justify-center font-bold shadow-md">
                          <Sun size={24} className="mb-1" />
                          <span>Day 1</span>
                      </div>
                      <div className="bg-white text-[#8B2248] w-32 h-20 rounded-lg flex flex-col items-center justify-center font-bold shadow-md">
                          <Bus size={24} className="mb-1" />
                          <span>Day 2</span>
                      </div>
                  </div>
                  <div className="text-center md:text-right">
                      <h4 className="text-xl font-bold">Destination – Kodaikanal</h4>
                      <p className="opacity-90">Duration – 1 Nights 2 Days</p>
                  </div>
              </div>
          </div>

          {/* Day 1 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1 - Lake & Parks</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup from Madurai / Dindigul</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Proceed to Kodaikanal</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Silver Cascade Falls</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Kodaikanal Lake Boating</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Bryant Park & Coaker's Walk</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Upper Lake View</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-in at Resort & Campfire</li>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://images.trvl-media.com/place/6224591/9bf9a8eb-f5c4-400e-85dc-85491e6e38ca.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="silver falls" />
                 <img src="https://www.hindustantimes.com/ht-img/img/2024/05/17/550x309/GNxJi8vXQAAGx89_1715945463422_1715945485676.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Bryant Park" />
              </div>
          </div>

          {/* Day 2 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 2 - Forests & Caves</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast at Hotel</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pine Forest (Shooting Spot)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Guna Caves (Devil's Kitchen)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pillar Rocks Viewpoint</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Moir Point</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Shopping (Homemade Chocolates)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Madurai / Dindigul</li>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDPoEl51ANxu6Tx8oQEOzDadyJBAjgzQYTSlYcYe5bGdhGTNZMR4IWSNxO4KghtxrgIlhiGkzrhEMorU5IuJE5VAvp1a8RKB6ZU24a2F0qB3J8KknTcZrkUoyLQJyGpbgBWOl6Ts2l80M/s1600/Kodaikanal_PineForest2+(2).JPG" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Pine Forest" />
                 <img src="https://dq1q7qkthxkc0.cloudfront.net/BlogMedia/827e39c1-1e69-42c0-8bba-e450b1518353.png" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Pillar Rocks" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Private Cab for 2 days including all charges</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> One Night Stay (Hill Resort)</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> 2 Breakfasts and 1 Dinner</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Driver Bata, Toll, Parking</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> GST Included</li>
              </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-10">
              <h3 className="text-xl font-bold text-[#8B2248] mb-4 border-b pb-2">Exclusions</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Lunch</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Entry Tickets (Parks, Guna Caves)</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Boating Charges</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Personal Expenses</li>
              </ul>
          </div>

          {/* Rates */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-6">Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium text-gray-800">
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 2800 Per Head For 12 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3500 Per Head For 6 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3100 Per Head For 10 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 4200 Per Head For 4 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
              <BookingForm tourName="TamilNadu Kodaikanal" />
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="tel" placeholder="Phone" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="text" value="Kodaikanal" readOnly className="w-full p-3 rounded bg-white/20 border border-white/30 font-bold" />
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