import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero nanbar">
      <div className="Hero-text">
        <h1>Your City,Connected</h1>
        <p>
          Access municipal services, stay updated with local news, and
          contribute to your community through one central portal.
        </p>
        <div className="Options">
          <div className="box report">
            <div className="icon">
              <FontAwesomeIcon icon={faWrench} />
            </div>
            <h2>Report a Problem</h2>
            <h4>
              Potholes, broken street lights, or graffiti? Let us know and track
              the repair progress.
            </h4>
            <ul>
              <li>Street Light Repairs</li>
              <li>Road Maintenance</li>
              <li>Sanitation Issues</li>
            </ul>
            <button onClick={() => navigate("/ReportPage")}>
              Send a Report
            </button>
          </div>
          <div className="box Volunteer">
            <div className="icon">
              <FontAwesomeIcon icon={faWrench} />
            </div>
            <h2>Valunteer</h2>
            <h4>
              Make a difference in your neighborhood.Join community cleanups or
              mentorship programs.
            </h4>
            <ul>
              <li>Park Cleanups</li>
              <li>Senior Support</li>
              <li>Youth Mentoring</li>
            </ul>
            <button onClick={() => navigate("/VolunteerPage")}>
              Find Opportunities
            </button>
          </div>
          <div className="box Blood">
            <div className="icon">
              <FontAwesomeIcon icon={faWrench} />
            </div>
            <h2>Valunteer</h2>
            <h4>
              Make a difference in your neighborhood.Join community cleanups or
              mentorship programs.
            </h4>
            <ul>
              <li>Park Cleanups</li>
              <li>Senior Support</li>
              <li>Youth Mentoring</li>
            </ul>
            <button onClick={() => navigate("/BloodDonation")}>
              Find Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
