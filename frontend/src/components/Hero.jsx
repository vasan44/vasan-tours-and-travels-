import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Facebook, Instagram } from "lucide-react"; // 'Instagram'

const slides = [
  {
    id: 1,
    image: "https://rameswaramtoursandtravels.com/wp-content/uploads/elementor/thumbs/Rameswaram-Kanyakumari-Madurai-Tour-Package-03-Days-1-1-p9xunr0am6s6p1tnvfv1ysjpptn2hgl7w5788e8n8g.jpg",
    title: "Tamilnadu’s 1st Travel Company",
    subtitle: "To Have Huge Customer Base"
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177_1280.jpg",
    title: "Explore  Destinations",
    subtitle: ""
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-screen group overflow-hidden">
      
      {/* Background Image Slider */}
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }} 
        className="w-full h-full bg-center bg-cover duration-1000 transition-all ease-in-out transform scale-105"
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 drop-shadow-2xl animate-fade-in-up leading-tight">
          {slides[currentIndex].title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 font-light drop-shadow-md animate-fade-in-up delay-100">
          {slides[currentIndex].subtitle}
        </p>
      </div>

      {/* Arrows */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 sm:left-2 md:left-5 text-2xl rounded-full p-1.5 sm:p-2 bg-black/20 text-white cursor-pointer hover:bg-[#00AEEF] transition">
        <ChevronLeft onClick={prevSlide} size={24} className="sm:w-[30px] sm:h-[30px]" />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 sm:right-2 md:right-5 text-2xl rounded-full p-1.5 sm:p-2 bg-black/20 text-white cursor-pointer hover:bg-[#00AEEF] transition">
        <ChevronRight onClick={nextSlide} size={24} className="sm:w-[30px] sm:h-[30px]" />
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`transition-all duration-300 cursor-pointer rounded-full ${currentIndex === slideIndex ? "bg-[#00AEEF] w-6 sm:w-8 h-2" : "bg-white/50 w-2 h-2"}`}
          ></div>
        ))}
      </div>

      {/* --- Floating Action Buttons Section --- */}
      <div className="fixed bottom-3 sm:bottom-4 md:bottom-8 left-3 sm:left-4 md:left-8 z-50 flex flex-col gap-2 sm:gap-3 md:gap-4">
        {/* 1. WhatsApp Button */}
        <a 
          href="https://wa.me/917395875934?text=Hello  Tours! I'm interested in booking a trip." 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center border-2 border-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* 2. Instagram Button */}
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center border-2 border-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          title="Follow on Instagram"
        >
          <Instagram size={20} className="sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px]" />
        </a>

        {/* 3. Facebook Button */}
        <a 
          href=" https://www.facebook.com/"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#1877F2] text-white p-2.5 sm:p-3 md:p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center border-2 border-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          title="Follow on Facebook"
        >
          <Facebook size={20} fill="currentColor" className="sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px]" />
        </a>

      </div>

    </div>
  );
}