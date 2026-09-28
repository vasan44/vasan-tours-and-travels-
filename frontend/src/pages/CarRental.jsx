import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Car, Users, Fuel, Settings, MapPin } from "lucide-react";
import { cars } from "../data/cars";

export default function CarRental() {
  const { city } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);

  // ✅ always convert to array before filter
  const carsArray = Array.isArray(cars) ? cars : (Array.isArray(cars?.cars) ? cars.cars : []);
  const filteredCars = carsArray.filter(
    (car) => car.city?.toLowerCase() === city?.toLowerCase()
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full h-[350px] bg-cover bg-center flex items-center px-4 md:px-12 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto pt-16">
          <div className="border-l-4 border-[#00AEEF] pl-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 uppercase tracking-tight">
              {city} Car Rental
            </h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm opacity-90 uppercase tracking-wider font-semibold">
              <Link to="/" className="hover:text-[#00AEEF]">
                Home
              </Link>
              <span>{">"}</span>
              <Link to="/car-rental" className="hover:text-[#00AEEF]">
                Car Rental
              </Link>
              <span>{">"}</span>
              <span className="text-[#00AEEF] capitalize">{city}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cars Section */}
      <div className="container mx-auto px-4 md:px-12 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8B2248] mb-8 flex items-center gap-3">
          <MapPin className="text-[#00AEEF]" />
          Available Cars in <span className="capitalize">{city}</span>
        </h2>

        {filteredCars.length === 0 ? (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-8 rounded-xl text-center">
            <p className="text-xl font-semibold">No cars available in {city}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Car Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                  {selectedCar?.id === car.id && (
                    <div className="absolute top-4 left-4 bg-[#8B2248] text-white px-3 py-1 rounded-full text-xs font-bold">
                      ✓ Selected
                    </div>
                  )}
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.brand}</p>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} className="text-[#00AEEF]" />
                      <span>{car.seatingCapacity} Seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Car size={16} className="text-[#00AEEF]" />
                      <span>{car.ac ? "AC" : "Non-AC"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Fuel size={16} className="text-[#00AEEF]" />
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Settings size={16} className="text-[#00AEEF]" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b">
                    <p className="text-2xl font-bold text-[#8B2248]">₹{car.pricePerKm}</p>
                    <p className="text-xs text-gray-500">per km</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedCar(car)}
                      className={`flex-1 py-3 font-bold rounded-xl transition
                        ${
                          selectedCar?.id === car.id
                            ? "bg-[#8B2248] text-white"
                            : "bg-gray-100 text-[#8B2248] hover:bg-[#8B2248] hover:text-white"
                        }`}
                    >
                      {selectedCar?.id === car.id ? "Selected ✓" : "Select"}
                    </button>

                    <button className="px-6 py-3 bg-[#00AEEF] text-white font-bold rounded-xl hover:bg-[#0099d6] transition">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Car Info */}
        {selectedCar && (
          <div className="mt-8 bg-[#8B2248] text-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Selected Car</h3>
            <div className="flex items-center gap-4">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <p className="font-bold text-lg">{selectedCar.name}</p>
                <p className="text-sm opacity-90">{selectedCar.brand}</p>
                <p className="text-2xl font-bold text-[#00AEEF] mt-2">
                  ₹{selectedCar.pricePerKm}/km
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}