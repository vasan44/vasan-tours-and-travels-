import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X, ChevronDown, Star } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Dropdown States
  const [showDomestic, setShowDomestic] = useState(false);
  
  const [showPackages, setShowPackages] = useState(false);
  // const [showCarRental, setShowCarRental] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowDomestic(false);
    
    setShowPackages(false);
    // setShowCarRental(false);
  };

  // --- 1. DOMESTIC LINKS ---
  const domesticRegions = [
    { 
      title: "Kerala", 
      link: "/domestic/kerala", 
      places: [
        { name: "Wayanad", link: "/domestic/kerala/wayanad" },
        { name: "Munnar", link: "/domestic/kerala/munnar" },
        { name: "Alappuzha", link: "/domestic/kerala/alappuzha" },
        { name: "Kochi", link: "/domestic/kerala/kochi" },
        { name: "Vagamon", link: "/domestic/kerala/vagamon" },
        { name: "Varkala", link: "/domestic/kerala/varkala" }
        
      ] 
    },
    { 
      title: "Karnataka", 
      link: "/domestic", 
      places: [
        { name: "Coorg", link: "/domestic/karnataka/coorg" },
        { name: "Chikkamagaluru", link: "/domestic/karnataka/chikkamagaluru" },
        { name: "Dandeli", link: "/domestic/karnataka/dandeli" },
        { name: "Gokarna", link: "/domestic/karnataka/gokarna" },
        { name: "Mysuru", link: "/domestic/karnataka/mysuru" },
        { name: "Hampi", link: "/domestic/karnataka/hampi" }
      ] 
    },
    { 
      title: "North India", 
      link: "/domestic", 
      places: [
        { name: "Pune", link: "/domestic/northindia/pune" },
        { name: "Goa", link: "/domestic/northindia/goa" },
        { name: "Manali", link: "/domestic/northindia/manali" },
        { name: "Golden Triangle", link: "/domestic/northindia/golden-triangle" },
        { name: "Rajasthan", link: "/domestic/northindia/rajasthan" },
        { name: "Kashmir", link: "/domestic/northindia/kashmir" }
      ] 
    },
    { 
      title: "Tamilnadu", 
      link: "/domestic", 
      places: [
        { name: "Ooty", link: "/domestic/tamilnadu/ooty" },
        { name: "Kodaikanal", link: "/domestic/tamilnadu/kodaikanal" },
        { name: "Pondy", link: "/domestic/tamilnadu/pondy" },
        { name: "Rameshwaram", link: "/domestic/tamilnadu/rameshwaram" },
        { name: "Kanyakumari", link: "/domestic/tamilnadu/kanyakumari" },
        { name: "Madurai", link: "/domestic/tamilnadu/madurai" }
      ] 
    }
  ];

  
  // --- 3. PACKAGES LINKS ---
  const packagesItems = [
      { name: "Domestic Tour", link: "/domestic" },
     
      { name: "Family Tour", link: "/packages/family" },
      { name: "Honeymoon Tour", link: "/packages/honeymoon" },
      { name: "Educational Tour", link: "/packages/educational" },
      { name: "Devotional Tour", link: "/packages/devotional" }
  ];

  // --- 4. CAR RENTAL LINKS ---
  // const carRentalItems = [
    // { name: "Car Rental In Chennai", link: "/car-rental/chennai" },
    // { name: "Car Rental In Madurai", link: "/car-rental/madurai" },
    // { name: "Outstation Car Rental", link: "/car-rental" },
    // { name: "Cab Rental for Foreigners", link: "/car-rental" }
  // ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans shadow-md">
      
      {/* Top Bar */}
      <div className="bg-[#8B2248] text-white py-2 px-4 md:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs sm:text-sm font-medium">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <a href="tel:+917395875934" className="flex items-center gap-2 text-xs sm:text-sm hover:text-[#00AEEF] transition cursor-pointer">
            <Phone size={14} className="flex-shrink-0" /> <span className="truncate">+91-7395875934</span>
          </a>
          <a href="mailto:vasan2005@gmail.com" className="flex items-center gap-2 text-xs sm:text-sm hover:text-[#00AEEF] transition cursor-pointer">
            <Mail size={14} className="flex-shrink-0" /> <span className="truncate">vasan2005@gmail.com</span>
          </a>
        </div>
        <div className="hidden sm:flex gap-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition cursor-pointer">
            <Facebook size={18} fill="white" className="text-[#8B2248] bg-white rounded-full p-[1px]" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition cursor-pointer">
            <Instagram size={18} />
          </a>
          <a href="https://www.youtube.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition cursor-pointer">
            <Youtube size={18} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white py-3 md:py-4 border-b border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link to="/" className="relative" onClick={closeMenu}>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E91E63]">V</span>
                    <span className="absolute top-0.5 sm:top-1 md:top-2 left-5 sm:left-6 md:left-8 text-lg sm:text-xl md:text-2xl font-bold text-[#00AEEF]">asan</span>
                    <span className="block text-[7px] sm:text-[8px] md:text-[10px] text-gray-500 tracking-widest pl-1 -mt-1 uppercase font-bold">Tours & Travels</span>
                </Link>
            </div>

            {/* --- DESKTOP MENU --- */}
            <ul className="hidden lg:flex gap-4 xl:gap-8 text-[14px] xl:text-[16px] font-medium text-gray-700 items-center h-full">
                <li className="hover:text-[#00AEEF] transition"><Link to="/">Home</Link></li>
                <li className="hover:text-[#00AEEF] transition"><Link to="/about">About Us</Link></li>
                
                {/* Domestic Dropdown (Maroon) */}
                <li className="group relative h-full flex items-center cursor-pointer"
                    onMouseEnter={() => setShowDomestic(true)} onMouseLeave={() => setShowDomestic(false)}>
                    <Link to="/domestic" className="flex items-center gap-1 hover:text-[#00AEEF] py-4">Domestic <ChevronDown size={14} /></Link>
                    {showDomestic && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] bg-[#8B2248] text-white shadow-2xl rounded-b-xl border-t-4 border-[#00AEEF] p-4 md:p-6 lg:p-8 z-50">
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                              {domesticRegions.map((region, index) => (
                                  <div key={index} className="pl-0 lg:pl-4 lg:first:pl-0 border-l-0 lg:border-l border-white/20 lg:first:border-0">
                                      <Link to={region.link} onClick={closeMenu}>
                                        <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-white border-b border-white/20 pb-1 hover:text-[#00AEEF] cursor-pointer">{region.title}</h3>
                                      </Link>
                                      <ul className="space-y-2">
                                          {region.places.map((place, idx) => (
                                              <li key={idx} className="text-xs md:text-sm hover:text-[#00AEEF] flex items-center gap-2">
                                                  <Star size={10} className="text-white" />
                                                  <Link to={place.link} onClick={closeMenu} className="text-gray-200 hover:text-[#00AEEF]">{place.name}</Link>
                                              </li>
                                          ))}
                                      </ul>
                                  </div>
                              ))}
                          </div>
                      </div>
                    )}
                </li>

               

                {/* Packages Dropdown (Maroon) */}
                <li className="group relative h-full flex items-center cursor-pointer"
                    onMouseEnter={() => setShowPackages(true)} onMouseLeave={() => setShowPackages(false)}>
                    <Link to="/packages" className="flex items-center gap-1 hover:text-[#00AEEF] py-4">Packages <ChevronDown size={14} /></Link>
                    {showPackages && (
                      <div className="absolute top-full left-0 w-64 bg-[#8B2248] text-white shadow-xl rounded-b-xl border-t-4 border-[#00AEEF] p-4 z-50">
                          <ul className="space-y-3">
                              {packagesItems.map((item, idx) => (
                                  <li key={idx} className="text-sm hover:text-[#00AEEF] flex items-center gap-2 border-b border-white/20 pb-2 last:border-0">
                                      <Star size={12} fill="currentColor" className="text-[#00AEEF]" /> 
                                      <Link to={item.link} onClick={closeMenu} className="text-white hover:text-[#00AEEF]">{item.name}</Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                    )}
                </li>

                {/* Car Rental Dropdown (Maroon) */}
                
                    
                   
                 <li className="hover:text-[#00AEEF] transition"><Link to="/car-rental">Car Bookings</Link></li>           
                
                <li className="hover:text-[#00AEEF] transition"><Link to="/contact">Contact Us</Link></li>
            </ul>

            <Link to="/contact" className="hidden lg:block bg-[#00AEEF] hover:bg-[#008CC9] text-white px-4 xl:px-6 py-2 rounded text-sm xl:text-base font-bold shadow-md transition">
                Enquire Now !
            </Link>

            <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
        </div>

        {/* --- MOBILE MENU --- */}
        {isOpen && (
            <div className="lg:hidden bg-white text-gray-800 p-4 sm:p-5 absolute w-full top-full left-0 shadow-xl border-t-4 border-[#00AEEF] max-h-[calc(100vh-120px)] overflow-y-auto pb-20 z-40">
                <Link to="/" className="block py-2 border-b font-medium" onClick={closeMenu}>Home</Link>
                
                {/* Mobile Domestic */}
                <div className="border-b py-2">
                   <div className="flex justify-between items-center">
                      <Link to="/domestic" className="font-medium w-full" onClick={closeMenu}>Domestic</Link>
                      <button onClick={(e) => {e.preventDefault(); setShowDomestic(!showDomestic)}} className="p-2"><ChevronDown size={16}/></button>
                   </div>
                   {showDomestic && (
                      <div className="bg-gray-50 p-4 rounded mt-2">
                         {domesticRegions.map((region, idx) => (
                            <div key={idx} className="mb-4">
                               <Link to={region.link} onClick={closeMenu}><h4 className="font-bold text-[#8B2248]">{region.title}</h4></Link>
                               <ul className="pl-2 space-y-1 text-sm text-gray-600">
                                  {region.places.map((place, pIdx) => (
                                     <li key={pIdx}>- <Link to={place.link} onClick={closeMenu}>{place.name}</Link></li>
                                  ))}
                               </ul>
                            </div>
                         ))}
                      </div>
                   )}
                </div>

               
                {/* Mobile Packages */}
                <div className="border-b py-2">
                   <div className="flex justify-between items-center">
                      <Link to="/packages" className="font-medium w-full" onClick={closeMenu}>Packages</Link>
                      <button onClick={(e) => {e.preventDefault(); setShowPackages(!showPackages)}} className="p-2"><ChevronDown size={16}/></button>
                   </div>
                   {showPackages && (
                      <div className="bg-gray-50 p-4 rounded mt-2">
                         <ul className="space-y-2">
                            {packagesItems.map((item, idx) => (
                               <li key={idx} className="text-sm text-gray-600">
                                  <Star size={10} className="inline text-[#8B2248] mr-2"/>
                                  <Link to={item.link} onClick={closeMenu}>{item.name}</Link>
                               </li>
                            ))}
                         </ul>
                      </div>
                   )}
                </div>

                {/* Mobile Car Rental */}
               
                    
                      <Link to="/car-rental" className="block py-2 border-b font-medium" onClick={closeMenu}>Car Booking</Link>
                   

                <Link to="/contact" className="block py-2 border-b font-medium" onClick={closeMenu}>Contact Us</Link>
            </div>
        )}
      </nav>
    </header>
  );
}