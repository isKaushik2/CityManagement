import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import {Link,useNavigate} from "react-router-dom";

function Navbar(){
  const navigate=useNavigate();
  const isLoggedIn=localStorage.getItem("loggedIn");

  const handleLogout=()=>{
    localStorage.removeItem("loggedIn");
    navigate("/login");
    window.location.reload();
  };

  return(
    <nav className="navbar">
      <img src={logo} alt="City Connect Logo" className="nav-logo"/>

      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Contact us</li>

        {!isLoggedIn?(
          <li>
            <Link to="/login">
              <button className="nav-btn">Login</button>
            </Link>
          </li>
        ):(
          <li>
            <button className="nav-btn" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;