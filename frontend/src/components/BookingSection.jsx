import React, { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";
import API_URL from '../config/api';
import instagramImg1 from "../assets/instagram/instagram-1.jpg";
import instagramImg2 from "../assets/instagram/instagram-2.jpg";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', whatsapp: '',
    date: '', guests: '', tourType: '', message: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    
    try {
      const response = await fetch(`${API_URL}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMsg('Booking Successful! 🎉');
        setFormData({ name: '', email: '', mobile: '', whatsapp: '', date: '', guests: '', tourType: '', message: '' });
      } else {
        const errData = await response.json().catch(() => ({}));
        setErrorMsg(errData.message || errData.error || `Booking Failed (${response.status})`);
      }
    } catch (error) {
      setErrorMsg('Server Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Heading */}
        <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B2248] mb-4 px-4">Select Your Ideal Location For Travel</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base px-4">
                Begin Your Holiday Today! Want that perfect vacation but don't know how to go about it? Don't stress! We are one of the best tour agencies in Chennai.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Left Side: Booking Form */}
            <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl text-white min-h-[600px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80')" }}></div>
                <div className="absolute inset-0 bg-[#8B2248]/85"></div>

                <div className="relative z-10 p-6 sm:p-8 md:p-12">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Book Your Dream Tour Today!</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:bg-white focus:text-black outline-none" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:bg-white focus:text-black outline-none" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone (+91)" required className="p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:bg-white focus:text-black outline-none" />
                            <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="Whatsapp (+91)" className="p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:bg-white focus:text-black outline-none" />
                        </div>

                        <div className="w-full">
                            <select name="tourType" value={formData.tourType} onChange={handleChange} required className="w-full p-3 rounded bg-white/20 border border-white/30 text-white outline-none focus:bg-white focus:text-black appearance-none">
                                <option value="" className="text-black">Select Vacation Type</option>
                                <option value="Domestic Tour" className="text-black">Domestic Tour</option>
                               
                                <option value="Family Tour" className="text-black">Family Tour</option>
                                <option value="Educational Tour" className="text-black">Educational Tour</option>
                                <option value="Devotional Tour" className="text-black">Devotional Tour</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="p-3 rounded bg-white/20 border border-white/30 text-white outline-none focus:bg-white focus:text-black" />
                            <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="No. Of People" required className="p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:bg-white focus:text-black outline-none" />
                        </div>
                        
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="3" className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:bg-white focus:text-black outline-none"></textarea>
                        
                        {errorMsg && (
                          <div className="bg-red-500/90 text-white px-4 py-3 rounded-lg text-sm font-medium">
                            ❌ {errorMsg}
                          </div>
                        )}
                        
                        {successMsg && (
                          <div className="bg-green-500/90 text-white px-4 py-3 rounded-lg text-sm font-medium">
                            ✅ {successMsg}
                          </div>
                        )}
                        
                        <button 
                          type="submit" 
                          disabled={loading}
                          className="w-full bg-white text-[#8B2248] font-bold py-4 rounded-xl hover:bg-[#F97316] hover:text-white transition duration-300 shadow-lg uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Submitting...' : 'Book Now !'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side: Travel Images & Contact */}
            <div className="w-full lg:w-1/2 space-y-10">
                
                
                <div className="grid grid-cols-2 gap-4">
                     <div className="overflow-hidden rounded-2xl shadow-lg h-56 sm:h-72">
                        <img src={instagramImg1} alt="Instagram Preview 1" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                     </div>
                     <div className="overflow-hidden rounded-2xl shadow-lg h-56 sm:h-72">
                        <img src={instagramImg2} alt="Instagram Preview 2" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                     </div>
                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pt-6">
                    <a href="tel:+917395875934" className="flex flex-col items-center group cursor-pointer hover:scale-105 transition">
                        <div className="bg-pink-50 p-4 sm:p-5 rounded-full text-[#8B2248] mb-3 group-hover:bg-[#8B2248] group-hover:text-white transition duration-300"><Phone size={20} className="sm:w-6 sm:h-6" /></div>
                        <h4 className="font-bold text-[#8B2248] text-sm sm:text-base">Call Us</h4>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">+91-7395875934</p>
                    </a>
                    <a href="mailto:vasan2005@gmail.com" className="flex flex-col items-center group cursor-pointer hover:scale-105 transition">
                        <div className="bg-pink-50 p-4 sm:p-5 rounded-full text-[#8B2248] mb-3 group-hover:bg-[#8B2248] group-hover:text-white transition duration-300"><Mail size={20} className="sm:w-6 sm:h-6" /></div>
                        <h4 className="font-bold text-[#8B2248] text-sm sm:text-base">Mail Us</h4>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium break-all px-2">vasan2005@gmail.com</p>
                    </a>
                    <a href="https://www.google.com/maps?q=Madurai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer hover:scale-105 transition">
                        <div className="bg-pink-50 p-4 sm:p-5 rounded-full text-[#8B2248] mb-3 group-hover:bg-[#8B2248] group-hover:text-white transition duration-300"><MapPin size={20} className="sm:w-6 sm:h-6" /></div>
                        <h4 className="font-bold text-[#8B2248] text-sm sm:text-base">Address</h4>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium px-2">Madurai</p>
                    </a>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
} 
