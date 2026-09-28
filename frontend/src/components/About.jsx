import React, { useMemo, useState } from "react";
import { Award, Target, Eye, User, CheckCircle, TrendingUp, MapPin } from "lucide-react";
import rajeshImg from "../assets/drivers/rajesh.jpg";
import sureshImg from "../assets/drivers/suresh.jpg";
import karthikImg from "../assets/drivers/karthik.jpg";
import maniImg from "../assets/drivers/mani.jpg";
import prakashImg from "../assets/drivers/prakash.jpg";
import balajiImg from "../assets/drivers/balaji.jpg";
import senthilImg from "../assets/drivers/senthil.jpg";
import vigneshImg from "../assets/drivers/vignesh.jpg";
import gokulImg from "../assets/drivers/gokul.jpg";
import saravananImg from "../assets/drivers/saravanan.jpg";

export default function About() {
  // ✅ Drivers Data
  const drivers = [
    { id: 1, name: "Rajesh Kumar", age: 32, licenseId: "TN-58-2016-001234", photo: rajeshImg, experience: 8, email: "rajesh.kumar@gmail.com" },
    { id: 2, name: "Suresh Babu", age: 38, licenseId: "TN-58-2012-005678", photo: sureshImg, experience: 12, email: "suresh.babu@gmail.com" },
    { id: 3, name: "Karthik Raj", age: 29, licenseId: "TN-58-2018-009876", photo: karthikImg, experience: 5, email: "karthik.raj@gmail.com" },
    { id: 4, name: "Mani Selvam", age: 41, licenseId: "TN-58-2009-002345", photo: maniImg, experience: 15, email: "mani.selvam@gmail.com" },
    { id: 5, name: "Prakash R", age: 35, licenseId: "TN-58-2014-007654", photo: prakashImg, experience: 10, email: "prakash.r@gmail.com" },
    { id: 6, name: "Balaji V", age: 27, licenseId: "TN-58-2019-004321", photo: balajiImg, experience: 4, email: "balaji.v@gmail.com" },
    { id: 7, name: "Senthil Nathan", age: 33, licenseId: "TN-58-2015-006789", photo: senthilImg, experience: 9, email: "senthil.nathan@gmail.com" },
    { id: 8, name: "Vignesh S", age: 30, licenseId: "TN-58-2017-003210", photo: vigneshImg, experience: 7, email: "vignesh.s@gmail.com" },
    { id: 9, name: "Gokul K", age: 26, licenseId: "TN-58-2020-008765", photo: gokulImg, experience: 3, email: "gokul.k@gmail.com" },
    { id: 10, name: "Saravanan M", age: 44, licenseId: "TN-58-2007-001111", photo: saravananImg, experience: 18, email: "saravanan.m@gmail.com" },
  ];

  // ✅ Search + Filter state
  const [search, setSearch] = useState("");
  const [ageGroup, setAgeGroup] = useState("all");

  // ✅ Filter logic
  const filteredDrivers = useMemo(() => {
    const q = search.trim().toLowerCase();

    return drivers.filter((d) => {
      const matchSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.licenseId.toLowerCase().includes(q);

      const matchAge =
        ageGroup === "all" ||
        (ageGroup === "20-29" && d.age >= 20 && d.age <= 29) ||
        (ageGroup === "30-39" && d.age >= 30 && d.age <= 39) ||
        (ageGroup === "40+" && d.age >= 40);

      return matchSearch && matchAge;
    });
  }, [search, ageGroup, drivers]);

  return (
    <div className="pt-28 pb-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section 1: Hero Introduction */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 bg-pink-100 text-[#8B2248] rounded-full text-sm font-bold uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B2248] leading-tight">
             Committed to Safe & Comfortable Journeys
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              We provide reliable and affordable car booking services for local trips, outstation travel, airport transfers, and corporate travel. Our fleet includes well-maintained vehicles with professional drivers to ensure a safe and comfortable journey.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              As a market leader in Tamil Nadu, we go beyond the ordinary to craft unique experiences, ranging from thrilling jeep safaris to serene trekking adventures.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              With a strong focus on customer satisfaction, I carefully plan every trip to ensure smooth bookings, comfortable stays, and memorable sightseeing experiences. From local tours to international holiday packages, I provide complete travel solutions tailored to your needs.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              Tours and Travels is dedicated to providing safe, comfortable, and affordable travel experiences. We offer domestic and international tour packages, flight bookings, hotel reservations, and customized holiday planning. Our goal is to make every journey smooth, memorable, and stress-free for our customers.
            </p>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80"
                alt="Vetri Holidays Team"
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-xs uppercase font-bold tracking-tighter">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Section 2: Core Values (Vision & Mission) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-gradient-to-br from-[#8B2248] to-[#4a0e3a] p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
            <Eye
              size={120}
              className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition duration-500"
            />
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              Our Vision
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>  Our vision is to become a trusted and leading car rental service provider, delivering safe, affordable, and reliable travel solutions for every customer. We aim to simplify transportation with seamless booking, transparent pricing, and exceptional customer support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>By continuously improving our fleet, technology, and service standards, we strive to create comfortable travel experiences while building long-term relationships based on trust and quality service.
            </span>
              </li>
            </p>
          </div>

          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
            <Target
              size={120}
              className="absolute -right-10 -bottom-10 text-[#F97316] opacity-5 transition duration-500"
            />
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h3>
            <ul className="space-y-4 text-gray-600 text-lg relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Our mission is to provide safe, reliable, and affordable car rental services that make travel simple and stress-free for everyone. We are committed to delivering high-quality vehicles, professional service, and a seamless booking experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>We aim to build long-term customer trust by ensuring punctuality, transparency in pricing, and exceptional customer support. Through continuous improvement and innovation, we strive to make every journey comfortable, convenient, and memorable.</span>
              </li>
             
            </ul>
          </div>
        </div>

        {/* ✅ Our Drivers - Full Width Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#8B2248]">
                Our Drivers
              </h3>
              <p className="text-gray-500 mt-2">
                Search by name / license ID and filter by age group.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name or license..."
                className="h-12 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 ring-[#00AEEF] text-sm w-full sm:w-72"
              />

              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                className="h-12 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 ring-[#00AEEF] text-sm w-full sm:w-44"
              >
                <option value="all">All Ages</option>
                <option value="20-29">20 - 29</option>
                <option value="30-39">30 - 39</option>
                <option value="40+">40+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDrivers.map((d) => {
              const age = d.age ?? "N/A";
              const exp = d.experience ? `${d.experience} yrs` : "N/A";
              const lic = d.licenseId || "N/A";
              
              return (
              <div
                key={d.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[200px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={d.photo}
                    alt={d.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00AEEF]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-[#8B2248] text-base truncate">
                      {d.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {d.email}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <span className="text-[10px] text-blue-600 font-semibold uppercase">Age</span>
                    <span className="text-sm font-bold text-blue-900">{age}</span>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <span className="text-[10px] text-green-600 font-semibold uppercase">Exp</span>
                    <span className="text-sm font-bold text-green-900">{exp}</span>
                  </div>

                  <div 
                    className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-full px-3 py-1.5 flex items-center gap-1.5 max-w-full overflow-hidden"
                    title={lic}
                  >
                    <span className="text-[10px] text-purple-600 font-semibold uppercase flex-shrink-0">Lic</span>
                    <span className="text-sm font-bold text-purple-900 truncate">{lic}</span>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {filteredDrivers.length === 0 && (
            <div className="mt-6 bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-2xl text-sm">
              No drivers found for your search / filter.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}