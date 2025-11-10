import React from 'react'
import './AuthCard.css'

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Register
