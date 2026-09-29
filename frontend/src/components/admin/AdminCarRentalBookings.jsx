import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Calendar, Phone, MapPin, User, Check, X, Trash2, LogOut } from 'lucide-react';
import API_URL from '../../config/api';

export default function AdminCarRentalBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`${API_URL}/api/admin/bookings`);
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('❌ Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (id) => {
    setActionLoading(id);
    try {
      const response = await fetch(`${API_URL}/api/admin/bookings/${id}/confirm`, {
        method: 'PATCH'
      });
      if (response.ok) fetchBookings();
    } catch (error) {
      console.error('❌ Failed to confirm booking:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleCancel = async (id) => {
    setActionLoading(id);
    try {
      const response = await fetch(`${API_URL}/api/admin/bookings/${id}/cancel`, {
        method: 'PATCH'
      });
      if (response.ok) fetchBookings();
    } catch (error) {
      console.error('❌ Failed to cancel booking:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    setActionLoading(id);
    try {
      const response = await fetch(`${API_URL}/api/admin/bookings/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) fetchBookings();
    } catch (error) {
      console.error('❌ Failed to delete booking:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  const filteredBookings = bookings.filter(booking => {
    const q = search.toLowerCase();
    return (
      (booking.customerName || "").toLowerCase().includes(q) ||
      (booking.mobileNumber || "").toLowerCase().includes(q) ||
      (booking.city || "").toLowerCase().includes(q) ||
      (booking.carName || "").toLowerCase().includes(q) ||
      (booking.pickupLocation || "").toLowerCase().includes(q) ||
      (booking.dropLocation || "").toLowerCase().includes(q)
    );
  });

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading bookings...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#8B2248]">Car Rental Bookings</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 bg-[#8B2248] text-white rounded-lg hover:bg-[#6d1a38] font-medium transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/admin/tour-bookings')}
              className="px-4 py-2 bg-[#8B2248] text-white rounded-lg hover:bg-[#6d1a38] font-medium transition"
            >
              Tour Bookings
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 bg-white rounded-xl shadow p-4">
          <input
            type="text"
            placeholder="Search by name, mobile, city, pickup, drop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B2248] outline-none"
          />
        </div>

        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center text-gray-500">
            No bookings found
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl bg-white shadow">
            <table className="min-w-[1200px] w-full whitespace-nowrap">
              <thead className="bg-[#8B2248] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Mobile</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">City</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Car</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Pickup</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Drop</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-[#00AEEF]" />
                        <span className="font-semibold text-gray-800">{booking.customerName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-[#00AEEF]" />
                        <span className="text-gray-700">{booking.mobileNumber}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#00AEEF]" />
                        <span className="text-gray-700 capitalize">{booking.city}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Car size={16} className="text-[#00AEEF]" />
                        <span className="font-semibold text-gray-800">{booking.carName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700 max-w-[220px] truncate" title={booking.pickupLocation || ""}>
                      {booking.pickupLocation ? booking.pickupLocation : <span className="text-gray-400">N/A</span>}
                    </td>
                    <td className="px-6 py-4 text-gray-700 max-w-[220px] truncate" title={booking.dropLocation || ""}>
                      {booking.dropLocation ? booking.dropLocation : <span className="text-gray-400">N/A</span>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#00AEEF]" />
                        <span className="text-gray-700">
                          {new Date(booking.journeyDate).toLocaleDateString('en-IN')}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-[#8B2248]">{booking.pricePerKm}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold
                        ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                          booking.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 
                          'bg-yellow-100 text-yellow-700'}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {booking.status !== 'Confirmed' && (
                          <button
                            onClick={() => handleConfirm(booking._id)}
                            disabled={actionLoading === booking._id}
                            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
                            title="Confirm"
                          >
                            <Check size={16} />
                          </button>
                        )}
                        {booking.status !== 'Cancelled' && (
                          <button
                            onClick={() => handleCancel(booking._id)}
                            disabled={actionLoading === booking._id}
                            className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50"
                            title="Cancel"
                          >
                            <X size={16} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(booking._id)}
                          disabled={actionLoading === booking._id}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
