import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Alappuzha() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000')" }}> {/* Alleppey Houseboat Image */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kerala - Alappuzha</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>Kerala</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Alappuzha</span>
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
             <h1 className="text-4xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Alappuzha (Alleppey)</h1>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/fa/77/05/alleppey-backwaters-vibe.jpg?w=900&h=500&s=1" alt="Kerala Backwaters" className="w-full h-auto hover:scale-105 transition duration-700" />
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
                      <h4 className="text-xl font-bold">Destination – Alappuzha</h4>
                      <p className="opacity-90">Duration – 1 Nights 2 Days (Houseboat Stay)</p>
                  </div>
              </div>
          </div>

          {/* Day 1 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1 - Houseboat Experience</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup from Alappuzha Railway Station / Bus Stand</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-in to Premium Houseboat (12:00 PM)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Welcome Drink & Cruise starts</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Kerala Style Lunch on Boat</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Sightseeing: Paddy Fields, Canals, Villages</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Evening Tea & Snacks</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Boat anchors at 5:30 PM</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Dinner on Board</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Overnight Stay in Houseboat</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000" className="rounded-lg h-48 w-full object-cover" alt="Kerala Lunch" />
                 <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1000" className="rounded-lg h-48 w-full object-cover" alt="Sunset in Alleppey" />
              </div>
          </div>

          {/* Day 2 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 2 - Beach & Departure</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Morning Cruise starts at 8:00 AM</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Kerala Breakfast on Boat</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-out from Houseboat (9:00 AM)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Visit Alappuzha Beach</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Visit Alleppey Lighthouse</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Shopping at Mullakkal Street</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch at Local Restaurant</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Railway Station / Bus Stand</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://www.alappuzha.com/files/packages/6727280602.jpg" className="rounded-lg h-48 w-full object-cover" alt="Alleppey Beach" />
                 <img src="https://keralatourism.travel/images/places-to-visit/headers/alappuzha-lighthouse-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="rounded-lg h-48 w-full object-cover" alt="Lighthouse" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> 22 Hours Houseboat Stay (Private Boat)</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> All Meals on Houseboat (Lunch, Tea, Dinner, Breakfast)</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> Pick up & Drop by Private Cab/Auto (Based on Pax)</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> Sightseeing as per itinerary</li>
              </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Exclusions</h3>
              <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Any extra food ordered outside menu</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Entry Tickets for Lighthouse</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Personal Expenses</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Flight / Train Tickets</li>
              </ul>
          </div>

          {/* Rates */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-6">Rate (Houseboat Package)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium text-gray-800">
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3500 Per Head For 12 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 4200 Per Head For 6 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3800 Per Head For 10 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 5500 Per Head For 2 Pax (Couple)</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 4000 Per Head For 8 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR (Sticky Booking Form) --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
                
                    <BookingForm tourName="Kerala Alappuzha" />
                
                
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
                        <input type="text" value="Alappuzha" readOnly className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none font-bold" />
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