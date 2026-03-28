import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function Navbar(){
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  const isLoggedIn = user !== null;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return(
    <nav className="navbar">
      <img src={logo} alt="City Connect Logo" className="nav-logo"/>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Contact us</li>

        {!isLoggedIn ? (
          <li>
            <Link to="/login">
              <button className="nav-btn">Login</button>
            </Link>
          </li>
        ) : (
          <li>
            <button className="nav-btn" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;