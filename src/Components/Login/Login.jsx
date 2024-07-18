import './Loginstyle.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Hardcoded predefined email and password
      const predefinedEmail = 'test@example.com';
      const predefinedPassword = 'password123';
  
      if (formData.email === predefinedEmail && formData.password === predefinedPassword) {
        dispatch(login());
        navigate('/home'); // Redirect to home page
      } else {
        console.error('Login failed');
        // Handle login failure (show error message, clear form, etc.)
      }
    };

    return (
      
        <div className="login-container">
          <div className='header'><h1>Digital Signature Managemnet System</h1></div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <br />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <br />
                <button type="submit">Login</button>
                {/* Add error message display logic here if needed */}
            </form>
        </div>
    );
};

export default Login;
