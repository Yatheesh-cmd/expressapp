import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../config/baseurl';

const UserDetails = ({ token }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', username: '', photo: null });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          username: response.data.username
        });
      } catch (error) {
        // toast.error('Failed to fetch user', { position: 'top-right' });
        navigate('/login');
      }
    };
    fetchUser();
  }, [id, token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('username', formData.username);
    if (formData.photo) data.append('photo', formData.photo);

    try {
      await axios.put(`${BASE_URL}/users/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('User updated successfully!', { position: 'top-right' });
      navigate('/users');
    } catch (error) {
      toast.error('Failed to update user', { position: 'top-right' });
    }
  };

  if (!user) return <div className="text-center">Loading...</div>;

  return (
    <div className="card p-4 mx-auto animate-fadeIn" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Edit User</h2>
      {user.photo && (
        <div className="text-center mb-4">
          <img
            src={`${BASE_URL}/${user.photo}`}
            alt="user"
            className="user-image rounded-circle"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
      )}
      <div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control animate-slideIn"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control animate-slideIn"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control animate-slideIn"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Photo</label>
          <input
            type="file"
            className="form-control animate-slideIn"
            onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
          />
        </div>
        <button className="btn btn-primary animate-slideIn" onClick={handleSubmit}>Update User</button>
      </div>
    </div>
  );
};

export default UserDetails;