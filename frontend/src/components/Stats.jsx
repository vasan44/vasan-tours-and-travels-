import React from 'react';
import { UserCheck, ShieldCheck, Map, Headphones } from "lucide-react";

export default function Stats() {
  const statsData = [
    { 
      id: 1, 
      icon: <UserCheck size={45} strokeWidth={1.5} />, 
      title: "2 Lakh+", 
      subtitle: "Happy Clients" 
    },
    { 
      id: 2, 
      icon: <ShieldCheck size={45} strokeWidth={1.5} />, 
      title: "100%", 
      subtitle: "Safety & Security" 
    },
    { 
      id: 3, 
      icon: <Map size={45} strokeWidth={1.5} />, 
      title: "10000+", 
      subtitle: "Successful Trips" 
    },
    { 
      id: 4, 
      icon: <Headphones size={45} strokeWidth={1.5} />, 
      title: "24/7", 
      subtitle: "Support Available" 
    },
  ];

  return (
    <section className="relative w-full py-20 px-4">
      {/* Background Image - Beach */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800')` 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 drop-shadow-md px-4">
          Who We Are
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div key={stat.id} className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center text-center hover:-translate-y-2 transition duration-300">
              <div className="text-[#8B2248] mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B2248] mb-1">
                  {stat.title}
              </h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                  {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}