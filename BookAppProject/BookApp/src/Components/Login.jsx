import React from 'react'
import './AuthCard.css'

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login
