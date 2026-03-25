import React, { useState } from "react";
import Header from "../components/Header/Header";
import UploadBox from "../components/UploadBox/UploadBox";
import MediaPreview from "../components/MediaPreview/MediaPreview";
import "./Step3Evidence.css";

const Step3Evidence = ({ nextStep, prevStep }) => {

  const [files, setFiles] = useState([]);

  return (
    <div className="page">

      <div className="complaint-container complaint-glass complaint-card">

        <div className="progress-section">

          <div className="progress-top">
            <p>Step 3 of 4: Uploading Evidence</p>
            <span>75% Complete</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill-75"></div>
          </div>

        </div>


        <div className="intro">
          <h1>Upload Evidence</h1>
          <p>
            Provide photos or videos clearly showing the issue.
          </p>
        </div>


        <UploadBox files={files} setFiles={setFiles} />


        <div className="media-grid">

          {files.map((file, index) => (
            <MediaPreview
              key={index}
              file={file}
              index={index}
              files={files}
              setFiles={setFiles}
            />
          ))}

        </div>


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

export default Step3Evidence;