import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Send } from 'lucide-react';
import BookingForm from './BookingForm';
import { PageSection, TwoColumnLayout, CardGrid, Card } from './Layout';

const domesticPlaces = [
  { title: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600", link: "/domestic/kerala/kerala" },
  { title: "Varkala", image: "https://static.toiimg.com/thumb/msid-117947786,width-748,height-499,resizemode=4,imgsize-156770/.jpg", link: "/domestic/kerala/varkala" },
  { title: "Kashmir", image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=600", link: "/domestic/northindia/kashmir" },
  { title: "Tamilnadu", image: "https://t4.ftcdn.net/jpg/08/66/31/19/360_F_866311958_LP9Ow0f9xAZu5MjXmwaKp21BNPs3lYfQ.jpg", link: "/domestic/tamilnadu/madurai" },
  { title: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600", link: "/domestic/northindia/goa" },
  { title: "Mysuru", image: "https://images.unsplash.com/photo-1600664356348-10686526af4f?q=80&w=600", link: "/domestic/karnataka/mysuru" },
  { title: "Alappuzha", image: "https://lh5.googleusercontent.com/proxy/cKoReor5hb0c3oBBjR30dU1N3j9bttmWjajqruOrmZfUZCm6qVHxfNEYeU_v0USBMYrR6tQEG3jPiqDv24Zm_ikJiVJmW6d28atoX4pwk7p33Tog2s3szvMQu--Z", link: "/domestic/kerala/alappuzha" },
  { title: "Rajasthan", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600", link: "/domestic/northindia/rajasthan" },
];

export default function Domestic() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] bg-cover bg-center flex flex-col justify-center px-4 sm:px-6 md:px-12 text-white"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=800')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto pt-16 sm:pt-20">
          
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Dometic Tourism</h1>
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-gray-200">
            
            <Link to="/" className="hover:text-secondary">Home</Link> 
            <ChevronRight size={14} /> 
            <span>Domestic Tours</span>
          </div>
        </div>
      </div>
                                                                  
      {/* Main Content */}
      <PageSection>
        <TwoColumnLayout
          left={
            <div>
              <h2 className="heading-3 mb-2">Domestic Tourism Places</h2>
              <div className="divider"></div>
              <CardGrid columns={2}>
                {domesticPlaces.map((item, index) => (
                  <Link to={item.link} key={index} className="block group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all h-[280px] cursor-pointer">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <div className="absolute bottom-6 left-0 w-full text-center px-4">
                      <h3 className="heading-4 text-white mb-3 drop-shadow-lg">{item.title}</h3>
                      <button className="btn btn-primary btn-sm">
                        <Send size={14} /> Know More!
                      </button>
                    </div>
                  </Link>
                ))}
              </CardGrid>
            </div>
          }
          right={<BookingForm />}
        />
      </PageSection>
    </div>
  );
}
