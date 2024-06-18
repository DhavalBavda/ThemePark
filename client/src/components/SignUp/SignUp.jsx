import React, { useState } from 'react';
import './SignUp.css';
import videoSignup from '/video/video_signup.mp4';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function SignUp() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Send the form data to the server
      console.log('Form submitted:', { mobileNumber, password });
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="signup-container">
      <video autoPlay muted playsInline loop className="video-container">
        <source src={videoSignup} type="video/mp4" />
      </video>
      <div className="form-container">
        <div className="back-button" onClick={handleBack}>
          <FaArrowLeft />
          
        </div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Mobile Number:
            <input
              type="tel"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
