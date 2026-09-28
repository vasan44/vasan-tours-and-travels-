import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Car, Calendar, LogOut, Search, Filter, Check, X, Trash2, MapPin } from 'lucide-react';

export default function AdminDashboard() {
  const [carBookings, setCarBookings] = useState([]);
  const [tourBookings, setTourBookings] = useState([]);
  const [totalCars, setTotalCars] = useState(0);
  const [activeTab, setActiveTab] = useState('car');
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [actionLoading, setActionLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      await Promise.all([
        fetchCarBookings(),
        fetchTourBookings(),
        fetchCarsCount()
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCarBookings = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/book-car?search=${search}&status=${status}`);
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.bookings || data.data || []);
      setCarBookings(list);
    } catch (error) {
      console.error('Error fetching car bookings:', error);
      setCarBookings([]);
    }
  };

  const fetchTourBookings = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/tour-bookings?search=${search}&status=${status}`);
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.bookings || data.data || []);
      setTourBookings(list);
    } catch (error) {
      console.error('Error fetching tour bookings:', error);
      setTourBookings([]);
    }
  };

  const fetchCarsCount = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/cars');
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.cars || data.data || []);
      setTotalCars(list.length);
    } catch (error) {
      console.error('Error fetching cars:', error);
      setTotalCars(0);
    }
  };

  const handleApplyFilters = async () => {
    setDataLoading(true);
    try {
      if (activeTab === 'car') {
        await fetchCarBookings();
      } else {
        await fetchTourBookings();
      }
    } finally {
      setDataLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearch('');
    setStatus('All');
  };

  const handleCarAction = async (id, action) => {
    if (!window.confirm(`${action} this car booking?`)) return;
    setActionLoading(id);
    try {
      const endpoint = action === 'delete' 
        ? `http://localhost:5000/api/admin/bookings/${id}`
        : `http://localhost:5000/api/admin/bookings/${id}/${action}`;
      
      const res = await fetch(endpoint, {
        method: action === 'delete' ? 'DELETE' : 'PATCH'
      });

      if (res.ok) {
        alert(`✅ Booking ${action}d successfully!`);
        await fetchCarBookings();
      }
    } catch (error) {
      alert(`❌ Failed to ${action} booking`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleTourAction = async (id, action, newStatus) => {
    if (action === 'delete' && !window.confirm('Delete this tour booking?')) return;
    
    setActionLoading(id);
    try {
      const endpoint = action === 'delete'
        ? `http://localhost:5000/api/tour-bookings/${id}`
        : `http://localhost:5000/api/tour-bookings/${id}/status`;
      
      const res = await fetch(endpoint, {
        method: action === 'delete' ? 'DELETE' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: action !== 'delete' ? JSON.stringify({ status: newStatus }) : undefined
      });

      if (res.ok) {
        alert(`✅ Tour booking ${action === 'delete' ? 'deleted' : 'updated'} successfully!`);
        await fetchTourBookings();
      }
    } catch (error) {
      alert(`❌ Failed to ${action} tour booking`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  const currentData = activeTab === 'car' ? carBookings : tourBookings;
  const recentCarBookings = carBookings.slice(0, 10);
  const recentTourBookings = tourBookings.slice(0, 10);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-[#8B2248]">Loading Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#8B2248]">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin/car-bookings')}
              className="px-4 py-2 bg-[#8B2248] text-white rounded-lg hover:bg-[#6d1a38] font-medium transition"
            >
              Car Bookings
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#8B2248]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Car Bookings</p>
                <p className="text-3xl font-bold text-[#8B2248]">{carBookings.length}</p>
              </div>
              <Car size={40} className="text-[#8B2248] opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#00AEEF]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tour Bookings</p>
                <p className="text-3xl font-bold text-[#00AEEF]">{tourBookings.length}</p>
              </div>
              <MapPin size={40} className="text-[#00AEEF] opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Cars</p>
                <p className="text-3xl font-bold text-green-500">{totalCars}</p>
              </div>
              <Car size={40} className="text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Recent Car</p>
                <p className="text-3xl font-bold text-purple-500">{recentCarBookings.length}</p>
              </div>
              <Calendar size={40} className="text-purple-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Recent Tour</p>
                <p className="text-3xl font-bold text-orange-500">{recentTourBookings.length}</p>
              </div>
              <Calendar size={40} className="text-orange-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => handleTabChange('car')}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === 'car'
                  ? 'text-[#8B2248] border-b-4 border-[#8B2248] bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Car className="inline mr-2" size={20} />
              Car Bookings ({carBookings.length})
            </button>
            <button
              onClick={() => handleTabChange('tour')}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === 'tour'
                  ? 'text-[#00AEEF] border-b-4 border-[#00AEEF] bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MapPin className="inline mr-2" size={20} />
              Tour Bookings ({tourBookings.length})
            </button>
          </div>

          {/* Filters */}
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={activeTab === 'car' ? 'Search name, mobile, car...' : 'Search name, email, destination...'}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleApplyFilters()}
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
                onClick={handleApplyFilters}
                className="px-4 py-2 bg-[#8B2248] text-white rounded-lg hover:bg-[#6d1a38] flex items-center justify-center gap-2"
              >
                <Filter size={18} /> Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {dataLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8B2248] mx-auto mb-4"></div>
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {activeTab === 'car' ? (
                <table className="min-w-[1800px] w-full">
                  <thead className="bg-[#8B2248] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Mobile</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">City</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Car</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Pickup</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Drop</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">KM</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Rate</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Total</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                      <th className="px-6 py-4 text-right text-sm font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentData.length === 0 ? (
                      <tr>
                        <td colSpan={12} className="px-6 py-12 text-center text-gray-500">
                          No car bookings found
                        </td>
                      </tr>
                    ) : (
                      currentData.map((b) => (
                        <tr key={b._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">{b.customerName}</td>
                          <td className="px-6 py-4">{b.mobileNumber}</td>
                          <td className="px-6 py-4 capitalize">{b.city}</td>
                          <td className="px-6 py-4 font-semibold text-[#8B2248]">{b.carName}</td>
                          <td className="px-6 py-4 max-w-[180px] truncate">{b.pickupLocation || 'N/A'}</td>
                          <td className="px-6 py-4 max-w-[180px] truncate">{b.dropLocation || 'N/A'}</td>
                          <td className="px-6 py-4">{b.distanceKm || 0}</td>
                          <td className="px-6 py-4 font-bold">{b.pricePerKm || 'N/A'}</td>
                          <td className="px-6 py-4 font-bold text-green-700">₹{b.totalFare || 0}</td>
                          <td className="px-6 py-4">{b.journeyDate ? new Date(b.journeyDate).toLocaleDateString('en-IN') : 'N/A'}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              b.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                              b.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {b.status || 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              {b.status !== 'Confirmed' && (
                                <button
                                  onClick={() => handleCarAction(b._id, 'confirm')}
                                  disabled={actionLoading === b._id}
                                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                  title="Confirm"
                                >
                                  <Check size={16} />
                                </button>
                              )}
                              {b.status !== 'Cancelled' && (
                                <button
                                  onClick={() => handleCarAction(b._id, 'cancel')}
                                  disabled={actionLoading === b._id}
                                  className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                                  title="Cancel"
                                >
                                  <X size={16} />
                                </button>
                              )}
                              <button
                                onClick={() => handleCarAction(b._id, 'delete')}
                                disabled={actionLoading === b._id}
                                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
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
              ) : (
                <table className="w-full">
                  <thead className="bg-[#00AEEF] text-white">
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
                    {currentData.length === 0 ? (
                      <tr>
                        <td colSpan={10} className="px-6 py-12 text-center text-gray-500">
                          No tour bookings found
                        </td>
                      </tr>
                    ) : (
                      currentData.map((b) => (
                        <tr key={b._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold">{b.name}</td>
                          <td className="px-6 py-4">{b.email}</td>
                          <td className="px-6 py-4">{b.mobile}</td>
                          <td className="px-6 py-4">{b.whatsapp || 'N/A'}</td>
                          <td className="px-6 py-4">{b.city || 'N/A'}</td>
                          <td className="px-6 py-4 font-semibold text-[#00AEEF]">{b.destination}</td>
                          <td className="px-6 py-4">{b.date ? new Date(b.date).toLocaleDateString('en-IN') : 'N/A'}</td>
                          <td className="px-6 py-4">{b.guests}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              b.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                              b.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {b.status || 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              {b.status !== 'Confirmed' && (
                                <button
                                  onClick={() => handleTourAction(b._id, 'update', 'Confirmed')}
                                  disabled={actionLoading === b._id}
                                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                  title="Confirm"
                                >
                                  <Check size={16} />
                                </button>
                              )}
                              {b.status !== 'Cancelled' && (
                                <button
                                  onClick={() => handleTourAction(b._id, 'update', 'Cancelled')}
                                  disabled={actionLoading === b._id}
                                  className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                                  title="Cancel"
                                >
                                  <X size={16} />
                                </button>
                              )}
                              <button
                                onClick={() => handleTourAction(b._id, 'delete')}
                                disabled={actionLoading === b._id}
                                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
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
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
