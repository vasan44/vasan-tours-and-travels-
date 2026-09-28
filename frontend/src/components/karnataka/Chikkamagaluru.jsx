import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Chikkamagaluru() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section (Size Reduced) */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://chikmagalurtourism.org.in/images/places-to-visit/headers/kemmangundi-chikmagalur-entry-fee-timings-holidays-reviews-header.jpg')" }}> 
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Karnataka - Chikkamagaluru</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>Karnataka</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Chikkamagaluru</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="container mx-auto px-4 md:px-12 py-8 flex flex-col lg:flex-row gap-10">
        
        {/* --- LEFT SIDE CONTENT (Itinerary) --- */}
        <div className="w-full lg:w-2/3">
          
          <div className="mb-6">
             <h2 className="text-[#00AEEF] text-lg font-bold uppercase mb-1">Destination</h2>
             <h1 className="text-3xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Chikkamagaluru</h1>
          </div>

          {/* Main Image (Size Fixed: h-[350px]) */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://ik.imagekit.io/xoxqszf3k/wp-content/uploads/2015/08/Mullayanagiri-4.jpg" alt="Mullayanagiri Peak" className="w-full h-[350px] object-cover hover:scale-105 transition duration-700" />
          </div>

          {/* Trip Plan */}
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
                      <h4 className="text-xl font-bold">Destination – Chikkamagaluru</h4>
                      <p className="opacity-90">Duration – 1 Nights 2 Days</p>
                  </div>
              </div>
          </div>

          {/* Day 1 */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1 - Peaks & Coffee</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup from Bangalore / Mysore</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Proceed to Chikkamagaluru</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Mullayanagiri Peak (Highest Peak)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Seethalayanagiri</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Baba Budangiri Datta Peeta</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Manikyadhara Falls</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-in at Homestay/Resort</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Campfire & Dinner</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/54/bf/de/mosted-visited-place.jpg" className="rounded-lg h-48 w-full object-cover" alt="Baba Budangiri View" />
                 <img src="https://www.holidify.com/images/cmsuploads/compressed/11975609215_945078922b_o_20190210160449.jpg" className="rounded-lg h-48 w-full object-cover" alt="Coffee Estate Walk" />
              </div>
          </div>

          {/* Day 2 */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 2 - Waterfalls & Nature</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast at Resort</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Jhari Waterfalls (Buttermilk Falls)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Jeep Ride to Falls</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Hirekolale Lake</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Coffee Museum / Shopping</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Belur Temple (Optional)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Bangalore / Mysore</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://www.fabhotels.com/blog/wp-content/uploads/2024/05/5f4226f8-jhari-waterfalls-22-km-from-chikmagalur.jpg" className="rounded-lg h-48 w-full object-cover" alt="Jhari Waterfalls" />
                 <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1718783843838_Hirekolale%20lake.jpeg&w=1920&q=75" className="rounded-lg h-48 w-full object-cover" alt="Hirekolale Lake" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Private Cab for 2 days including all charges</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> One Night Stay (Homestay/Resort)</li>
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
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Entry Tickets & Jeep Safari</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Personal Expenses</li>
              </ul>
          </div>

          {/* Rates */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-6">Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium text-gray-800">
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 2900 Per Head For 12 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3600 Per Head For 6 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3200 Per Head For 10 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 4300 Per Head For 4 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
               <BookingForm tourName="Karnataka Chikkamagaluru" />
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="tel" placeholder="Phone" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="text" value="Chikkamagaluru" readOnly className="w-full p-3 rounded bg-white/20 border border-white/30 font-bold" />
                  
                </form>
            </div>
        </div>

      </div>
    </div>
  );
}

function StarIcon() { return <span className="text-[#00AEEF] text-lg">☆</span>; }