import React from "react";
import "./style.css";
const Frequency = () => {
  return (
    <div className="frequency-info">
      <h2> FREQUENCY </h2>
      <div className="frequency-list">
        <div className="frequency">
          <h4 className="frequency-header"> YEAR </h4>
        </div>
        <div className="frequency">
          <h4 className="frequency-header"> HALF YEAR </h4>
        </div>
        <div className="frequency">
          <h4 className="frequency-header"> 3 YEAR </h4>
        </div>
        <div className="frequency">
          <h4 className="frequency-header"> 1 YEAR </h4>
        </div>
        <div className="frequency">
          <h4 className="frequency-header"> 10 YEAR </h4>
        </div>
      </div>
    </div>
  );
};

export default Frequency;
