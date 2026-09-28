import React from 'react';
import { Home, ChevronRight, Sun, Bus, Check, X } from 'lucide-react';
import BookingForm from '../BookingForm';

export default function Varkala() {
  return (
    <div className="font-sans">
      
      {/* 1. Banner Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://www.keralatourism.org/images/microsites/varkala/varkala-1024x768.jpg')" }}> {/* Varkala Cliff Image */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kerala - Varkala</h1>
          <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <Home size={16} /> <span>Home</span> 
            <ChevronRight size={16} /> <span>Domestic Tours</span>
            <ChevronRight size={16} /> <span>Kerala</span>
            <ChevronRight size={16} /> <span className="text-[#00AEEF]">Varkala</span>
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
             <h1 className="text-4xl font-bold text-[#8B2248] border-b-2 border-[#00AEEF] inline-block pb-2">Varkala</h1>
          </div>

          {/* Main Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
             <img src="https://static.toiimg.com/thumb/msid-117947786,width-748,height-499,resizemode=4,imgsize-156770/.jpg" alt="Varkala Beach" className="w-full h-auto hover:scale-105 transition duration-700" />
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
                      <h4 className="text-xl font-bold">Destination – Varkala</h4>
                      <p className="opacity-90">Duration – 1 Nights 2 Days</p>
                  </div>
              </div>
          </div>

          {/* Day 1 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 1 - Cliff & Beach</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Pickup from Trivandrum Airport / Railway Station</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Proceed to Varkala</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Check-in at Resort on Cliff</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch at Cliff Cafe</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Papanasam Beach & Sunset</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Janardanaswamy Temple Visit</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Evening Shopping at Cliff Market</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Dinner & Stay</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/783298243.jpg?k=7b58fdc6a681f8d46c2f7d23f958dd2e6422a553c56acbe9747cc046fed44ab8&o=" className="rounded-lg h-48 w-full object-cover" alt="Varkala Cliff" />
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs9VwIhVfjq87p--4LObjCyoSnBJkoU7OzA&s" className="rounded-lg h-48 w-full object-cover" alt="Beach Sunset" />
              </div>
          </div>

          {/* Day 2 Itinerary */}
          <div className="mb-12">
              <div className="bg-[#8B2248] text-white py-2 px-6 rounded-r-full w-max font-bold text-lg mb-6 shadow-md">Day 2 - Backwaters & Culture</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                  <li className="list-none flex items-center gap-2"><StarIcon /> Breakfast with Sea View</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Sivagiri Mutt Visit</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Kappil Lake & Beach</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Boating at Kappil</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Anjengo Fort & Lighthouse</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Ponnumthuruthu Island (Golden Island)</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Lunch on the way</li>
                  <li className="list-none flex items-center gap-2"><StarIcon /> Drop at Trivandrum</li>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                 <img src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fkappil-beach-1727452074_793df661390d99a3fac2.webp&w=1920&q=75" className="rounded-lg h-48 w-full object-cover" alt="Kappil Lake" />
                 <img src="https://varkalamangroves.com/wp-content/uploads/2024/12/Varkala-Mangroves-Tunnels-Group-Kayaking-1024x576.jpg" className="rounded-lg h-48 w-full object-cover" alt="Boating" />
              </div>
          </div>

          {/* Inclusions */}
          <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Inclusion</h3>
              <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> Private Cab for 2 days from Trivandrum</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> One Night Stay at Varkala (Cliff/Beach Resort)</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> 2 Breakfasts and 1 Dinner</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> Driver Bata, Toll, Parking</li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-green-600 mt-1" /> GST Included</li>
              </ul>
          </div>

          {/* Exclusions */}
          <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#8B2248] mb-4 border-b pb-2">Exclusions</h3>
              <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Lunch</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Water Sports / Paragliding Charges</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Entry Tickets for Monuments</li>
                  <li className="flex items-start gap-3"><X size={20} className="text-red-500 mt-1" /> Personal Expenses</li>
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
                  <p className="flex items-center gap-2"><span className="text-[#00AEEF] text-xl">₹</span> Rs. 3100 Per Head For 8 Pax</p>
              </div>
          </div>

        </div>

        {/* --- RIGHT SIDE SIDEBAR (Sticky Booking Form) --- */}
        <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
                <BookingForm tourName="Kerala Varkala" />
                
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
                        <input type="text" value="Varkala" readOnly className="w-full mt-1 p-3 rounded bg-white/20 border border-white/30 focus:outline-none font-bold" />
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