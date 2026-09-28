import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import BookingForm from './BookingForm'; 

const packagesData = [
  { 
    id: 1, 
    title: "Domestic Tour", 
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000", 
    link: "/domestic" 
  },
  
  { 
    id: 3, 
    title: "Family Tour", 
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000", 
    link: "/packages/family" 
  },
  { 
    id: 4, 
    title: "Honeymoon Tour", 
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000", 
    link: "/packages/honeymoon" 
  },
  { 
    id: 5, 
    title: "Educational Tour", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ll8ALniOS5BXuFyFgJWxznuNaKWeb6bX3w&s", 
    link: "/packages/educational" 
  },
  { 
    id: 6, 
    title: "Devotional Tour", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiyHhlBLrDY8OV1_SAPXxgLmqXsrRR_sVvw&s", 
    link: "/packages/devotional" 
  }
];

export default function Packages() {
  return (
    <div className="font-sans">
      
      {/* Banner Section (Optional - keep existing if you want, or remove for this specific design) */}
      <div className="relative w-full h-[350px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000')" }}> 
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto">
             <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">Our Holiday Packages</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- LEFT SIDE CONTENT --- */}
          <div className="w-full lg:w-2/3">
            
            {/* Grid of 6 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {packagesData.map((item) => (
                <Link to={item.link} key={item.id} className="group relative rounded-xl overflow-hidden shadow-lg h-[250px] cursor-pointer block">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex flex-col items-center justify-center text-white">
                    <h3 className="text-2xl font-bold mb-4 drop-shadow-md">{item.title}</h3>
                    <span className="bg-[#8B2248] text-white px-5 py-2 rounded text-sm font-semibold shadow-lg flex items-center gap-2">
                       <Send size={14} /> Know More!
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Text Content - "Book Your Holiday Packages" */}
            <h2 className="text-3xl font-bold text-[#8B2248] mb-4">Book Your Holiday Packages from Chennai Now!</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Ready to plan your next trip? Contact <strong>Vasan Tours & Travels</strong> for customized holiday packages from Chennai that fit your budget and preferences. Our dedicated travel experts are here to help you every step of the way.
            </p>

            {/* Text Content - "Best Tour Packages" */}
            <h2 className="text-3xl font-bold text-[#8B2248] mb-4">Best Tour Packages from Chennai | Holiday Packages from Chennai</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Welcome to Vasan Tours n Travels, your trusted partner for the best tour packages from Chennai. Whether you want a relaxing beach vacation, a scenic hill station retreat, or a spiritual pilgrimage, we offer a wide range of holiday packages from Chennai for your travel vibes!
            </p>

            {/* Text Content - "Why Choose Our Holiday Packages" */}
            <h2 className="text-3xl font-bold text-[#8B2248] mb-4">Why Choose Our Holiday Packages from Chennai?</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Our holiday packages are designed for comfort, affordability, and unforgettable experiences. With years of expertise in the travel industry, Vasan Tours n Travels guarantees personalized service and seamless planning for every trip.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-lg mb-8">
               <li>Personalized itineraries to fit your preferences.</li>
               <li>Safe and reliable transportation.</li>
               <li>Comfortable accommodations.</li>
               <li>Experienced guides and 24/7 customer support.</li>
            </ol>

            {/* Text Content - "Explore Our Best Tour Packages" */}
            <h2 className="text-3xl font-bold text-[#8B2248] mb-4">Explore Our Best Tour Packages from Chennai</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Come and explore the beauty of India and beyond with our best tour packages:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-lg">
               <li><strong>Hill Station Tours:</strong> Visit popular destinations like Ooty, Kodaikanal, and Munnar for a refreshing escape.</li>
               <li><strong>Beach Holidays:</strong> Enjoy the sun and sand at Goa, Andaman Islands, and Pondicherry.</li>
               <li><strong>Pilgrimage Tours:</strong> Experience spiritual journeys to Tirupati, Rameswaram, and Madurai.</li>
                <li><strong>Family Packages:</strong> Fun-filled tours to Disneyland, Kerala Backwaters, and more.</li>
            </ol>

          </div>

          {/* --- RIGHT SIDE SIDEBAR (Form) --- */}
          <div className="w-full lg:w-1/3">
             <BookingForm />
          </div>

        </div>
      </div>
    </div>
  );
}