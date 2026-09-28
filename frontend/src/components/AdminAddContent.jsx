// import React, { useState } from 'react';

// export default function AdminAddContent() {
//   const [contentType, setContentType] = useState('tour'); // tour அல்லது car
//   const [formData, setFormData] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = contentType === 'tour' ? '/api/admin/add-tour' : '/api/admin/add-car';
    
//     try {
//       const response = await fetch(`http://localhost:5000${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         alert(`${contentType} வெற்றிகரமாகச் சேர்க்கப்பட்டது! ✅`);
//         e.target.reset();
//       }
//     } catch (err) { alert("Error adding content"); }
//   };

//   return (
//     <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
//       <h1 className="text-3xl font-bold text-[#8B2248] mb-8">Admin Dashboard - Add New Item</h1>
      
//       {/* தேர்வு செய்யும் பட்டன்கள் */}
//       <div className="flex gap-4 mb-8">
//         <button onClick={() => setContentType('tour')} className={`px-8 py-2 rounded-full font-bold ${contentType === 'tour' ? 'bg-[#8B2248] text-white' : 'bg-gray-200'}`}>Add Tour</button>
//         <button onClick={() => setContentType('car')} className={`px-8 py-2 rounded-full font-bold ${contentType === 'car' ? 'bg-[#8B2248] text-white' : 'bg-gray-200'}`}>Add Car</button>
//       </div>

//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2rem] shadow-2xl space-y-6">
//         <input 
//           type="text" 
//           placeholder={contentType === 'tour' ? "Tour Title (e.g., Munnar Magic)" : "Car Name (e.g., Honda City)"} 
//           onChange={(e) => setFormData({...formData, [contentType === 'tour' ? 'title' : 'name']: e.target.value})} 
//           className="w-full p-4 border rounded-xl outline-none focus:ring-2 ring-pink-500" required 
//         />
        
//         <input 
//           type="text" 
//           placeholder="Price (e.g., ₹15,000 or ₹14/km)" 
//           onChange={(e) => setFormData({...formData, price: e.target.value})} 
//           className="w-full p-4 border rounded-xl outline-none focus:ring-2 ring-pink-500" required 
//         />

//         <input 
//           type="text" 
//           placeholder="Image URL (Unsplash Link)" 
//           onChange={(e) => setFormData({...formData, image: e.target.value})} 
//           className="w-full p-4 border rounded-xl outline-none focus:ring-2 ring-pink-500" required 
//         />

//         {contentType === 'car' && (
//           <select onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full p-4 border rounded-xl outline-none" required>
//             <option value="">Select Location</option>
//             <option value="Chennai">Chennai</option>
//             <option value="Madurai">Madurai</option>
//           </select>
//         )}

//         <button type="submit" className="w-full bg-[#F97316] text-white font-bold py-4 rounded-2xl hover:bg-[#8B2248] transition shadow-lg uppercase">
//           Save {contentType} to Website
//         </button>
//       </form>
//     </div>
//   );
// }