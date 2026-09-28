import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <a
        href="tel:+917395875934"
        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition group"
      >
        <div className="bg-pink-100 p-3 rounded-full group-hover:bg-pink-200 transition">
          <Phone className="text-pink-600" size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
          <p className="text-gray-600">+91-7395875934</p>
        </div>
      </a>

      <a
        href="mailto:vasan2005@gmail.com"
        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition group"
      >
        <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition">
          <Mail className="text-blue-600" size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
          <p className="text-gray-600 break-all">vasan2005@gmail.com</p>
        </div>
      </a>

      <a
        href="https://www.google.com/maps?q=Madurai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition group"
      >
        <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition">
          <MapPin className="text-green-600" size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
          <p className="text-gray-600">Madurai</p>
        </div>
      </a>
    </div>
  );
}
