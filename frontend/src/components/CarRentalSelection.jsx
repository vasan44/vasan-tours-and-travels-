import { useState, useEffect } from 'react';
import { Car, Check } from 'lucide-react';

export default function CarRentalSelection() {
  const [cars, setCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', date: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/cars');
      const data = await res.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const toggleCarSelection = (carId) => {
    setSelectedCars(prev =>
      prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]
    );
  };

  const calculateTotal = () => {
    return cars
      .filter(car => selectedCars.includes(car._id))
      .reduce((sum, car) => sum + car.pricePerDay, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedCars.length === 0) {
      alert('Please select at least one car');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          cars: selectedCars,
          totalAmount: calculateTotal(),
          guests: 1
        })
      });

      if (res.ok) {
        alert('Booking successful!');
        setSelectedCars([]);
        setFormData({ name: '', email: '', mobile: '', date: '' });
      } else {
        alert('Booking failed');
      }
    } catch (error) {
      alert('Error creating booking');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#8B2248] mb-8 text-center">
          Car Rental - Select Multiple Cars
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Selection */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cars.map((car) => (
                <div
                  key={car._id}
                  onClick={() => car.available && toggleCarSelection(car._id)}
                  className={`relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all ${
                    selectedCars.includes(car._id)
                      ? 'ring-4 ring-[#8B2248]'
                      : 'hover:shadow-xl'
                  } ${!car.available && 'opacity-50 cursor-not-allowed'}`}
                >
                  {selectedCars.includes(car._id) && (
                    <div className="absolute top-4 right-4 bg-[#8B2248] text-white rounded-full p-2 z-10">
                      <Check size={20} />
                    </div>
                  )}

                  <img
                    src={car.image || 'https://via.placeholder.com/400x250?text=Car'}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <p className="text-sm text-gray-600">{car.model}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#8B2248]">
                        ₹{car.pricePerDay}
                        <span className="text-sm text-gray-600">/day</span>
                      </span>
                      <span className="text-sm text-gray-600">{car.seats} seats</span>
                    </div>
                    {!car.available && (
                      <p className="mt-2 text-red-500 text-sm font-semibold">Not Available</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
              <h2 className="text-2xl font-bold text-[#8B2248] mb-6">Booking Summary</h2>

              {selectedCars.length > 0 ? (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Selected Cars ({selectedCars.length})</h3>
                  <div className="space-y-2">
                    {cars
                      .filter(car => selectedCars.includes(car._id))
                      .map(car => (
                        <div key={car._id} className="flex justify-between text-sm">
                          <span>{car.name}</span>
                          <span className="font-semibold">₹{car.pricePerDay}</span>
                        </div>
                      ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-[#8B2248]">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No cars selected</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B2248]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B2248]"
                />
                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B2248]"
                />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B2248]"
                />

                <button
                  type="submit"
                  disabled={loading || selectedCars.length === 0}
                  className="w-full bg-[#8B2248] hover:bg-[#6d1a38] text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
                >
                  {loading ? 'Booking...' : 'Book Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
