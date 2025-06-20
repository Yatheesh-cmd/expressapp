import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'; // Custom CSS for animations

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backendf-68e5.onrender.com/login', formData);
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      toast.success('Login successful!', { position: 'top-right' });
      navigate('/users');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Login failed', { position: 'top-right' });
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light animate-fadeIn">
      <div className="row w-100 shadow-lg" style={{ maxWidth: '900px' }}>
        {/* Left Section - Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://www.nicepng.com/png/detail/263-2636180_admin-login-png-admin-login-image-png.png"
            alt="Login Illustration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Right Section - Form */}
        <div className="col-md-6 d-flex align-items-center p-4">
          <div className="w-100">
            <h2 className="text-center mb-4">Login</h2>
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
              <button type="submit" className="btn btn-primary w-100 animate-slideIn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;