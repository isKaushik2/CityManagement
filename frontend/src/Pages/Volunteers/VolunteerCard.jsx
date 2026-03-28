import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faPersonCane,
  faHouseFlag,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "./VolunteerCard.css";
import { useNavigate } from "react-router-dom";
function VolunteerCard({ vcard }) {
  const navigate = useNavigate();
  return (
    <div className="Vol-card">
      <div className="icon-box">
        {vcard.type === "Environmental" ? (
          <FontAwesomeIcon icon={faTree} />
        ) : vcard.type === "Senior" ? (
          <FontAwesomeIcon icon={faPersonCane} />
        ) : vcard.type === "Comunity" ? (
          <FontAwesomeIcon icon={faHouseFlag} />
        ) : (
          <FontAwesomeIcon icon={faGraduationCap} />
        )}
      </div>
      <h2>{vcard.type}</h2>
      <p>{vcard.description}</p>
      <p>
        <h4>Location</h4> {vcard.location}
      </p>
      <button className="vol-btn" onClick={() => navigate("/VolunteerForm")}>
        Enroll me
      </button>
    </div>
  );
}

export default VolunteerCard;
