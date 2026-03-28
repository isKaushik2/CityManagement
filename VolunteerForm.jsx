import React from "react";
import "./VolunteerForm.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
function VolunteerForm() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="containerF">
        <div className="left">
          <p className="tag">RECRUITMENT OPEN</p>
          <h1>
            Shape the <br />
            <span>Metropolis</span>
          </h1>
          <p className="desc">
            Join City's volunteer force. Our urban initiatives require dedicated
            individuals to manage logistical flows and community outreach.
          </p>

          <div className="features">
            <div className="feature">
              <div className="icon">✔</div>
              <div className="Extra">
                <h4>Official Clearance</h4>
                <p>Get certificate for your contribution in the society.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon">⏱</div>
              <div className="Extra">
                <h4>Flexible Shifts</h4>
                <p>24/7 operations in the Neon sector.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="formCardV">
          <h2>Volunteer Registration</h2>

          <div className="row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Home Address"></textarea>

          <button className="vForm" onClick={() => navigate("/VolunteerPage")}>
            Submit Application ➜
          </button>
          <p className="terms">
            By submitting, you agree to the Metropolis citizen service protocol.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VolunteerForm;
