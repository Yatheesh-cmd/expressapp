import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Login from './pages/Login';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import Home from './pages/Home';
import './App.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    toast.success('Logged out successfully!', { position: 'top-right' });
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">User Management</Link>
          <div className="navbar-nav">
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
  );
};

export default App;