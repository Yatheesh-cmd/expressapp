import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserList = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', username: '', photo: null });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        toast.error('Failed to fetch users', { position: 'top-right' });
        navigate('/login');
      }
    };
    fetchUsers();
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('username', formData.username);
    if (formData.photo) data.append('photo', formData.photo);

    try {
      await axios.post('http://localhost:5000/users', data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('User created successfully!', { position: 'top-right' });
      window.location.reload();
    } catch (error) {
      toast.error('Failed to create user', { position: 'top-right' });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('User deleted successfully!', { position: 'top-right' });
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      toast.error('Failed to delete user', { position: 'top-right' });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* Create User Form (Left Section) */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm animate-fadeIn" style={{ minHeight: '400px' }}>
            <h3 className="mb-4">Create User</h3>
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
              <button className="btn btn-primary animate-slideIn mt-3" onClick={handleSubmit}>
                Create User
              </button>
            </div>
          </div>
        </div>

        {/* User List Table (Right Section) */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm animate-fadeIn" style={{ minHeight: '400px' }}>
            <h3 className="mb-4">User List</h3>
            <table className="table">
              <thead style={{ backgroundColor: '#6366f1', color: 'white' }}>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id} className="align-middle animate-slideIn">
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>
                      {user.photo && (
                        <img
                          src={`http://localhost:5000/${user.photo}`}
                          alt="user"
                          className="user-image"
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                      )}
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Link to={`/users/${user._id}`} className="btn btn-info btn-sm">
                          View
                        </Link>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;