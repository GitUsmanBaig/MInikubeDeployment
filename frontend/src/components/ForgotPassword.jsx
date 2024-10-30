import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/forgot-password', { email });
      alert('Password reset email sent!');
    } catch (error) {
      alert('Failed to send password reset email!');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
