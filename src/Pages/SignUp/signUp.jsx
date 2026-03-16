import React from "react";
import {Link,useNavigate} from "react-router-dom";

export default function Signup(){
  const navigate=useNavigate();

  const handleSignup=()=>{
    localStorage.setItem("loggedIn","true");
    navigate("/");
  };

  return(
    <div className="login-page">
      <div className="logo-section">
        <div className="logo-icon">🏢</div>
        <h1>City Connect</h1>
        <p>Smart Infrastructure Management</p>
      </div>

      <div className="login-card">
        <h2>Create Account</h2>
        <p className="subtitle">Register to access the City Connect dashboard</p>

        <div className="input-group">
          <label>Full Name</label>
          <div className="input-box">
            <span className="icon">👤</span>
            <input type="text" placeholder="Kaushik Ahnaf"/>
          </div>
        </div>

        <div className="input-group">
          <label>Email address</label>
          <div className="input-box">
            <span className="icon">📧</span>
            <input type="email" placeholder="kaushik@cityconnect.gov"/>
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="input-box">
            <span className="icon">🔒</span>
            <input type="password" placeholder="••••••••"/>
          </div>
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <div className="input-box">
            <span className="icon">🔒</span>
            <input type="password" placeholder="••••••••"/>
          </div>
        </div>

        <button className="login-btn" onClick={handleSignup}>
          SIGN UP
        </button>

        <p className="signup-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>

        <div className="footer-links">
          <p>AUTHORIZED PERSONNEL ONLY</p>
          <div className="links">
            <button>Terms</button>
            <button>Support</button>
          </div>
        </div>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} City Connect Municipal Systems. All rights reserved.
      </p>
    </div>
  );
}