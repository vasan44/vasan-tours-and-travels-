import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Send } from 'lucide-react';
import BookingForm from '../BookingForm';

const keralaPlaces = [
  { 
    title: "Munnar", 
    image: 'https://www.munnar.holiday/munnartourism/wp-content/uploads/2021/10/munnar-tourist-places.jpg', 
    link: "/domestic/kerala/munnar" 
  },
  { 
    title: "Varkala", 
    image: "https://static.toiimg.com/thumb/msid-117947786,width-748,height-499,resizemode=4,imgsize-156770/.jpg", 
    link: "/domestic/kerala/varkala" 
  },
  { 
    title: "Wayanad", 
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600", 
    link: "/domestic/kerala/wayanad" 
  },
  { 
    title: "Alappuzha", 
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=612", // 👈 Broken link மாற்றப்பட்டது
    link: "/domestic/kerala/alappuzha" 
  },
  { 
    title: "Kochi", 
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/29/93/c7/front.jpg?w=500&h=400&s=1", 
    link: "/domestic/kerala/kochi" 
  },
  { 
    title: "Thekkady", 
    image: "https://media.istockphoto.com/id/483015190/photo/boathouses-at-the-kerala-backwaters-india.jpg?s=612x612&w=0&k=20&c=kjkobs2Qo83GdczDmERO9Sx_ncKpqEuqzqWzjFadyCk=", 
    link: "/domestic/kerala/thekkady" 
  },
];

export default function Kerala() {
  return (
    
    <div className="font-sans mt-20"> 
      
      {/* Banner */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Kerala Tourism</h1>
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide">
            <Link to="/" className="hover:text-[#F97316]">Home</Link> 
            <ChevronRight size={14} /> 
            <Link to="/domestic" className="hover:text-[#F97316]">Domestic</Link>
            <ChevronRight size={14} /> 
            <span className="text-gray-300">Kerala</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-12 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-[#8B2248] text-center mb-12 leading-relaxed">
            Best Places to Visit in Kerala – God's Own Country
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side - Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keralaPlaces.map((item, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden shadow-2xl h-[350px] cursor-pointer">
                  {/* Image */}
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  
                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Stars */}
                  <div className="absolute top-4 right-4 flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>

                  {/* Text & Button */}
                  <div className="absolute bottom-8 left-0 w-full text-center px-4">
                    <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">{item.title}</h3>
                    <Link to={item.link}>
                        <button className="bg-[#E91E63] hover:bg-white hover:text-[#E91E63] text-white py-2.5 px-8 rounded-full text-sm font-bold shadow-xl transition transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
                          <Send size={16} /> Explore Now
                        </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="w-full lg:w-1/3">
          <BookingForm tourName="Kerala"/>
             {/* tourName Prop  */}
             <div className="sticky top-28">
                
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}