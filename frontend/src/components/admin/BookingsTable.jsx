import { useState } from 'react';
import { Trash2, Check, X, Eye } from 'lucide-react';

export default function BookingsTable({ bookings, onRefresh }) {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (res.ok) {
        alert(`Booking ${status.toLowerCase()} successfully`);
        onRefresh();
      }
    } catch (error) {
      alert('Error updating booking');
    }
  };

  const deleteBooking = async (id) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        alert('Booking deleted successfully');
        onRefresh();
      }
    } catch (error) {
      alert('Error deleting booking');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#8B2248] text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Cars</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="9" className="px-6 py-8 text-center text-gray-500">
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{booking._id.slice(-6)}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{booking.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{booking.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{booking.mobile}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {booking.cars?.length > 0 ? (
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="text-[#00AEEF] hover:underline flex items-center gap-1"
                      >
                        <Eye size={14} /> {booking.cars.length} car(s)
                      </button>
                    ) : (
                      <span className="text-gray-400">No cars</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    ₹{booking.totalAmount || 0}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {booking.status === 'Pending' && (
                        <button
                          onClick={() => updateStatus(booking._id, 'Confirmed')}
                          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                          title="Confirm"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      {booking.status !== 'Cancelled' && (
                        <button
                          onClick={() => updateStatus(booking._id, 'Cancelled')}
                          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                          title="Cancel"
                        >
                          <X size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => deleteBooking(booking._id)}
                        className="p-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Car Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedBooking(null)}>
          <div className="bg-white rounded-xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-[#8B2248] mb-4">Selected Cars</h3>
            <div className="space-y-3">
              {selectedBooking.cars?.map((car, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold">{car.name} - {car.model}</p>
                  <p className="text-sm text-gray-600">₹{car.pricePerDay}/day • {car.seats} seats</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedBooking(null)}
              className="mt-4 w-full bg-[#8B2248] text-white py-2 rounded-lg hover:bg-[#6d1a38]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
