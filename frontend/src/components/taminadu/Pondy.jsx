import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Pondy() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://mysimplesojourn.com/wp-content/uploads/2019/04/Pondicherry-at-night_2.jpg')" }}> {/* Pondy French Colony */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Tamilnadu - Pondicherry</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>Tamilnadu</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Pondicherry</span>
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
             <h1 className="text-3xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Pondicherry (French Riviera of the East)</h1>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/42/75/10/the-matrimandir-seen.jpg?w=900&h=500&s=1" alt="Matrimandir Auroville" className="w-full h-[350px] object-cover hover:scale-105 transition duration-700" />
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
                      <h4 className="text-xl font-bold">Destination – Pondicherry</h4>
                      <p className="opacity-90">Duration – 1 Nights 2 Days</p>
                  </div>
              </div>
          </div>

          {/* Day 1 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1 - French Heritage & Beach</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup from Chennai / Pondicherry</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Auroville (Matrimandir View Point)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Serenity Beach</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-in at Hotel</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break (French/Creole Cuisine)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Sri Aurobindo Ashram</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Manakula Vinayagar Temple</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Rock Beach & French Colony Walk</li>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://media.assettype.com/outlooktraveller%2F2025-06-26%2Fu0x1c96y%2Fshutterstock1518162116-min.jpg?w=640&auto=format%2Ccompress" className="rounded-lg h-48 w-full object-cover shadow-md" alt="French Colony" />
                 <img src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1527058278/Rock_Beach_1527058274.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Rock Beach" />
              </div>
          </div>

          {/* Day 2 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 2 - Backwaters & Paradise</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast at Hotel</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Chunnambar Boat House</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Paradise Beach (Island)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch Break</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Basilica of the Sacred Heart of Jesus</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Botanical Garden (Optional)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Shopping at Mission Street</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Chennai / Pondicherry</li>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1724140620953_Paradise_beach_in_pondicherry.jpg&w=1920&q=75" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Paradise Beach" />
                 <img src="https://pondicherrytourism.co.in/images/places-to-visit/header/basilica-of-the-sacred-heart-of-jesus-puducherry-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="rounded-lg h-48 w-full object-cover shadow-md" alt="Sacred Heart Church" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> Private Cab for 2 days including all charges</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-600 mt-1" /> One Night Stay (Heritage/Standard Hotel)</li>
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
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Entry Tickets & Boat Ride Charges</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Water Sports</li>
                  <li className="flex items-start gap-3"><X size={18} className="text-red-500 mt-1" /> Personal Expenses</li>
              </ul>
          </div>

          {/* Rates */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-6">Rate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium text-gray-800">
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 2600 Per Head For 12 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3300 Per Head For 6 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 2900 Per Head For 10 Pax</p>
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 4000 Per Head For 4 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
                <BookingForm tourName="TamilNadu Pondy"/>
                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="tel" placeholder="Phone" className="w-full p-3 rounded bg-white/20 border border-white/30 focus:outline-none placeholder-gray-300" />
                    <input type="text" value="Pondicherry" readOnly className="w-full p-3 rounded bg-white/20 border border-white/30 font-bold" />
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