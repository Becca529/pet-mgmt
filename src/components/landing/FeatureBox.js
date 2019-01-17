import React from "react";
import "./FeatureBox.css";

export function FeatureBox(props) {
  return (
    <div className="feature-box">
      <div className="feature-img">
        <i className={props.icon} />
      </div>
      <div className="feature-body">
        <h3 className="feature-title">{props.title}</h3>
        <p className="feature-description">{props.description}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
