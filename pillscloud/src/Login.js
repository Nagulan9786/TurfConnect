import React, { useState } from 'react';
import './Login.css'; // You can define your CSS styles in this file
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email !=='' && password!==''){
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Logged in Successfully');
    setEmail('');
    setPassword('');
  }else{
      alert('Login Mismatch!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to={{ pathname: "/Signup"}}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
