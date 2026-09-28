import React from 'react';

const reviews = [
  { id: 1, name: "Priya", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887" },
  { id: 2, name: "Rahul", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887" },
  { id: 3, name: "Anitha", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887" },
  { id: 4, name: "Suresh", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8B2248] mb-6">What Our Customers Says</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm sm:text-base px-4">
          Discover unforgettable journeys with  Holidays Pvt Ltd! Our success stories showcase happy travellers exploring breathtaking destinations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-4 rounded-2xl shadow-lg relative overflow-hidden group hover:-translate-y-2 transition duration-300">
              {/* Purple/Pink Background Design */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#8B2248] to-[#E91E63]"></div>
              
              {/* Logo Badge */}
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-bold text-[#8B2248]">
                Vasan
              </div>

              {/* Image */}
              <div className="relative mt-8 mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md overflow-hidden z-10">
                <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="mt-4 pb-4">
                <p className="text-gray-600 text-sm italic">"Amazing experience! Best travel agency in madurai."</p>
                <h4 className="text-[#8B2248] font-bold mt-2">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
  
}
