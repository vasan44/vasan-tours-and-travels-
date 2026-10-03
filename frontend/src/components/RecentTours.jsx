import React from 'react';

const tourImages = [
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800", 
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800", 
   "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/ef/4c/9c.jpg", 
   "https://assets.cntraveller.in/photos/660aa4cb9bf4040bef26fd07/master/pass/GettyImages-558950893.jpg",
   "https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/activities/t_ufs/m_activities-ooty-pykara-waterfalls_l_400_640.jpg",
   "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww"
];

export default function RecentTours() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8B2248] mb-4">
          Our Recent Tours
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed text-sm sm:text-base px-4">
          Embark on a mesmerizing journey with  Holidays Pvt Ltd. Experience vibrant cultures, stunning landscapes, and unforgettable memories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg h-56 sm:h-64 md:h-80 cursor-pointer group">
              <img 
                src={img} 
                alt={`Recent Tour ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}