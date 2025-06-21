import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Login from './pages/Login';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import Home from './pages/Home';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    toast.success('Logged out successfully!', { position: 'top-right' });
  };

  return (
    <>
      <style>
        {`
          /* Custom styles for responsive navbar */
          .navbar {
            padding: 0.5rem 1rem;
          }

          .navbar-brand {
            font-size: 1.25rem;
            font-weight: 600;
          }

          .nav-link {
            font-size: 1rem;
            padding: 0.5rem 1rem !important;
            transition: color 0.2s ease-in-out;
          }

          .nav-link:hover {
            color: #0056b3 !important;
          }

          .navbar-toggler {
            border: none;
            padding: 0.25rem 0.75rem;
          }

          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
          }

          .navbar-collapse {
            transition: all 0.3s ease-in-out;
          }

          @media (max-width: 991.98px) {
            .navbar-nav {
              padding: 0.5rem 0;
            }

            .nav-link {
              padding: 0.5rem 1rem !important;
              border-bottom: 1px solid #e9ecef;
            }

            .nav-link:last-child {
              border-bottom: none;
            }

            .navbar-nav .btn-link {
              text-align: left;
              width: 100%;
              padding: 0.5rem 1rem !important;
            }
          }

          @media (max-width: 576px) {
            .container {
              padding-left: 15px;
              padding-right: 15px;
            }

            .navbar-brand {
              font-size: 1.1rem;
            }

            .nav-link {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">User Management</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link" to="/">Home</Link>
                {!token ? (
                  <>
                    <Link className="nav-link" to="/register">Register</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-link" to="/users">User List</Link>
                    <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/users" element={<UserList token={token} />} />
            <Route path="/users/:id" element={<UserDetails token={token} />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;