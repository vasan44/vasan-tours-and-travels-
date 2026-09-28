import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Mail, Phone, User, MessageSquare, Calendar } from 'lucide-react';

export default function AdminContactDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('http://localhost:5000/api/contact');
      
      if (response.data.success) {
        setContacts(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to fetch contacts. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
      alert('✅ Contact deleted successfully');
    } catch (err) {
      console.error('Error deleting contact:', err);
      alert('❌ Failed to delete contact');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-semibold">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md">
          <p className="font-semibold">{error}</p>
          <button 
            onClick={fetchContacts}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Mail className="text-pink-600" size={32} />
              Contact Messages
            </h1>
            <span className="bg-pink-600 text-white px-4 py-2 rounded-full font-semibold">
              {contacts.length} Messages
            </span>
          </div>

          {contacts.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">No contact messages yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Message</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-gray-400" />
                          <span className="font-medium text-gray-800">{contact.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-gray-400" />
                          <span className="text-gray-700">{contact.phone}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-gray-400" />
                          <span className="text-gray-700 text-sm">{contact.email}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-gray-700 text-sm max-w-xs truncate">{contact.message}</p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span className="text-gray-600 text-sm">{formatDate(contact.createdAt)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition inline-flex items-center gap-1"
                          title="Delete contact"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
