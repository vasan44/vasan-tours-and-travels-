import React, { useState } from 'react';
import API_URL from '../../config/api';

const EducationalTour = () => {
  // 1. Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    destination: 'Educational Tour',
    date: '',
    guests: ''
  });

  // 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Educational Tour Booking Successful! 🎉 .");
        // ஃபார்மை காலி செய்ய
        setFormData({ 
          name: '', email: '', mobile: '', city: '',
          destination: 'Educational Tour', date: '', guests: '' 
        });
      } else {
        alert("Booking Failed ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server Error! Backend ");
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* --- 1. Hero Banner Section --- */}
      <div 
        className="relative h-[450px] flex items-center px-10 md:px-20 bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('https://i0.wp.com/www.damodarcollege.edu.in/newsite/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-27-at-1.49.26-PM.jpeg?resize=1200%2C600&ssl=1')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white border-l-4 border-[#F97316] pl-6">
          <h1 className="text-5xl font-bold mb-2">Educational Tour</h1>
          <p className="text-lg opacity-90 uppercase tracking-wider">Home &gt; Packages &gt; Educational Tour</p>
        </div>
      </div>

      {/* --- 2. Main Content & Form Section --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-[#8B2248] mb-2 border-b-4 border-[#00AEEF] inline-block pb-1">
            Learning Beyond Classrooms
          </h2>
          <div className="w-full h-[1px] bg-gray-200 mb-8 mt-1"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We organize industrial visits, historical site tours, and nature camps for schools and colleges. 
            Safe, secure, and knowledgeable trips for students with experienced guides. Our educational tours are designed to provide students with practical knowledge and exposure to the real world.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Educational Trips:</h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-10 text-lg">
             <li>NASA Kennedy Space Center Tour</li>
             <li>Historical Tour of Delhi & Agra</li>
             <li>Science City & Planetarium Visits</li>
             <li>Eco-Tours to Wildlife Sanctuaries</li>
             <li>Industrial Visits to Manufacturing Plants</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoU6XxuM9KUz1OJabJgGDoyfAEsXypq2l5w&s" 
                className="rounded-2xl shadow-xl hover:scale-105 transition duration-500 w-full h-64 object-cover" alt="Student Group" />
              <img 
                src="https://ssm.school.ssmetrust.in/wp-content/uploads/2024/02/Educational-Tour-1.jpg" 
                className="rounded-2xl shadow-xl hover:scale-105 transition duration-500 w-full h-64 object-cover" alt="Educational Trip" />
          </div>
        </div>

        {/*  Sticky Booking Form */}
         {/* Sticky Booking Form */}
        <div className="lg:w-1/3">
        <div className="sticky top-28 bg-[#8B2248]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold text-center mb-6 bg-white text-[#8B2248] py-2 rounded-lg">For Booking</h3>

            {/* Form submission handles saving to DB */}
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
                value={formData.city} onChange={handleChange} required
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

export default EducationalTour;