
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { Context } from '../store/appContext';

export const SignUp = () => {
  const redirect = useNavigate()
  const { store, actions } = useContext(Context)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {

    console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e, formData) => {
    e.preventDefault()
    actions.signup(formData)
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      password: '',
    })
    redirect("/")
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
          <input
            type="text"

            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          //required

          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email/Username:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>

        <button type="submit" onClick={(e) => handleSubmit(e, formData)} style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px' }}>

          Sign Up
        </button>
      </form>

      {/* Link to Login Page */}
      <div style={{ marginTop: '20px' }}>
        <p>Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Log in here</Link></p>
      </div>
    </div>
  );
};
