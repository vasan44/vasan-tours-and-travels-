import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import RouteMap from './RouteMap';
import '../styles/autocomplete.css';

const GOOGLE_MAPS_SCRIPT_ID = 'google-maps-script';

export default function PickupDropSection({
  pickupLocation,
  setPickupLocation,
  dropLocation,
  setDropLocation,
  errorPickup,
  errorDrop,
  pickupRef
}) {
  const pickupInputRef = useRef(null);
  const dropInputRef = useRef(null);
  const pickupAutocompleteRef = useRef(null);
  const dropAutocompleteRef = useRef(null);
  const isMountedRef = useRef(true);

  const [distanceKm, setDistanceKm] = useState(null);
  const [calculatingDistance, setCalculatingDistance] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);

  useEffect(() => {
    isMountedRef.current = true;

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const isGoogleAvailable = () => {
      return !!window.google?.maps?.places?.Autocomplete;
    };

    const handleScriptLoad = () => {
      if (isGoogleAvailable() && isMountedRef.current) {
        console.log('✅ Google Maps loaded successfully');
        setGoogleReady(true);
      }
    };

    const handleScriptError = () => {
      console.error('❌ Failed to load Google Maps script');
      console.error('Check API key, billing, Places API, Maps JavaScript API, Directions API, and allowed referrers');
    };

    const isPlaceholder = (key) => {
      if (!key) return true;
      const trimmed = key.trim();
      return (
        trimmed === '' ||
        trimmed === 'YOUR_GOOGLE_MAPS_API_KEY' ||
        trimmed === 'YOUR_API_KEY_HERE' ||
        trimmed.startsWith('YOUR_')
      );
    };

    if (isPlaceholder(apiKey)) {
      console.error('❌ Google Maps API key not configured');
      console.error('Add your real VITE_GOOGLE_MAPS_API_KEY in frontend/.env.local');
      return () => {
        isMountedRef.current = false;
      };
    }

    if (isGoogleAvailable()) {
      setGoogleReady(true);
      return () => {
        isMountedRef.current = false;
      };
    }

    const existingScript = document.getElementById(GOOGLE_MAPS_SCRIPT_ID);

    if (existingScript) {
      existingScript.addEventListener('load', handleScriptLoad);
      existingScript.addEventListener('error', handleScriptError);

      const interval = setInterval(() => {
        if (isGoogleAvailable()) {
          clearInterval(interval);
          if (isMountedRef.current) {
            setGoogleReady(true);
          }
        }
      }, 200);

      return () => {
        isMountedRef.current = false;
        clearInterval(interval);
        existingScript.removeEventListener('load', handleScriptLoad);
        existingScript.removeEventListener('error', handleScriptError);
      };
    }

    const script = document.createElement('script');
    script.id = GOOGLE_MAPS_SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', handleScriptLoad);
    script.addEventListener('error', handleScriptError);
    document.head.appendChild(script);

    return () => {
      isMountedRef.current = false;
      script.removeEventListener('load', handleScriptLoad);
      script.removeEventListener('error', handleScriptError);
    };
  }, []);

  useEffect(() => {
    if (!googleReady || !window.google?.maps?.places?.Autocomplete) return;

    try {
      if (pickupInputRef.current && !pickupAutocompleteRef.current) {
        pickupAutocompleteRef.current = new window.google.maps.places.Autocomplete(
          pickupInputRef.current,
          {
            componentRestrictions: { country: 'in' },
            fields: ['formatted_address', 'geometry', 'name', 'place_id']
          }
        );

        pickupAutocompleteRef.current.addListener('place_changed', () => {
          const place = pickupAutocompleteRef.current?.getPlace();
          const value = place?.formatted_address || place?.name || '';
          if (value) {
            setPickupLocation(value);
          }
        });
      }

      if (dropInputRef.current && !dropAutocompleteRef.current) {
        dropAutocompleteRef.current = new window.google.maps.places.Autocomplete(
          dropInputRef.current,
          {
            componentRestrictions: { country: 'in' },
            fields: ['formatted_address', 'geometry', 'name', 'place_id']
          }
        );

        dropAutocompleteRef.current.addListener('place_changed', () => {
          const place = dropAutocompleteRef.current?.getPlace();
          const value = place?.formatted_address || place?.name || '';
          if (value) {
            setDropLocation(value);
          }
        });
      }
    } catch (error) {
      console.error('❌ Error initializing autocomplete:', error);
    }
  }, [googleReady, setPickupLocation, setDropLocation]);

  useEffect(() => {
    if (!pickupLocation?.trim() || !dropLocation?.trim()) {
      setDistanceKm(null);
      setCalculatingDistance(false);
      return;
    }

    if (!window.google?.maps?.DirectionsService || !window.google?.maps?.TravelMode) {
      console.warn('⚠️ Google Maps DirectionsService not available yet');
      return;
    }

    const timer = setTimeout(() => {
      setCalculatingDistance(true);
      console.log('📍 Calculating distance from:', pickupLocation, 'to:', dropLocation);

      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: pickupLocation,
          destination: dropLocation,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          console.log('📊 DirectionsService response status:', status);
          
          if (!isMountedRef.current) {
            console.log('⚠️ Component unmounted, skipping state update');
            return;
          }

          if (status === 'OK' && result?.routes?.[0]?.legs?.[0]?.distance?.value) {
            const distanceInMeters = result.routes[0].legs[0].distance.value;
            const km = (distanceInMeters / 1000).toFixed(1);
            console.log('✅ Distance calculated:', km, 'KM');
            setDistanceKm(km);
            setCalculatingDistance(false);
          } else {
            console.error('❌ Distance calculation failed:', status);
            console.error('Result:', result);
            setDistanceKm(null);
            setCalculatingDistance(false);
          }
        }
      );
    }, 600);

    return () => clearTimeout(timer);
  }, [pickupLocation, dropLocation]);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="p-4 sm:p-6 md:p-8 flex flex-col relative overflow-visible">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8B2248] mb-4 sm:mb-6 flex items-center gap-2">
              <MapPin className="text-[#00AEEF] w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
              Pickup & Drop Location
            </h3>

            <div className="space-y-4 sm:space-y-5 flex-1">
              <div ref={pickupRef} className="relative z-30">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <div className={`flex items-center gap-2 sm:gap-3 bg-gray-50 border ${errorPickup ? 'border-red-500' : 'border-gray-200'} rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 focus-within:ring-2 focus-within:ring-[#00AEEF] transition-all`}>
                  <MapPin className="text-[#00AEEF] flex-shrink-0 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                  <input
                    ref={pickupInputRef}
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Eg: Madurai Railway Junction"
                    className="w-full bg-transparent outline-none text-xs sm:text-sm text-gray-800 placeholder:text-gray-400"
                    autoComplete="off"
                  />
                </div>
                {errorPickup && (
                  <p className="text-red-500 text-[10px] sm:text-xs mt-1 ml-1">{errorPickup}</p>
                )}
              </div>

              <div className="relative z-20">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Drop Location <span className="text-red-500">*</span>
                </label>
                <div className={`flex items-center gap-2 sm:gap-3 bg-gray-50 border ${errorDrop ? 'border-red-500' : 'border-gray-200'} rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 focus-within:ring-2 focus-within:ring-[#00AEEF] transition-all`}>
                  <MapPin className="text-[#00AEEF] flex-shrink-0 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                  <input
                    ref={dropInputRef}
                    type="text"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    placeholder="Eg: Madurai Airport"
                    className="w-full bg-transparent outline-none text-xs sm:text-sm text-gray-800 placeholder:text-gray-400"
                    autoComplete="off"
                  />
                </div>
                {errorDrop && (
                  <p className="text-red-500 text-[10px] sm:text-xs mt-1 ml-1">{errorDrop}</p>
                )}
              </div>

              {calculatingDistance && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mt-4">
                  <p className="text-xs sm:text-sm text-blue-600 text-center">Calculating distance...</p>
                </div>
              )}

              {distanceKm && !calculatingDistance && (
                <div className="bg-gradient-to-r from-[#00AEEF]/10 to-[#8B2248]/10 border-2 border-[#00AEEF] rounded-xl px-4 py-3 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">Total Distance:</span>
                    <span className="text-lg sm:text-xl font-bold text-[#8B2248]">{distanceKm} KM</span>
                  </div>
                </div>
              )}

              <div className="text-[10px] sm:text-xs text-gray-500 pt-1">
                💡 Tip: Enter correct pickup & drop points for faster confirmation.
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 flex items-center">
            <div className="w-full h-[280px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden">
              <RouteMap
                pickupLocation={pickupLocation}
                dropLocation={dropLocation}
                defaultCity="Madurai"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
