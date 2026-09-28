import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Munnar() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://www.munnar.holiday/munnartourism/wp-content/uploads/2021/10/munnar-tourist-places.jpg')" }}> {/* Munnar Tea Garden Image */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kerala - Munnar</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>Kerala</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Munnar</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="container mx-auto px-4 md:px-12 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* --- LEFT SIDE CONTENT (Itinerary) --- */}
        <div className="w-full lg:w-2/3">
          
          {/* Destination Title */}
          <div className="mb-8">
             <h2 className="text-[#00AEEF] text-lg font-bold uppercase mb-1">Destination</h2>
             <h1 className="text-4xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Munnar</h1>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://images.herzindagi.info/image/2023/Jul/hill-stations-near-munnar.jpg" alt="Munnar Hills" className="w-full h-auto hover:scale-105 transition duration-500" />
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
                      <h4 className="text-xl font-bold">Destination – Munnar</h4>
                      <p className="opacity-90">Duration – 1 Nights 2 Days</p>
                  </div>
              </div>
          </div>

          {/* Day 1 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup at Cochin (Airport/Railway Stn)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Proceed to Munnar</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Cheeyappara Waterfalls</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Valara Waterfalls</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Tea Plantation Visit</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Spice Garden Visit</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-in at Hotel</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Dinner & Stay</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://keralatourism.travel/images/destinations/places-to-visit/munnar/devikulam-munnar-kerala-tourism-entry-fee-timings-holidays-reviews-small.jpg" className="rounded-lg h-48 w-full object-cover" alt="Waterfalls" />
                 <img src="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_55/1620106/394867.jpg" className="rounded-lg h-48 w-full object-cover" alt="Tea Estate" />
              </div>
          </div>

          {/* Day 2 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 2</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast at Hotel</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Eravikulam National Park (Rajamalai)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Tea Museum</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Mattupetty Dam</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Echo Point</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Kundala Lake</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Shopping at Town</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drive back to Cochin</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Airport / Railway Station</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://www.seasonzindia.com/images/blogs/20200127093417_1580117657.png" className="rounded-lg h-48 w-full object-cover" alt="Mattupetty Dam" />
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlFy6rILVZa9cCFM4RqX6q3Ck2FSL4grZlA&s" className="rounded-lg h-48 w-full object-cover" alt="Munnar Fog" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> Private Cab for 2 days including all charges</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> One Night Hotel Stay at Munnar (Standard/Deluxe)</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> 2 Breakfasts and 1 Dinner</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> Driver Bata, Toll, Parking</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> 24/7 Support</li>
              </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Exclusions</h3>
              <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Lunch not mentioned in Inclusion</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Entry Tickets for Parks & Museums</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Personal Expenses</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Flight / Train Tickets</li>
              </ul>
          </div>

          {/* Rates */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-6">Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium text-gray-800">
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3000 Per Head For 12 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3800 Per Head For 6 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3500 Per Head For 10 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 4200 Per Head For 4 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3600 Per Head For 8 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR (Sticky Booking Form) --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
                
                 <BookingForm tourName="Kerala Munnar" />
                
                
                <form className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm font-medium pl-1">Name</label>
                        <input type="text" placeholder="Enter your name" className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    </div>
                    <div>
                        <label className="text-sm font-medium pl-1">Email</label>
                        <input type="email" placeholder="Enter email" className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    </div>
                    <div>
                        <label className="text-sm font-medium pl-1">Phone (+91)</label>
                        <input type="tel" placeholder="Mobile Number" className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    </div>
                    <div>
                        <label className="text-sm font-medium pl-1">Whatsapp (+91)</label>
                        <input type="tel" placeholder="Whatsapp Number" className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    </div>
                    <div>
                        <label className="text-sm font-medium pl-1">City Of Residence</label>
                        <input type="text" placeholder="Your City" className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    </div>
                     <div>
                        <label className="text-sm font-medium pl-1">Travel Destination</label>
                        <input type="text" value="Munnar" readOnly className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none font-bold" />
                    </div>
                     <div>
                        <label className="text-sm font-medium pl-1">Date Of Travel</label>
                        <input type="date" className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none text-white" />
                    </div>
                    <div>
                        <label className="text-sm font-medium pl-1">No. Of People</label>
                        <input type="number" placeholder="Pax" className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    </div>
                    
                  
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