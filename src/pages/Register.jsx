import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'; // Custom CSS for animations

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', formData);
      toast.success('Admin registered successfully!', { position: 'top-right' });
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Registration failed', { position: 'top-right' });
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light animate-fadeIn">
      <div className="row w-100 shadow-lg" style={{ maxWidth: '900px' }}>
        {/* Left Section - Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://img.freepik.com/premium-vector/register-now-labels-with-arrow-vector-banner-registration-services-blogs-websites_662353-1034.jpg?semt=ais_hybrid&w=740"
            alt="Register Illustration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Right Section - Form */}
        <div className="col-md-6 d-flex align-items-center p-4">
          <div className="w-100">
            <h2 className="text-center mb-4">Register Admin</h2>
            <form onSubmit={handleSubmit}>
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
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control animate-slideIn"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
              <button type="submit" className="btn btn-primary w-100 animate-slideIn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;