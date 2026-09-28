import React, { useState } from 'react';

const DevotionalTour = () => {
  // 1. Form State: 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    destination: 'Devotional Tour',
    date: '',
    guests: ''
  });

  // 2. handleChange: 
  const handleChange = (e) => {
    // name 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // 3. handleSubmit: 'Book Now'
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking Successful! 🎉 .");
        
        setFormData({ 
          name: '', email: '', mobile: '', city: '',
          destination: 'Devotional Tour', date: '', guests: '' 
        });
      } else {
        alert("Booking Failed ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server Error! Backend .");
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* --- 1. Hero Banner Section --- */}
      <div 
        className="relative h-[450px] flex items-center px-10 md:px-20 bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('https://5.imimg.com/data5/AD/HC/GLADMIN-64391364/devotional-tour-packages-500x500.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white border-l-4 border-[#8B2248] pl-6">
          <h1 className="text-5xl font-bold mb-2">Packages - Devotional Tour</h1>
          <p className="text-lg opacity-90">Home &gt; Packages &gt; Devotional Tour</p>
        </div>
      </div>

      {/* --- 2. Content & Form Section --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* */}
        <div className="lg:w-2/3">
          <img 
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fe/8d/5a.jpg" 
            alt="South Indian Temple" 
            className="w-full h-[450px] object-cover rounded-2xl shadow-xl mb-10" 
          />

          <h2 className="text-4xl font-bold text-[#8B2248] mb-6 leading-tight">Devotional Package</h2>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-10">
            Experience the divine and embark on a spiritual journey with Vasan Tours N Travels. Our specially curated devotional packages are designed to offer a soul-soothing experience that connects you to the rich spiritual heritage of India.
          </p>

          <div className="space-y-6 text-lg">
            <p><strong>1. Expertly Curated Itineraries:</strong> </p>
            <p><strong>2. Comfortable Travel:</strong> .</p>
          </div>
        </div>

        {/* Sticky Booking Form */}
        <div className="lg:w-1/3">
        <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold text-center mb-6 bg-white text-[#8B2248] py-2 rounded-lg">For Booking</h3>

            {/* onSubmit  */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              
              {/* */}
              <input 
                type="text" 
                name="name" // <<<< 
                placeholder="Name" 
                value={formData.name} // <<<< 
                onChange={handleChange} // <<<< 
                required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" 
              />

              <input 
                type="email" 
                name="email" // <<<< 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" 
              />
              
              <div className="flex gap-2">
                <div className="bg-white/10 px-3 py-3 rounded-lg border border-white/20 flex items-center">🇮🇳 +91</div>
                <input 
                  type="tel" 
                  name="mobile" // <<<< 
                  placeholder="Phone" 
                  value={formData.mobile} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" 
                />
              </div>

              <input 
                type="text" 
                name="city" // <<<< 
                placeholder="City of Residence" 
                value={formData.city} 
                onChange={handleChange} 
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" 
              />
              
              <input 
                type="date" 
                name="date" // <<<< 
                value={formData.date} 
                onChange={handleChange} 
                required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" 
              />
              
              <input 
                type="number" 
                name="guests" // <<<< 
                placeholder="No. Of People" 
                value={formData.guests} 
                onChange={handleChange} 
                required 
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" 
              />
              
              <button 
                type="submit" // <<<< 
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

export default DevotionalTour;