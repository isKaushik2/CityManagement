import React, { useState } from "react";
import Header from "../components/Header/Header";
import UrgencySelector from "../components/UrgencySelector/UrgencySelector";
import ContactForm from "../components/ContactForm/ContactForm";
import "./Step4Final.css";

const Step4Final = ({ prevStep }) => {

  const [urgency, setUrgency] = useState("Urgent");

  return (
    <div className="page">

      <div className="complaint-container complaint-glass complaint-card">

        <div className="progress-section">

          <div className="progress-top">
            <span>Step 4 of 4: Completion</span>
            <span>100% Complete</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill-100"></div>
          </div>

        </div>


        <h1>Final Details & Contact Info</h1>

        <p className="subtitle">
          Provide final information before submitting the complaint.
        </p>


        <div className="section">

          <label>Detailed Description</label>

          <textarea
            placeholder="Describe what happened..."
          ></textarea>

        </div>


        <UrgencySelector
          urgency={urgency}
          setUrgency={setUrgency}
        />


        <ContactForm />


        <div className="buttons">

          <button onClick={prevStep} className="prev">
            ← Previous step
          </button>

          <button className="next">
            Submit Complaint →
          </button>

        </div>

      </div>

    </div>
  );
};

export default Step4Final;