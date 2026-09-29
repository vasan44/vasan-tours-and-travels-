import React, { useState } from 'react';
import API_URL from '../../config/api';

const FamilyTour = () => {
  // 1. Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    destination: 'Family Tour',
    date: '',
    guests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Submit to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking Successful! 🎉 Data stored in MongoDB.");
        setFormData({ name: '', email: '', mobile: '', destination: 'Family Tour', date: '', guests: '' });
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
      {/* Hero Banner */}
      <div className="relative h-[400px] flex items-center px-10 md:px-20 bg-cover bg-center mt-20" 
           style={{ backgroundImage: "url('https://www.letsseetourandtravels.com/images/inner/family-tour.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white border-l-4 border-[#8B2248] pl-4">
          <h1 className="text-5xl font-bold mb-2">Packages - Family Tour</h1>
          <p className="text-lg">Home &gt; Packages &gt; Family Tour</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Left Side: Content */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl font-bold text-[#8B2248] mb-6">Create Unforgettable Memories with Vasan Tours n Travels.</h2>
          <img src="https://media.istockphoto.com/id/525408989/photo/family-with-suitcases-passing-by-fountain-in-tourist-resort.jpg?s=612x612&w=0&k=20&c=ztEdDxVSvMMBuvUMZBj0DBWTZIdmbTcRTy_3a1fvvBA=" 
               className="w-full h-[400px] object-cover rounded-xl mb-8 shadow-lg" alt="Family" />
          <p className="text-lg leading-relaxed mb-6">
            Family vacations are one of the best ways to bond with loved ones. Fun and relaxation await you in our customized family tour packages.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#E91E63]">
               <h4 className="font-bold">1. Personalized Experience</h4>
               <p>Tailored tours for every family member.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#E91E63]">
               <h4 className="font-bold">2. Stress-Free Travel</h4>
               <p>We handle everything from transport to stays.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Sticky Form */}
        {/* Sticky Booking Form */}
        <div className="lg:w-1/3">
        <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold text-center mb-6 bg-white text-[#8B2248] py-2 rounded-lg">For Booking</h3>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" />
              <input type="tel" name="mobile" placeholder="Phone" value={formData.mobile} onChange={handleChange} required className="w-full p-3 rounded bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" />
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-3 rounded bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" />
              <input type="number" name="guests" placeholder="No. Of People" value={formData.guests} onChange={handleChange} required className="w-full p-3 rounded bg-white/10 border border-white/20 focus:bg-white focus:text-black outline-none transition" />
              <button type="submit" className="w-full bg-[#E91E63] hover:bg-white hover:text-[#E91E63] text-white font-bold py-4 rounded-xl shadow-lg transition duration-300">
                Book Now !
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTour;