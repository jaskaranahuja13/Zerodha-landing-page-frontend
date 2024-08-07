// src/components/Signup.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setMessage('Signup successful');
      window.location.href = 'http://localhost:3001'; // Redirect to the desired URL
    } else {
      setMessage('Please fill in all fields');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light py-3">
      <div className="d-flex align-items-center shadow rounded-5 bg-white p-5" style={{ maxWidth: '900px', width: '100%' }}>
        <div className="p-4 flex-fill">
          <h2 className="text-primary mb-4">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control py-2 form-control-lg"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-2 form-control-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control py-2 form-control-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-3 m-3">
              Signup
            </button>
            {message && <div className="text-danger mt-3">{message}</div>}
          </form>
        </div>
        <div className="d-none d-md-block flex-fill">
          <img
            src="media/images/signinhe-removebg-preview.png"
            alt="Decorative"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 400, objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
