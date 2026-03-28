import React from "react";
import StepHeader from "../components/StepHeader/StepHeader";
import LocationMap from "../components/LocationMap/LocationMap";
import "./Step2Location.css";

const Step2Location = ({ nextStep, prevStep }) => {
  return (
    <div className="page">

      {/* <StepHeader /> */}

      <div className="complaint-container complaint-glass complaint-card">

          <div className="progress-section">

            <div className="progress-top">

              <div>
                <p className="step">Step 2 of 4</p>
                <h1>Location Selection</h1>
              </div>

              <p className="percent">50% Complete</p>

            </div>

            <div className="progress-bar">
              <div className="progress-fill-50"></div>
            </div>

          </div>


          <LocationMap />

          <div className="buttons">

          <button onClick={prevStep} className="prev">
            ← Previous Step
          </button>

          <button onClick={nextStep} className="next">
            Next Step →
          </button>

        </div>

        </div>

    </div>
  );
};

export default Step2Location;