import "./BloodDonation.css";
import {useState} from "react";

const bloodTypes=[
  {type:"O-",percent:15,tag:"CRITICAL"},
  {type:"A-",percent:82,tag:"STABLE"},
  {type:"B-",percent:34,tag:"LOW"},
  {type:"AB+",percent:95,tag:"OPTIMAL"},
  {type:"O+",percent:60,tag:"STABLE"},
  {type:"A+",percent:45,tag:"LOW"},
  {type:"B+",percent:70,tag:"STABLE"},
  {type:"AB-",percent:20,tag:"CRITICAL"}
];

function BloodDonation(){
  const [showForm,setShowForm]=useState(false);

  return(
    <div className="bloodDonationPage">
      <div className="container">
        <div className="heroSection">
          <div className="heroText">
            <h1 className="heroTitle">Be the Hero Your City Needs</h1>
            <p className="heroDescription">
              Your single blood donation can save up to three lives. Join our community of heroes and make a real impact in your neighborhood.
            </p>
            <div className="heroButtons">
              <button className="donateBtn" onClick={()=>setShowForm(true)}>
                Schedule Donation
              </button>
            </div>
          </div>
        </div>

        <div className="bloodStatusSection">
          <h2 className="statusTitle">Real-Time Blood Supply Status</h2>
          <div className="statusCards">
            {bloodTypes.map((blood)=>(
              <div className="statusCard" key={blood.type}>
                <h3>{blood.type}</h3>
                <p className="statusPercent">{blood.percent}%</p>
                <div className="progressBar">
                  <div className="progressFill" style={{width:`${blood.percent}%`}}></div>
                </div>
                <span className="statusTag">{blood.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="eligibilitySection">
          <div className="eligibilityCardMain">
            <h2>Am I Eligible?</h2>
            <p className="eligibilityIntro">
              Most people can give blood if they are in good health. Check our basic requirements:
            </p>

            <div className="eligibilityItem">
              <span className="checkIcon">✓</span>
              <div>
                <h4>Age Requirement</h4>
                <p>Between 17 and 65 years old.</p>
              </div>
            </div>

            <div className="eligibilityItem">
              <span className="checkIcon">✓</span>
              <div>
                <h4>Weight Limit</h4>
                <p>Weigh at least 50kg (110 lbs).</p>
              </div>
            </div>

            <div className="eligibilityItem">
              <span className="checkIcon">✓</span>
              <div>
                <h4>Health Condition</h4>
                <p>Feeling well and healthy on the day of donation.</p>
              </div>
            </div>

            <div className="eligibilityItem">
              <span className="checkIcon">✓</span>
              <div>
                <h4>Identification</h4>
                <p>Valid government-issued photo ID required.</p>
              </div>
            </div>

            <button className="questionnaireBtn">
              View Full Medical Questionnaire
            </button>
          </div>
        </div>
      </div>

      {showForm&&(
        <div className="popupOverlay">
          <div className="popupCard">
            <h2>Schedule Donation</h2>
            <input type="text" placeholder="Full Name"/>
            <input type="email" placeholder="Email"/>

            <select className="bloodSelect">
              <option value="">Select Blood Type</option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>

            <input type="date"/>

            <div className="formButtons">
              <button className="cancelBtn" onClick={()=>setShowForm(false)}>
                Cancel
              </button>
              <button className="submitBtn">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BloodDonation;