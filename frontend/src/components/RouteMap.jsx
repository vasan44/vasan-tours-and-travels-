import React, { useMemo, useState, useCallback } from 'react';
import { MapPin, Loader } from 'lucide-react';

export default function RouteMap({ pickupLocation = '', dropLocation = '', defaultCity = 'Madurai' }) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Compute map URL directly without triggering extra renders
  const mapUrl = useMemo(() => {
    if (pickupLocation && dropLocation) {
      // Both pickup and drop are filled - show route
      const encodedPickup = encodeURIComponent(pickupLocation);
      const encodedDrop = encodeURIComponent(dropLocation);
      return `https://www.google.com/maps?saddr=${encodedPickup}&daddr=${encodedDrop}&output=embed`;
    }
    // Show default city center
    const encodedCity = encodeURIComponent(defaultCity);
    return `https://www.google.com/maps?q=${encodedCity}&output=embed`;
  }, [pickupLocation, dropLocation, defaultCity]);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const showRoute = pickupLocation && dropLocation;

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-gray-100 flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center gap-2">
            <Loader className="w-8 h-8 text-[#00AEEF] animate-spin" />
            <span className="text-sm text-gray-500">Loading map...</span>
          </div>
        </div>
      )}

      {/* Route Info Banner */}
      {showRoute && (
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-[#8B2248] to-[#00AEEF] text-white px-3 py-2 rounded-t-2xl">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            <MapPin size={14} />
            <span className="font-medium truncate">
              {pickupLocation} → {dropLocation}
            </span>
          </div>
        </div>
      )}

      {/* Map Iframe */}
      <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          title="Route Map"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
          onLoad={handleIframeLoad}
          allowFullScreen
        />
      </div>

      {/* Empty State Hint */}
      {!showRoute && !isLoading && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-center text-sm text-gray-600 shadow-md">
          Enter pickup & drop locations to see the route
        </div>
      )}
    </div>
  );
}

