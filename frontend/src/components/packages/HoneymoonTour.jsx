import React, { useState } from 'react';

const HoneymoonTour = () => {
  // 1. Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    destination: 'Honeymoon Tour',
    date: '',
    guests: ''
  });

  // 2. Input 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking Successful! 🎉 Data stored in MongoDB.");
        
        setFormData({ 
          name: '', email: '', mobile: '', 
          destination: 'Honeymoon Tour', date: '', guests: '' 
        });
      } else {
        alert("Booking Failed ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server Error! Make sure backend is running.");
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* --- 1. Hero Banner Section --- */}
      <div 
        className="relative h-[450px] flex items-center px-10 md:px-20 bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white border-l-4 border-[#8B2248] pl-6">
          <h1 className="text-5xl font-bold mb-2">Packages - Honeymoon Tour</h1>
          <p className="text-lg opacity-90">Home &gt; Packages &gt; Honeymoon Tour</p>
        </div>
      </div>

      {/* --- 2. Main Content & Form Section --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Text and Images */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl font-bold text-[#8B2248] mb-8 leading-tight">
            Honeymoon Tour Packages from Chennai – Start Your Forever with Vasan Tours n Travels.
          </h2>
          
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Honeymoon Couple" 
            className="w-full h-[450px] object-cover rounded-2xl shadow-xl mb-10" 
          />

          <p className="text-lg leading-relaxed text-gray-700 mb-10">
            At Vasan Tours n Travels, we ensure that your honeymoon is everything you dreamt of. 
            Our exclusive honeymoon offers allow you to travel to some of the most remarkable destinations, 
            be it a serene getaway in the misty hills of Kerala, a beach resort in Goa, or the tropical bliss of the Maldives.
          </p>

          <h3 className="text-3xl font-bold text-[#8B2248] mb-8 border-b-2 border-gray-100 pb-2">
            Why Choose Vasan Tours n Travels for Your Honeymoon?
          </h3>
          
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-[#8B2248] mb-2">1. Handpicked Romantic Destinations</h4>
              <p className="text-gray-600">Your honeymoon is extremely special. From tranquil hills to sandy shores, our packages include a range of dreamy destinations for you to enjoy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-[#8B2248] mb-2">2. Luxurious Resort Stays</h4>
              <p className="text-gray-600">Our honeymoon packages boast stays at numerous luxurious resorts with complete privacy, world-class amenities, and splendid views.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-[#8B2248] mb-2">3. Stress-Free Travel</h4>
              <p className="text-gray-600">We ensure hassle-free flights, transfers, and guided sightseeing tours, so you can focus only on your partner.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Sticky Booking Form */}
          {/* Sticky Booking Form */}
        <div className="lg:w-1/3">
        <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold text-center mb-6 bg-white text-[#8B2248] py-2 rounded-lg">For Booking</h3>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <input 
                type="text" name="name" placeholder="Name" 
                value={formData.name} onChange={handleChange} required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition placeholder-gray-300" 
              />
              <input 
                type="email" name="email" placeholder="Email" 
                value={formData.email} onChange={handleChange} required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition placeholder-gray-300" 
              />
              
              <div className="flex gap-2">
                <div className="bg-white/10 px-3 py-3 rounded-lg border border-white/20 flex items-center">🇮🇳 +91</div>
                <input 
                  type="tel" name="mobile" placeholder="Phone" 
                  value={formData.mobile} onChange={handleChange} required 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition placeholder-gray-300" 
                />
              </div>

              <input 
                type="text" name="city" placeholder="City of Residence" 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition placeholder-gray-300" 
              />
              
              <input 
                type="date" name="date" 
                value={formData.date} onChange={handleChange} required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" 
              />
              
              <input 
                type="number" name="guests" placeholder="No. Of People" 
                value={formData.guests} onChange={handleChange} required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition placeholder-gray-300" 
              />
              
              <button 
                type="submit" 
                className="w-full bg-[#E91E63] hover:bg-white hover:text-[#E91E63] text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 uppercase tracking-wider"
              >
                Book Now !
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoneymoonTour;