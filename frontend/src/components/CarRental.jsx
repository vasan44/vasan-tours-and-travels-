import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Car, Users, Gauge, MapPin, ChevronDown, ChevronUp, Star } from "lucide-react";

import { cars } from "../data/cars";
import CarBookingForm from "./CarBookingForm";
import PickupDropSection from "./PickupDropSection";

export default function MaduraiCarRental() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [expandedCarId, setExpandedCarId] = useState(null);
  const bookingFormRef = useRef(null);
  const pickupSectionRef = useRef(null);
  

  // Pickup & Drop State
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  
  // Validation errors
  const [errorPickup, setErrorPickup] = useState("");
  const [errorDrop, setErrorDrop] = useState("");

  // Frontend-only cars (no backend)
  const carList = cars?.madurai ?? [];

  // Format price to ensure it shows ₹X/km
  const formatPrice = (price) => {
    if (!price) return "₹0/km";
    if (typeof price === 'string' && price.includes('₹')) {
      return price;
    }
    return `₹${price}/km`;
  };

  // Format rating to 1 decimal
  const formatRating = (rating) => {
    if (!rating) return "0.0";
    return Number(rating).toFixed(1);
  };

  // Handle car selection with validation
  const handleSelectCar = useCallback((car) => {
    setErrorPickup("");
    setErrorDrop("");
    
    if (!pickupLocation.trim()) {
      setErrorPickup("Please enter pickup location");
      setTimeout(() => {
        pickupSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      return;
    }
    
    if (!dropLocation.trim()) {
      setErrorDrop("Please enter drop location");
      setTimeout(() => {
        pickupSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      return;
    }
    
    setSelectedCar(car);
    setTimeout(() => {
      bookingFormRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, [pickupLocation, dropLocation]);

  const scrollToPickupSection = useCallback(() => {
    setErrorPickup("");
    setErrorDrop("");
    
    let hasError = false;
    
    if (!pickupLocation.trim()) {
      setErrorPickup("Please enter pickup location");
      hasError = true;
    }
    
    if (!dropLocation.trim()) {
      setErrorDrop("Please enter drop location");
      hasError = true;
    }
    
    if (hasError) {
      setTimeout(() => {
        pickupSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      return false;
    }
    
    return true;
  }, [pickupLocation, dropLocation]);

  const handleBook = useCallback(() => {
    if (!selectedCar) {
      alert("Please select a vehicle first");
      return;
    }
    
    if (!scrollToPickupSection()) {
      return;
    }
    
    bookingFormRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedCar, scrollToPickupSection]);

  const toggleDetails = (id) => {
    setExpandedCarId(expandedCarId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* HERO / BANNER */}
      <div
        className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex flex-col justify-center px-4 sm:px-6 md:px-12 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto pt-12 sm:pt-16">
          <div className="border-l-4 border-[#00AEEF] pl-4 sm:pl-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 uppercase tracking-tighter leading-tight">
              Madurai Rent A Car
            </h1>
            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm lg:text-base opacity-90 uppercase tracking-wider font-semibold flex-wrap">
              <Link to="/" className="hover:text-[#00AEEF]">
                Home
              </Link>
              <span className="mx-1 text-white/50">{">"}</span>
              <Link to="/car-rental" className="hover:text-[#00AEEF]">
                Car Rental
              </Link>
              <span className="mx-1 text-white/50">{">"}</span>
              <span className="text-[#00AEEF]">Madurai</span>
            </div>
          </div>
        </div>
      </div>

      {/* PICKUP / DROP + MAP SECTION */}
      <div className="mt-8 sm:mt-12">
        <PickupDropSection
          pickupLocation={pickupLocation}
          setPickupLocation={setPickupLocation}
          dropLocation={dropLocation}
          setDropLocation={setDropLocation}
          errorPickup={errorPickup}
          errorDrop={errorDrop}
          pickupRef={pickupSectionRef}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          {/* Car List */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8B2248] mb-6 sm:mb-8 md:mb-10 flex items-center gap-2 sm:gap-3">
              <Star className="text-[#00AEEF] w-5 h-5 sm:w-6 sm:h-6" /> Top Rated Vehicles in Madurai
            </h2>

            {carList.length === 0 && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 sm:px-6 py-4 rounded-xl text-sm">
                <strong>No vehicles found</strong>
                <p className="text-xs sm:text-sm mt-2">
                  Please add Madurai cars in:{" "}
                  <code className="bg-yellow-200 px-2 py-1 rounded">src/data/cars.js</code>
                </p>
              </div>
            )}

            <div className="space-y-4 sm:space-y-6">
              {carList.map((car) => (
                <div key={car.id} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                    <div
                      onClick={() => handleSelectCar(car)}
                      className={`h-48 sm:h-56 overflow-hidden relative cursor-pointer group
                        ${selectedCar?.id === car.id ? "ring-4 ring-[#8B1E3F]" : ""}`}
                    >
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      {selectedCar?.id === car.id && (
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#8B1E3F] text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md animate-pulse">
                          ✓ Selected
                        </div>
                      )}
                      
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1 shadow-md">
                        <span className="text-yellow-500 text-xs sm:text-sm">★</span>
                        <span className="text-[10px] sm:text-xs font-bold text-gray-800">
                          {formatRating(car.rating)}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-gray-500">
                          ({car.reviewCount || 120})
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex justify-between items-start mb-2 sm:mb-3">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 pr-2">{car.name}</h3>
                        <span className="text-[#8B2248] font-black text-base sm:text-lg whitespace-nowrap">
                          {formatPrice(car.pricePerKm)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="flex items-center gap-1 bg-yellow-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg">
                          <Star className="text-yellow-500 fill-yellow-500" size={12} />
                          <span className="text-xs sm:text-sm font-bold text-gray-800">
                            {formatRating(car.rating)}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-500">
                            ({car.reviewCount || 120} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-3 sm:gap-4 text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 font-bold uppercase flex-wrap">
                        <span className="flex items-center gap-1 sm:gap-2">
                          <Users size={14} className="sm:w-[16px] sm:h-[16px] text-[#00AEEF]" /> {car.seats} Seats
                        </span>
                        <span className="flex items-center gap-1 sm:gap-2">
                          <Gauge size={14} className="sm:w-[16px] sm:h-[16px] text-[#00AEEF]" /> AC
                        </span>
                      </div>

                      <div className="flex gap-2 sm:gap-3">
                        <button
                          onClick={() => handleSelectCar(car)}
                          className={`flex-1 py-2 sm:py-3 font-bold rounded-xl transition-all duration-300 text-xs sm:text-sm
                            ${
                              selectedCar?.id === car.id
                                ? "bg-[#8B2248] text-white"
                                : "bg-gray-50 text-[#8B2248] hover:bg-[#8B2248] hover:text-white border-2 border-[#8B2248]/10"
                            }`}
                        >
                          {selectedCar?.id === car.id ? "Selected ✅" : "Select"}
                        </button>

                        <button
                          onClick={() => toggleDetails(car.id)}
                          className="px-3 sm:px-4 py-2 sm:py-3 bg-[#00AEEF] text-white font-bold rounded-xl hover:bg-[#0099d6] transition-all text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                          Details{" "}
                          {expandedCarId === car.id ? (
                            <ChevronUp size={14} className="sm:w-[16px] sm:h-[16px]" />
                          ) : (
                            <ChevronDown size={14} className="sm:w-[16px] sm:h-[16px]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {expandedCarId === car.id && (
                    <div className="p-4 sm:p-6 bg-gray-50 border-t-2 border-[#00AEEF]/20 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h4 className="font-bold text-[#8B2248] mb-2 sm:mb-3 text-sm sm:text-base">Vehicle Details</h4>
                          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                            <li><strong>Model:</strong> {car.model || "N/A"}</li>
                            <li><strong>Type:</strong> {car.type || "N/A"}</li>
                            <li><strong>Seats:</strong> {car.seats || "N/A"}</li>
                            <li><strong>Rate:</strong> {formatPrice(car.pricePerKm)}</li>
                            {car.rating && (
                              <li><strong>Rating:</strong> {formatRating(car.rating)} ★ ({car.reviewCount} reviews)</li>
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-[#8B2248] mb-2 sm:mb-3 text-sm sm:text-base">Features</h4>
                          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                            {Array.isArray(car.features) && car.features.length > 0 ? (
                              car.features.map((feature, idx) => <li key={idx}>✓ {feature}</li>)
                            ) : (
                              <li>No features available</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BOOKING PANEL */}
          <div className="w-full lg:w-1/3" ref={bookingFormRef}>
            <div className="lg:sticky lg:top-32 bg-[#8B2248] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-2xl text-white border border-white/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 border-b border-white/20 pb-2 flex items-center gap-2">
                <Car size={20} className="sm:w-[24px] sm:h-[24px]" /> {selectedCar ? `Book ${selectedCar.name}` : "Select Vehicle"}
              </h2>

              {selectedCar ? (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/10 rounded-xl border border-white/20">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-24 sm:h-32 object-contain mb-2 sm:mb-3 rounded-lg bg-white/5"
                  />
                  <p className="text-xs sm:text-sm font-semibold">{selectedCar.name}</p>
                  <p className="text-xl sm:text-2xl font-bold text-[#00AEEF]">
                    {formatPrice(selectedCar.pricePerKm)}
                  </p>
                  
                  {pickupLocation && dropLocation && (
                    <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/20">
                      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
                        <MapPin size={10} className="sm:w-[12px] sm:h-[12px] text-green-400 flex-shrink-0" />
                        <span className="truncate">{pickupLocation}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
                        <MapPin size={10} className="sm:w-[12px] sm:h-[12px] text-red-400 flex-shrink-0" />
                        <span className="truncate">{dropLocation}</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs sm:text-sm text-white/70 text-center">
                    {!pickupLocation || !dropLocation 
                      ? "⚠️ Please fill pickup & drop locations above, then select a vehicle"
                      : "Select a vehicle to continue booking"}
                  </p>
                </div>
              )}

              <CarBookingForm
                carId={selectedCar?.id}
                carName={selectedCar?.name}
                carPrice={selectedCar?.pricePerKm}
                carImage={selectedCar?.image}
                city="madurai"
                pickupLocation={pickupLocation}
                dropLocation={dropLocation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
