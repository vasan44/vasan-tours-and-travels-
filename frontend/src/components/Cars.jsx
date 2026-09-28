// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Car, Users, Gauge, MapPin, ChevronDown, ChevronUp } from "lucide-react";

// import { cars } from "../../data/cars";
// import CarBookingForm from "./CarBookingForm";

// export default function Cars() {
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [expandedCarId, setExpandedCarId] = useState(null);
//   const bookingFormRef = useRef(null);

//   // ✅ Frontend-only cars (no backend)
//   const carList = cars?.madurai ?? [];

//   const handleSelectCar = (car) => {
//     setSelectedCar(car);
//     setTimeout(() => {
//       bookingFormRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
//     }, 100);
//   };

//   const toggleDetails = (id) => {
//     setExpandedCarId(expandedCarId === id ? null : id);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <div
//         className="relative w-full h-[350px] sm:h-[450px] bg-cover bg-center flex flex-col justify-center px-4 md:px-12 text-white"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative z-10 container mx-auto pt-16">
//           <div className="border-l-4 border-[#00AEEF] pl-6">
//             <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 uppercase tracking-tighter">
//               Madurai Rent A Car
//             </h1>
//             <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base opacity-90 uppercase tracking-wider font-semibold flex-wrap">
//               <Link to="/" className="hover:text-[#00AEEF]">
//                 Home
//               </Link>
//               <span className="mx-2 text-white/50">{">"}</span>
//               <Link to="/car-rental" className="hover:text-[#00AEEF]">
//                 Car Rental
//               </Link>
//               <span className="mx-2 text-white/50">{">"}</span>
//               <span className="text-[#00AEEF]">Madurai</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 md:px-12 py-12 sm:py-20">
//         <div className="flex flex-col lg:flex-row gap-12">
//           <div className="w-full lg:w-2/3">
//             <h2 className="text-2xl sm:text-3xl font-bold text-[#8B2248] mb-8 sm:mb-10 flex items-center gap-3">
//               <MapPin className="text-[#00AEEF]" /> Top Rated Vehicles in Madurai
//             </h2>

//             {carList.length === 0 && (
//               <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-4 rounded-xl">
//                 <strong>No vehicles found</strong>
//                 <p className="text-sm mt-2">
//                   Please add Madurai cars in:{" "}
//                   <code className="bg-yellow-200 px-2 py-1 rounded">src/data/cars.js</code>
//                 </p>
//               </div>
//             )}

//             <div className="space-y-6">
//               {carList.map((car) => (
//                 <div key={car.id} className="bg-white rounded-3xl overflow-hidden shadow-lg">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
//                     <div
//                       onClick={() => handleSelectCar(car)}
//                       className={`h-56 overflow-hidden relative cursor-pointer group
//                         ${selectedCar?.id === car.id ? "ring-4 ring-[#8B1E3F]" : ""}`}
//                     >
//                       <img
//                         src={car.image}
//                         alt={car.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                       />
//                       {selectedCar?.id === car.id && (
//                         <div className="absolute top-4 left-4 bg-[#8B1E3F] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
//                           ✓ Selected
//                         </div>
//                       )}
//                     </div>

//                     <div className="p-6">
//                       <div className="flex justify-between items-start mb-3">
//                         <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
//                         <span className="text-[#8B2248] font-black text-lg">{car.pricePerKm}</span>
//                       </div>

//                       <div className="flex gap-4 text-gray-500 text-xs mb-4 font-bold uppercase">
//                         <span className="flex items-center gap-2">
//                           <Users size={16} className="text-[#00AEEF]" /> {car.seats}
//                         </span>
//                         <span className="flex items-center gap-2">
//                           <Gauge size={16} className="text-[#00AEEF]" /> AC
//                         </span>
//                       </div>

//                       <div className="flex gap-3">
//                         <button
//                           onClick={() => handleSelectCar(car)}
//                           className={`flex-1 py-3 font-bold rounded-xl transition-all duration-300 text-sm
//                             ${
//                               selectedCar?.id === car.id
//                                 ? "bg-[#8B2248] text-white"
//                                 : "bg-gray-50 text-[#8B2248] hover:bg-[#8B2248] hover:text-white border-2 border-[#8B2248]/10"
//                             }`}
//                         >
//                           {selectedCar?.id === car.id ? "Selected ✅" : "Select"}
//                         </button>

//                         <button
//                           onClick={() => toggleDetails(car.id)}
//                           className="px-4 py-3 bg-[#00AEEF] text-white font-bold rounded-xl hover:bg-[#0099d6] transition-all text-sm flex items-center gap-2"
//                         >
//                           Details{" "}
//                           {expandedCarId === car.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {expandedCarId === car.id && (
//                     <div className="p-6 bg-gray-50 border-t-2 border-[#00AEEF]/20 animate-fadeIn">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <h4 className="font-bold text-[#8B2248] mb-3">Vehicle Details</h4>
//                           <ul className="space-y-2 text-sm text-gray-700">
//                             <li><strong>Model:</strong> {car.model || "N/A"}</li>
//                             <li><strong>Type:</strong> {car.type || "N/A"}</li>
//                             <li><strong>Seats:</strong> {car.seats || "N/A"}</li>
//                             <li><strong>Rate:</strong> {car.pricePerKm || "N/A"}</li>
//                           </ul>
//                         </div>

//                         <div>
//                           <h4 className="font-bold text-[#8B2248] mb-3">Features</h4>
//                           <ul className="space-y-2 text-sm text-gray-700">
//                             {Array.isArray(car.features) && car.features.length > 0 ? (
//                               car.features.map((feature, idx) => <li key={idx}>✓ {feature}</li>)
//                             ) : (
//                               <li>No features available</li>
//                             )}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="w-full lg:w-1/3" ref={bookingFormRef}>
//             <div className="lg:sticky lg:top-32 bg-[#8B2248] p-6 sm:p-8 rounded-3xl sm:rounded-[3rem] shadow-2xl text-white border border-white/10">
//               <h2 className="text-xl sm:text-2xl font-bold mb-6 border-b border-white/20 pb-2 flex items-center gap-2">
//                 <Car size={24} /> {selectedCar ? `Book ${selectedCar.name}` : "Select Vehicle"}
//               </h2>

//               {selectedCar && (
//                 <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
//                   <img
//                     src={selectedCar.image}
//                     alt={selectedCar.name}
//                     className="w-full h-32 object-contain mb-3 rounded-lg bg-white/5"
//                   />
//                   <p className="text-sm font-semibold">{selectedCar.name}</p>
//                   <p className="text-2xl font-bold text-[#00AEEF]">{selectedCar.pricePerKm}</p>
//                 </div>
//               )}

//               <CarBookingForm
//                 carId={selectedCar?.id}
//                 carName={selectedCar?.name}
//                 carPrice={selectedCar?.pricePerKm}
//                 carImage={selectedCar?.image}
//                 city="madurai"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }