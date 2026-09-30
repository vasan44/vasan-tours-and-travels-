import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import API_URL from '../../config/api';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Trim and lowercase email to avoid issues
    const cleanEmail = credentials.email.trim().toLowerCase();
    const cleanPassword = credentials.password;

    console.log('🔐 Attempting login with:', cleanEmail);

    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: cleanEmail, 
          password: cleanPassword 
        })
      });

      const data = await res.json();
      
      console.log('📡 Response status:', res.status);
      console.log('📦 Response data:', data);
      
      if (res.ok) {
        console.log('✅ Login successful!');
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminData', JSON.stringify(data.admin));
        navigate('/admin/dashboard');
      } else {
        console.log('❌ Login failed:', data.message);
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('❌ Network error:', err);
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B2248] to-[#4a0e3a] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-[#8B2248] rounded-full mb-4">
            <LogIn size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-[#8B2248]">Admin Login</h1>
          <p className="text-gray-600 mt-2">Tours & Travels Management</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Default Credentials Info */}
        {/* <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-4 text-sm">
          <p className="font-semibold mb-1">Default Credentials:</p>
          <p>Email: admin@vasantours.com</p>
          <p>Password: admin123</p>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              required
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2248] focus:border-transparent"
              placeholder="admin@vasantours.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2248] focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B2248] hover:bg-[#6d1a38] text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>If login fails, run in backend:</p>
          <code className="bg-gray-100 px-2 py-1 rounded text-xs">node seedAdmin.js</code>
        </div>
      </div>
    </div>
  );
}
