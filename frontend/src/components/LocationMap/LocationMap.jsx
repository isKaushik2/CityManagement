import React from "react";
import "./LocationMap.css";

const LocationMap = () => {

  return (
    <div>

      <div className="location-header">

        <h3>Where did this occur?</h3>

        <p>
          Search for an address or pin the exact location on the map below.
        </p>

        <div className="search-box">

          <span className="material-symbols-outlined location-icon">
            search
          </span>

          <input
            type="text"
            placeholder="Enter street address, city, or landmark"
          />

        </div>

      </div>


      <div className="map">

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1dEMAofqsLbPFvXcK6sZbu1EEysnu_i7tsJwubDhkt_F1TuRIorOddihv9wWxHf0aKyxjcnAt7in1sLE0ZIN6Ba73ZLAZmTW3vlYJo5_yq1G0E0ahw9kxo2Dgxz_IDU09ZDFldGrVGS68Txmr4m_LIeKXilGGNedwldcX04wG6WJWlffvrsf86aSNkBSLgUVDC59maCqRK_4gTO56y_WhZNRTMdwYaffz_L5lEbruO4ELz1l6-saEGKuxDZ_Ssd85ld6ywAhhZg"
          alt="map"
        />

        <div className="pin">
          <span className="material-symbols-outlined">
            location_on
          </span>
        </div>

      </div>
    </div>
  );
};

export default LocationMap;