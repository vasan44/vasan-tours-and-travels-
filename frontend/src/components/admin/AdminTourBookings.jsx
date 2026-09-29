import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Check, X, Trash2, LogOut } from 'lucide-react';
import API_URL from '../../config/api';

export default function AdminTourBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const url = `${API_URL}/api/tour-bookings?search=${search}&status=${status}`;
      console.log('🔄 Fetching tour bookings from:', url);
      
      const response = await fetch(url);
      console.log('📡 Response status:', response.status, response.statusText);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const raw = await response.json();
      console.log('📥 Raw API response:', raw);
      console.log('📥 Response type:', typeof raw);
      console.log('📥 Is Array?', Array.isArray(raw));
      
      // Support multiple response formats
      let list = [];
      if (Array.isArray(raw)) {
        list = raw;
      } else if (raw.bookings && Array.isArray(raw.bookings)) {
        list = raw.bookings;
      } else if (raw.data && Array.isArray(raw.data)) {
        list = raw.data;
      } else if (raw.success && raw.bookings && Array.isArray(raw.bookings)) {
        list = raw.bookings;
      }
      
      console.log('✅ Extracted bookings:', list.length, 'items');
      if (list.length > 0) {
        console.log('📋 First booking sample:', list[0]);
        console.log('📋 Field names:', Object.keys(list[0]));
      }
      
      setBookings(list);
    } catch (err) {
      console.error('❌ Fetch error:', err);
      console.error('❌ Error details:', err.message);
      setError(err.message);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_URL}/api/tour-bookings/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        alert(`✅ Booking ${newStatus.toLowerCase()} successfully!`);
        fetchBookings();
      } else {
        const errorData = await response.json();
        alert(`❌ Failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('❌ Update error:', err);
      alert(`❌ Failed to update: ${err.message}`);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm('⚠️ Delete this booking permanently?')) return;

    try {
      const response = await fetch(`${API_URL}/api/tour-bookings/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert('✅ Booking deleted successfully!');
        fetchBookings();
      } else {
        const errorData = await response.json();
        alert(`❌ Failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('❌ Delete error:', err);
      alert(`❌ Failed to delete: ${err.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#8B2248]">Tour Bookings</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 bg-[#8B2248] text-white rounded-lg hover:bg-[#6d1a38] font-medium transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/admin/car-bookings')}
              className="px-4 py-2 bg-[#8B2248] text-white rounded-lg hover:bg-[#6d1a38] font-medium transition"
            >
              Car Bookings
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
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            <strong>Error:</strong> {error}
            <br />
            <small>Check console for details. Ensure backend is running on port 5000.</small>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search name, email, mobile, city, destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchBookings()}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B2248]"
              />
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B2248]"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <button
              onClick={fetchBookings}
              className="px-4 py-2 bg-[#8B2248] text-white rounded-lg hover:bg-[#6d1a38] flex items-center justify-center gap-2"
            >
              <Filter size={18} /> Apply Filters
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8B2248] mx-auto mb-4"></div>
              <p className="text-gray-500">Loading tour bookings...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#8B2248] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Mobile</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">WhatsApp</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">City</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Destination</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Guests</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bookings.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="px-6 py-12 text-center text-gray-500">
                        No tour bookings found
                      </td>
                    </tr>
                  ) : (
                    bookings.map((b) => {
                      // Field fallbacks for different naming conventions
                      const name = b.name || b.customerName || b.userName || 'N/A';
                      const email = b.email || b.customerEmail || b.userEmail || 'N/A';
                      const mobile = b.mobile || b.phone || b.mobileNumber || b.phoneNumber || 'N/A';
                      const whatsapp = b.whatsapp || b.whatsApp || b.whatsappNumber || 'N/A';
                      const city = b.city || b.cityOfResidence || b.location || 'N/A';
                      const destination = b.destination || b.tourName || b.packageName || b.tourDestination || 'N/A';
                      const travelDate = b.date || b.travelDate || b.journeyDate || b.dateOfTravel || b.bookingDate;
                      const guests = b.guests || b.peopleCount || b.noOfPeople || b.numberOfGuests || b.pax || 0;
                      const bookingStatus = b.status || 'Pending';
                      
                      return (
                        <tr key={b._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">{name}</td>
                          <td className="px-6 py-4">{email}</td>
                          <td className="px-6 py-4">{mobile}</td>
                          <td className="px-6 py-4">{whatsapp}</td>
                          <td className="px-6 py-4">{city}</td>
                          <td className="px-6 py-4 font-semibold text-[#8B2248]">{destination}</td>
                          <td className="px-6 py-4">
                            {travelDate ? new Date(travelDate).toLocaleDateString('en-IN') : 'N/A'}
                          </td>
                          <td className="px-6 py-4">{guests}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              bookingStatus === 'Confirmed' ? 'bg-green-100 text-green-700' :
                              bookingStatus === 'Cancelled' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {bookingStatus}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              {bookingStatus !== 'Confirmed' && (
                                <button
                                  onClick={() => updateStatus(b._id, 'Confirmed')}
                                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                  title="Confirm"
                                >
                                  <Check size={16} />
                                </button>
                              )}
                              {bookingStatus !== 'Cancelled' && (
                                <button
                                  onClick={() => updateStatus(b._id, 'Cancelled')}
                                  className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                                  title="Cancel"
                                >
                                  <X size={16} />
                                </button>
                              )}
                              <button
                                onClick={() => deleteBooking(b._id)}
                                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                title="Delete"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
