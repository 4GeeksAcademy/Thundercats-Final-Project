import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';

export const Login = () => {
    const {store, actions} = useContext(Context)
    const redirect = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e, formData) => {
        e.preventDefault()
        actions.login(formData)
        console.log('Form submitted:', formData);
        setFormData({
          email: '',
          password: '',
        })
        redirect("/")
      };


    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Email/Username Field */}
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Email or Username:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>

                {/* Password Field */}
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

                    Login
                </button>
            </form>

            {/* Link to Sign Up Page */}
            <div style={{ marginTop: '20px' }}>
                <p>Don't have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up here</Link></p>
            </div>
        </div>
    );
};
