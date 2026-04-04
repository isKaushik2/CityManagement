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
  const iconMap = {
    Environmental: faTree,
    Senior: faPersonCane,
    Community: faHouseFlag,
    Educational: faGraduationCap,
  };
  const navigate = useNavigate();
  return (
    <div className="Vol-card">
      <div className="icon-box">
        <FontAwesomeIcon icon={iconMap[vcard.type]} />
      </div>
      <h2>{vcard.type}</h2>
      <p>{vcard.description}</p>
      <p>
        <h4>Location</h4> {vcard.location}
      </p>
      <button
        className="vol-btn"
        onClick={() => navigate(`/VolunteerForm/${vcard._id}`)}
      >
        Enroll me
      </button>
    </div>
  );
}

export default VolunteerCard;
