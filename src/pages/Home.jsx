

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css';

const Home = () => {
  return (
    <div className="container-fluid py-4 py-md-5 home-content animate-fadeIn">
      <div className="card p-4 p-md-5 mb-4">
        <h2 className="mb-4 text-center">👤Welcome to User Management</h2>
        <p className="lead text-center">
          Efficiently manage your user base with our intuitive system. Create, update, and delete user profiles with ease, and enjoy a seamless experience with secure authentication.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card feature-card p-3 p-md-4 animate-slideIn" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-person-fill me-3" style={{ fontSize: '2rem' }}></i>
              <h4 className="mb-0">User Management</h4>
            </div>
            <p>Create, edit, and delete user profiles with ease.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card feature-card p-3 p-md-4 animate-slideIn" style={{ animationDelay: '0.2s', backgroundColor: 'var(--success-color)', color: 'white' }}>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-lock-fill me-3" style={{ fontSize: '2rem' }}></i>
              <h4 className="mb-0">Secure Authentication</h4>
            </div>
            <p>Robust login system with JWT authentication.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card feature-card p-3 p-md-4 animate-slideIn" style={{ animationDelay: '0.4s', backgroundColor: 'var(--secondary-color)', color: 'white' }}>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-camera-fill me-3" style={{ fontSize: '2rem' }}></i>
              <h4 className="mb-0">Photo Upload</h4>
            </div>
            <p>Add and update user profile pictures seamlessly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;