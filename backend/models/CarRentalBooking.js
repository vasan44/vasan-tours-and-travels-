// backend/models/CarRentalBooking.js
const mongoose = require("mongoose");

const carRentalBookingSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    journeyDate: { type: Date, required: true },
    city: { type: String, required: true },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
    carName: { type: String, required: true },
    pricePerKm: { type: String, required: true },
    pickupLocation: { type: String, default: "" },
    dropLocation: { type: String, default: "" },
    distanceKm: { type: Number, default: 0 },
    totalFare: { type: Number, default: 0 },
    message: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarRentalBooking", carRentalBookingSchema);
