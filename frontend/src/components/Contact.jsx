
import React, { useState } from 'react'; 
import { Phone, Mail, MapPin, Home, ChevronRight } from 'lucide-react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import API_URL from '../config/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', whatsapp: '', city: '', 
    destination: '', date: '', guests: '', tourType: '', message: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const messageText = `*New Inquiry from Vetri Holidays*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Destination:* ${formData.destination}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Tour Type:* ${formData.tourType}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappNumber = "917395875934"; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${messageText}`;

    try {
      
      const response = await fetch(`${API_URL}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Enquiry Sent Successfully! Opening WhatsApp... ✅.");
        
        
        window.open(whatsappURL, '_blank');

        setFormData({ 
          name: '', email: '', mobile: '', whatsapp: '', city: '', 
          destination: '', date: '', guests: '', tourType: '', message: '' 
        });
      } else {
        alert("Submission Failed ❌");
      }
    } catch (error) {
      
      window.open(whatsappURL, '_blank');
      alert("Redirecting to WhatsApp due to server busy!.");
    }
  };

  return (
    <div className="pt-28 md:pt-32 pb-10 font-sans"> 

      {/* 1. Banner Section - Color code fixed to #8B2248 */}
      <div className="relative w-full h-72 md:h-80 bg-cover bg-center flex items-center"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800')" }}> 
        <div className="absolute inset-0 bg-[]/85"></div> 
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">Contact Us</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base font-medium opacity-90">
            <Home size={16} /> <span>Home</span> <ChevronRight size={16} /> <span className="text-[#00AEEF]">Contact Us</span>
          </div>
        </div>
      </div>

      {/* 2. Contact Info Cards */}
      <div className="container mx-auto px-6 md:px-12 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="tel:+917395875934" className="bg-white p-10 rounded-xl shadow-2xl text-center hover:-translate-y-2 transition duration-300 border-b-4 border-[#8B2248]">
                <div className="w-16 h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-[#8B2248] mb-6 shadow-sm"><Phone size={30} /></div>
                <h3 className="text-xl font-bold text-[#8B2248] mb-2 uppercase tracking-wide">Call Us</h3>
                <p className="text-gray-600 font-medium text-lg">+91-7395875934</p>
            </a>
            <a href="mailto:vasan2005@gmail.com" className="bg-white p-10 rounded-xl shadow-2xl text-center hover:-translate-y-2 transition duration-300 border-b-4 border-[#8B2248]">
                <div className="w-16 h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-[#8B2248] mb-6 shadow-sm"><Mail size={30} /></div>
                <h3 className="text-xl font-bold text-[#8B2248] mb-2 uppercase tracking-wide">Mail Us</h3>
                <p className="text-gray-600 font-medium text-sm md:text-lg break-all px-2">vasan2005@gmail.com</p>
            </a>
            <a href="https://www.google.com/maps?q=Madurai" target="_blank" rel="noopener noreferrer" className="bg-white p-10 rounded-xl shadow-2xl text-center hover:-translate-y-2 transition duration-300 border-b-4 border-[#8B2248]">
                <div className="w-16 h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-[#8B2248] mb-6 shadow-sm"><MapPin size={30} /></div>
                <h3 className="text-xl font-bold text-[#8B2248] mb-2 uppercase tracking-wide">Address</h3>
                <p className="text-gray-600 font-medium leading-relaxed">Madurai</p>
            </a>
        </div>
      </div>

      {/* 3. Booking Form & Map Section */}
      <div className="container mx-auto px-4 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-10">

            {/* Left Side: Booking Form */}
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative min-h-[650px]">
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80')" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 backdrop-blur-[1px]"></div>

                <div className="relative z-10 p-8 md:p-12 text-white h-full flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 drop-shadow-md">Book Your Dream Tour Today!</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Form Fields ... (Same as your code) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:bg-white/30 backdrop-blur-md transition" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:bg-white/30 backdrop-blur-md transition" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex bg-white/20 border border-white/30 rounded-lg backdrop-blur-md overflow-hidden">
                                <span className="p-3.5 text-white border-r border-white/30 bg-black/10 flex items-center gap-1 font-medium">🇮🇳 +91</span>
                                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Phone" required className="w-full p-3.5 bg-transparent text-white placeholder-gray-200 focus:outline-none" />
                            </div>
                            <div className="flex bg-white/20 border border-white/30 rounded-lg backdrop-blur-md overflow-hidden">
                                <span className="p-3.5 text-white border-r border-white/30 bg-black/10 flex items-center gap-1 font-medium">🇮🇳 +91</span>
                                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="Whatsapp" className="w-full p-3.5 bg-transparent text-white placeholder-gray-200 focus:outline-none" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City Of Residence" className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:bg-white/30 backdrop-blur-md transition" />
                            <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="Travel Destination" className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:bg-white/30 backdrop-blur-md transition" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:bg-white/30 backdrop-blur-md transition" />
                            <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="No. Of People" required className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:bg-white/30 backdrop-blur-md transition" />
                        </div>

                        <select name="tourType" value={formData.tourType} onChange={handleChange} required className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:bg-white/30 backdrop-blur-md [&>option]:text-black cursor-pointer">
                             <option value="" disabled>Select Vacation Type</option>
                             <option value="Family">Family Trip</option>
                             <option value="Honeymoon">Honeymoon Package</option>
                             <option value="Educational">Educational Tour</option>
                             <option value="Devotional">Devotional Tour</option>
                        </select>

                        <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Message / Special Requirements" className="w-full p-3.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:bg-white/30 backdrop-blur-md transition"></textarea>

                        <button type="submit" className="w-full bg-[#8B2248] hover:bg-[#E91E63] text-white font-bold py-4 rounded-lg shadow-xl transition transform hover:-translate-y-1 text-lg tracking-wide mt-2">
                            Submit Enquiry Now
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side: Google Map Fixed */}
            <div className="w-full lg:w-1/2 h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                    title="Athena Solutiong"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.56382098671!2d78.1368297!3d9.9701463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c62956c38b29%3A0xc0f1f148e1f1f148!2sThiruppalai%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}