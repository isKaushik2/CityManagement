import React from "react";
import "./HomeDashboard.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import white_arrow from "../assets/white-arrow.png";

function HomeDashboard(){
  let issues=24999;
  let solved=20340;
  let volunteers=5600;
  let growth=15;
  let per=Math.round((solved/issues)*100);

  return(
    <div className="Container-1">
      <div className="title">
        <div>
          <h3>Community Impact Dashboard</h3>
        </div>
        <p>Transparency in action. See how we are working together to improve our city</p>
      </div>

      <div className="Data">
        <div className="reported Data-box">
          <p className="number">{issues}</p>
          <p>ISSUES REPORTED</p>
          <p className="Year">Fiscal Year 2026</p>
        </div>

        <div className="solved Data-box">
          <p className="number">{solved}</p>
          <p>ISSUES RESOLVED</p>
          <div className="progress">
            <ProgressBar value={per} color="green"/>
          </div>
          <p className="rate">{per}% Success Rate</p>
        </div>

        <div className="volunteers Data-box">
          <p className="number">{volunteers}</p>
          <p>ACTIVE VOLUNTEERS</p>
          <p className="growth">+{growth}% from last month</p>
        </div>
      </div>

      <div className="Speed">
        <div className="Resolution-Speed">
          <h3> Resolution Speed Trends</h3>

          <div className="Info">
            <p>Pothole Repair</p>
            <p>{4.7} Days Avg</p>
          </div>
          <ProgressBar value={60} color="blue"/>

          <div className="Info">
            <p>Street Light Fix</p>
            <p>{3.2} Days Avg</p>
          </div>
          <ProgressBar value={80} color="blue"/>

          <div className="Info">
            <p>Graffiti Removal</p>
            <p>{5.1} Days Avg</p>
          </div>
          <ProgressBar value={50} color="blue"/>
        </div>

        <div className="More-data">
          <h3>Driven by Citizen Data</h3>
          <p> We do our work based on the based on dashboard that is controlled by citizen. Every report you file helps our maintences crews proritize work where it's needed most </p>
          <button className="btn2">
            View Detailed Dashboard
            <img src={white_arrow}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;