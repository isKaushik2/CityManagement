import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  const isLoggedIn = user !== null;
  const isAdmin = user?.role === "admin";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="City Connect Logo" className="nav-logo" />
      </NavLink>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/complaints" onClick={() => setMenuOpen(false)}>Complaints</NavLink></li>
        <li><NavLink to="/volunteer" onClick={() => setMenuOpen(false)}>Volunteer</NavLink></li>
        <li><NavLink to="/blood-donor" onClick={() => setMenuOpen(false)}>Blood donor</NavLink></li>
        <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>

        {isAdmin && (
          <li>
            <NavLink to="/admin" className="admin-link" onClick={() => setMenuOpen(false)}>
              Admin panel
            </NavLink>
          </li>
        )}

        {isLoggedIn ? (
          <>
            <li className="nav-user-name">{user.name}</li>
            <li>
              <button className="nav-btn logout" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <button className="nav-btn">Login</button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;