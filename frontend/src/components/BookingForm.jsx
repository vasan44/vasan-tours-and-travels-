import React, { useState, useEffect } from 'react';
import API_URL from '../config/api';

export default function BookingForm({ tourName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    whatsapp: '',
    city: '',
    destination: tourName || '', 
    date: '',
    guests: ''
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, destination: tourName || '' }));
  }, [tourName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('📤 Tour booking payload:', formData);
    
    try {
      const response = await fetch(`${API_URL}/api/tour-bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(`${tourName} Booking Successful! 🎉`);
        setFormData({ 
          name: '', email: '', mobile: '', whatsapp: '', 
          city: '', destination: tourName || '', date: '', guests: '' 
        });
      } else {
        alert(`Booking Failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('❌ Tour booking error:', error);
      alert('Server Error! Please check if backend is running.');
    }
  };

  return (
    <div className="bg-[#8B2248] p-4 sm:p-6 rounded-xl shadow-2xl text-white sticky top-28">
      
      {/* Ribbon Title */}
      <div className="relative bg-white text-[#8B2248] text-center font-bold text-base sm:text-lg md:text-xl py-2 sm:py-3 px-6 sm:px-10 rounded shadow-md mx-auto w-max -mt-8 sm:-mt-10 mb-6 sm:mb-8 border-2 border-[#8B2248] uppercase tracking-wider transform -rotate-1">
        For Booking
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="w-full p-2.5 sm:p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:bg-white focus:text-black placeholder-gray-300 transition text-xs sm:text-sm" 
          placeholder="Name" 
        />
        
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full p-2.5 sm:p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:bg-white focus:text-black placeholder-gray-300 transition text-xs sm:text-sm" 
          placeholder="Email" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
                <label className="text-[9px] sm:text-[10px] ml-1 text-red-200">Phone *</label>
                <div className="flex gap-1">
                    <span className="p-2.5 sm:p-3 bg-white/10 rounded border border-white/20 text-[10px] sm:text-xs flex items-center">🇮🇳 +91</span>
                    <input 
                      type="tel" 
                      name="mobile" 
                      value={formData.mobile} 
                      onChange={handleChange} 
                      required 
                      className="w-full p-2.5 sm:p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:bg-white focus:text-black text-xs sm:text-sm" 
                    />
                </div>
            </div>
            <div>
                <label className="text-[9px] sm:text-[10px] ml-1 text-red-200">Whatsapp</label>
                <div className="flex gap-1">
                    <span className="p-2.5 sm:p-3 bg-white/10 rounded border border-white/20 text-[10px] sm:text-xs flex items-center">🇮🇳 +91</span>
                    <input 
                      type="tel" 
                      name="whatsapp" 
                      value={formData.whatsapp} 
                      onChange={handleChange} 
                      className="w-full p-2.5 sm:p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:bg-white focus:text-black text-xs sm:text-sm" 
                    />
                </div>
            </div>
        </div>

        <input 
          type="text" 
          name="city" 
          value={formData.city} 
          onChange={handleChange} 
          className="w-full p-2.5 sm:p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:bg-white focus:text-black placeholder-gray-300 transition text-xs sm:text-sm" 
          placeholder="City Of Residence" 
        />
        
        <input 
          type="text" 
          name="destination" 
          value={formData.destination} 
          onChange={handleChange} 
          className="w-full p-2.5 sm:p-3 rounded bg-white/20 border border-white/40 focus:outline-none focus:bg-white focus:text-black font-semibold text-xs sm:text-sm" 
          placeholder="Travel Destination" 
        />

        <div>
            <label className="text-[10px] sm:text-xs ml-1 text-gray-300">Date Of Travel</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
              className="w-full p-2.5 sm:p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:bg-white focus:text-black text-xs sm:text-sm" 
            />
        </div>

        <input 
          type="number" 
          name="guests" 
          value={formData.guests} 
          onChange={handleChange} 
          required 
          className="w-full p-2.5 sm:p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:bg-white focus:text-black placeholder-gray-300 text-xs sm:text-sm" 
          placeholder="No. Of People" 
        />

        <button 
          type="submit" 
          className="w-full bg-[#F97316] hover:bg-white hover:text-[#F97316] text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-xl mt-4 transition duration-300 uppercase tracking-wide active:scale-95">
            Book Now !
        </button>
      </form>
    </div>
  );
}
