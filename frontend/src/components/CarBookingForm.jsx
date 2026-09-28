import React, { useState, useEffect, useMemo } from "react";

export default function CarBookingForm({
  carId,
  carName,
  carPrice,
  carImage,
  city = "madurai",
  pickupLocation = "",
  dropLocation = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    selectedCar: "",
    pickupDate: "",
    location: city,
    pickupLocation: "",
    dropLocation: "",
    distanceKm: "",
    totalFare: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ratePerKm = useMemo(() => {
    if (!carPrice) return 0;
    const num = String(carPrice).replace(/[^\d.]/g, "");
    return Number(num) || 0;
  }, [carPrice]);

  const totalFare = useMemo(() => {
    const km = Number(formData.distanceKm);
    if (!km || !ratePerKm) return 0;
    return Math.round(km * ratePerKm);
  }, [formData.distanceKm, ratePerKm]);

  useEffect(() => {
    const carDetails = carName ? `${carName} (${carPrice || ""})` : "";
    setFormData((prev) => ({
      ...prev,
      selectedCar: carDetails,
      pickupLocation: pickupLocation || "",
      dropLocation: dropLocation || "",
      location: city,
      totalFare: totalFare,
    }));
  }, [carName, carPrice, pickupLocation, dropLocation, city, totalFare]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const openGoogleDirections = () => {
    if (!pickupLocation || !dropLocation) {
      setError("Please enter pickup and drop locations first.");
      return;
    }
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      pickupLocation
    )}&destination=${encodeURIComponent(dropLocation)}&travelmode=driving`;
    window.open(url, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.selectedCar) {
      setError("Please select a vehicle first");
      return;
    }

    if (!pickupLocation || !dropLocation) {
      setError("Please enter pickup and drop locations");
      return;
    }

    if (!formData.distanceKm || Number(formData.distanceKm) <= 0) {
      setError("Please enter distance in KM");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const payload = {
        ...formData,
        pickupLocation: pickupLocation,
        dropLocation: dropLocation,
        location: city,
        carId: carId || "",
        carName: carName || "",
        carPrice: carPrice || "",
        distanceKm: Number(formData.distanceKm),
        estimatedFare: totalFare,
        totalFare: totalFare,
      };

      const response = await fetch("http://localhost:5000/api/book-car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`✅ ${formData.selectedCar} Booking Successful!`);

        const text =
          `*New Car Booking - Vasan Travels*%0A` +
          `*Vehicle:* ${formData.selectedCar}%0A` +
          `*Pickup:* ${pickupLocation}%0A` +
          `*Drop:* ${dropLocation}%0A` +
          `*Distance:* ${formData.distanceKm} km%0A` +
          `*Rate:* ${carPrice}%0A` +
          `*Total Fare:* ₹${totalFare}%0A` +
          `*Name:* ${formData.name}%0A` +
          `*Mobile:* ${formData.mobile}%0A` +
          `*Date:* ${formData.pickupDate}%0A` +
          `*City:* ${city}`;

        window.open(`https://wa.me/917395875934?text=${text}`, "_blank");

        setFormData({
          name: "",
          mobile: "",
          selectedCar: carName ? `${carName} (${carPrice})` : "",
          pickupDate: "",
          location: city,
          pickupLocation: pickupLocation || "",
          dropLocation: dropLocation || "",
          distanceKm: "",
          totalFare: "",
          message: "",
        });
      } else {
        setError(data.message || "Booking failed. Please try again.");
      }
    } catch (err) {
      setError("Server connection failed. Please check if backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-gray-800">
      {error && (
        <div className="bg-red-500 text-white px-3 py-2 rounded-xl text-xs sm:text-sm">
          {error}
        </div>
      )}

      {(pickupLocation || dropLocation) && (
        <div className="p-3 bg-white/10 rounded-xl border border-white/20">
          <p className="text-[10px] sm:text-[11px] text-pink-200 uppercase font-bold mb-2">
            Trip Summary
          </p>

          <div className="space-y-1 text-xs sm:text-sm">
            {pickupLocation && (
              <p className="flex items-center gap-2">
                <span className="text-green-300">📍</span>
                <span className="text-white/90 truncate text-[10px] sm:text-xs">
                  Pickup: {pickupLocation}
                </span>
              </p>
            )}
            {dropLocation && (
              <p className="flex items-center gap-2">
                <span className="text-red-300">🏁</span>
                <span className="text-white/90 truncate text-[10px] sm:text-xs">
                  Drop: {dropLocation}
                </span>
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={openGoogleDirections}
            className="mt-3 w-full h-9 sm:h-10 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition"
          >
            Open Google Maps (Get KM)
          </button>
        </div>
      )}

      <div className="text-left">
        <label className="text-[9px] sm:text-[10px] uppercase font-bold text-pink-200 ml-1">
          Vehicle Selected
        </label>
        <input
          type="text"
          value={formData.selectedCar || "No Vehicle Selected"}
          readOnly
          className="w-full px-3 py-2 rounded-xl bg-white/20 border border-white/40 text-white font-bold outline-none cursor-not-allowed text-xs sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 rounded-xl border-none outline-none focus:ring-2 ring-[#00AEEF] text-xs sm:text-sm"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="w-full px-3 py-2 rounded-xl border-none outline-none focus:ring-2 ring-[#00AEEF] text-xs sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="text-left">
          <label className="text-[9px] sm:text-[10px] uppercase font-bold text-pink-200 ml-1">
            Journey Date
          </label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 rounded-xl border-none outline-none focus:ring-2 ring-[#00AEEF] text-xs sm:text-sm"
          />
        </div>

        <div className="text-left">
          <label className="text-[9px] sm:text-[10px] uppercase font-bold text-pink-200 ml-1">
            Distance (KM)
          </label>
          <input
            type="number"
            name="distanceKm"
            placeholder="Ex: 12"
            value={formData.distanceKm}
            onChange={handleChange}
            min="1"
            step="0.1"
            required
            className="w-full px-3 py-2 rounded-xl border-none outline-none focus:ring-2 ring-[#00AEEF] text-xs sm:text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white/10 border border-white/20 rounded-xl px-3 py-2">
          <p className="text-[9px] sm:text-[10px] uppercase font-bold text-pink-200">Rate</p>
          <p className="text-white font-extrabold text-xs sm:text-sm">{carPrice || "N/A"}</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-xl px-3 py-2">
          <p className="text-[9px] sm:text-[10px] uppercase font-bold text-pink-200">Total Fare</p>
          <p className="text-[#00AEEF] font-extrabold text-xs sm:text-sm">
            {totalFare ? `₹${totalFare}` : "—"}
          </p>
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Special Requirements (Optional)"
        value={formData.message}
        onChange={handleChange}
        rows="2"
        className="w-full px-3 py-2 rounded-xl border-none outline-none focus:ring-2 ring-[#00AEEF] resize-none text-xs sm:text-sm"
      />

      <button
        type="submit"
        disabled={
          loading ||
          !formData.selectedCar ||
          !pickupLocation ||
          !dropLocation ||
          !formData.distanceKm
        }
        className="w-full bg-[#00AEEF] hover:bg-white hover:text-[#8B2248] text-white py-2.5 sm:py-3 rounded-xl font-bold shadow-xl transition-all duration-300 uppercase tracking-widest active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
      >
        {loading ? "BOOKING..." : "CONFIRM YOUR RIDE"}
      </button>
    </form>
  );
}
