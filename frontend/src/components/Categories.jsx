import { Send } from "lucide-react";
import { Link } from "react-router-dom"; 


const categories = [
  {
    id: 1,
    title: "Domestic Tour",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop", 
    link: "/domestic" //  Domestic  Link
  },
  
  {
    id: 3,
    title: "Family Tour",
    image: "https://www.welgrowgroup.com/img.php?file=welgrowgroupuploadsNew/package/images/pkg_156982254180_travel-by-family.jpg", 
    link: "/packages"
  },
  {
    id: 4,
    title: "Honeymoon Tour",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9_DIHPcm-NQsqxKheOCA2rZja5rlSEIsNw&s", 
    link: "/packages"
  },
  {
    id: 5,
    title: "Educational Tour",
    image: "https://t3.ftcdn.net/jpg/02/94/43/98/360_F_294439863_GDCJMBJc4e0W6tIwoAEgqNxZMNz13rx9.jpg", 
    link: "/packages"
  },
  {
    id: 6,
    title: "Devotional Tour",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/fe/8d/59.jpg", 
    link: "/packages"
  }
];

export default function Categories() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white font-sans">
      
      {/* Title Section */}
      <div className="text-center max-w-5xl mx-auto mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B2248] mb-6 px-4">
          Budget-Friendly Tour Packages for Every Type of Traveler
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto px-4">
          With our packages, everyone can enjoy their vacation, regardless of their budget. We offer affordable tour packages designed to help you enjoy your dream vacation without worrying about the cost. As the best tour agency in Chennai, Vasan Tours n Travels ensures you get the best travel deals and effortless planning and experiences.
        </p>
      </div>

      {/* Grid Section - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {categories.map((category) => (
          
          /*  */
          <Link to={category.link} key={category.id} className="block relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-lg">
            
            {/* Background Image */}
            <img 
              src={category.image} 
              alt={category.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark Gradient Overlay (Bottom) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Content (Bottom Center) */}
            <div className="absolute bottom-6 sm:bottom-8 left-0 w-full flex flex-col items-center text-center px-4">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 drop-shadow-md">
                {category.title}
              </h3>
              
              {/* Button */}
              <button className="bg-[#8B2248] hover:bg-[#6d1a38] text-white px-5 sm:px-6 py-2 rounded-md font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors duration-200">
                <Send size={10} className="sm:size-10" /> Know More!
              </button>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}