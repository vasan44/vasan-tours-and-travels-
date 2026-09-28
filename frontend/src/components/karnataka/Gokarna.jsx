import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Gokarna() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section (Size Reduced) */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://s7ap1.scene7.com/is/image/incredibleindia/1-om-beach-gokarna-karnataka-city-hero?qlt=82&ts=1726720866389')" }}> {/* Gokarna Om Beach */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Karnataka - Gokarna</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>Karnataka</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Gokarna</span>
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
             <h1 className="text-3xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Gokarna (Beach Trek)</h1>
          </div>

          {/* Main Image (Size Fixed) */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://naturewalkers.in/wp-content/uploads/2017/01/DSC00337-600x338.jpg" alt="Gokarna Beach View" className="w-full h-[350px] object-cover hover:scale-105 transition duration-700" />
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
                      <h4 className="text-xl font-bold">Destination – Gokarna</h4>
                      <p className="opacity-90">Duration – 1 Nights 2 Days</p>
                  </div>
              </div>
          </div>

          {/* Day 1 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1 - Temples & Beaches</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup from Hubli / Mangalore</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Proceed to Gokarna</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Mahabaleshwar Temple Visit</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Gokarna Main Beach</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch at Beach Cafe</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Kudle Beach Sunset</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-in at Beach Resort</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Dinner & Bonfire on Beach</li>
              </div>
              
              {/* Day 1 Gallery */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://cdn.abhibus.com/2024/04/Murudeshwar-Temple.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Mahabaleshwar Temple" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Sunset_in_the_Arabian_sea%2C_Kudle_Beach%2C_Gokarna%2C_Karnataka.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Kudle Beach Sunset" />
              </div>
          </div>

          {/* Day 2 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 2 - Beach Trek & Murudeshwar</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast at Resort</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Om Beach (Water Sports)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Half Moon Beach Trek (Optional)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Paradise Beach Boat Ride</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Murudeshwar Temple & Shiva Statue</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Mirjan Fort Visit</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Hubli / Mangalore</li>
              </div>

              {/* Day 2 Gallery */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://s7ap1.scene7.com/is/image/incredibleindia/1-om-beach-gokarna-karnataka-city-hero?qlt=82&ts=1726720866389" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Om Beach" />
                 <img src="https://templeinkarnataka.com/wp-content/uploads/2024/08/Mahabaleshwara-Temple1.png" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Murudeshwar Shiva" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Private Cab for 2 days including all charges</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> One Night Stay (Beach Side Resort/Hotel)</li>
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
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Water Sports at Om Beach</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Entry Tickets for Fort/Temple</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Personal Expenses</li>
              </ul>
          </div>

          {/* Rates */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-6">Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium text-gray-800">
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3000 Per Head For 12 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3800 Per Head For 6 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3400 Per Head For 10 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 4600 Per Head For 4 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
              <BookingForm tourName="Karnataka Gokarna" />
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="tel" placeholder="Phone" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="tel" placeholder="Whatsapp" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="text" placeholder="City" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="text" value="Gokarna" readOnly className="w-full p-3 rounded bg-white/20 border border-white/30 font-bold" />
                    <input type="date" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none text-white" />
                    <input type="number" placeholder="Pax" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    
               
                </form>
            </div>
        </div>

      </div>
    </div>
  );
}

// Small Helper Component for Star Bullet
function StarIcon() {
    return <span className="text-[#00AEEF] text-lg">☆</span>;
}