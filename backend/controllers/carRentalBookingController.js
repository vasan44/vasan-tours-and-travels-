// backend/controllers/carRentalBookingController.js
const mongoose = require("mongoose");
const CarRentalBooking = require("../models/CarRentalBooking");

exports.createCarRentalBooking = async (req, res) => {
  try {
    console.log("\n✅ CAR BOOKING HIT");
    console.log("📥 Incoming body:", JSON.stringify(req.body, null, 2));
    console.log("📊 DB Connected:", mongoose.connection.readyState === 1);
    console.log("📊 DB Name:", mongoose.connection.name);
    console.log("📊 Collection:", CarRentalBooking.collection.name);

    // Direct save with minimal processing
    const bookingData = {
      customerName: req.body.name || req.body.customerName,
      mobileNumber: req.body.mobile || req.body.mobileNumber,
      journeyDate: req.body.pickupDate || req.body.journeyDate,
      city: req.body.location || req.body.city || "Unknown",
      carName: req.body.carName || req.body.selectedCar || "Unknown",
      pricePerKm: req.body.carPrice || req.body.pricePerKm || "0",
      pickupLocation: req.body.pickupLocation || "",
      dropLocation: req.body.dropLocation || "",
      distanceKm: Number(req.body.distanceKm) || 0,
      totalFare: Number(req.body.totalFare) || 0,
      message: req.body.message || ""
    };

    console.log("📝 Processed booking data:", JSON.stringify(bookingData, null, 2));

    // Use create() for guaranteed save
    const booking = await CarRentalBooking.create(bookingData);

    console.log("✅ SAVED BOOKING _id:", booking._id);
    console.log("✅ Customer:", booking.customerName);
    console.log("✅ Car:", booking.carName);
    console.log("===== END CAR BOOKING =====\n");

    return res.status(201).json({
      success: true,
      message: "Car booking saved successfully",
      booking: booking
    });
  } catch (err) {
    console.error("\n❌ CAR BOOKING SAVE ERROR");
    console.error("❌ Error Name:", err.name);
    console.error("❌ Error Message:", err.message);
    console.error("❌ Stack:", err.stack);
    console.error("===== END ERROR =====\n");

    return res.status(500).json({
      success: false,
      message: err.message,
      errorName: err.name,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

exports.getAllCarRentalBookings = async (req, res) => {
  try {
    const bookings = await CarRentalBooking.find()
      .select("customerName mobileNumber journeyDate city carName pricePerKm pickupLocation dropLocation distanceKm totalFare message status createdAt")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings: bookings
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message
    });
  }
};
