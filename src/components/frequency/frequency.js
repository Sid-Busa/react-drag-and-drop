import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const Frequency = () => {
  const frequencyList = useSelector((state) => state.frequency);
  return (
    <div className="frequency-info">
      <h2> FREQUENCY </h2>
      <div className="frequency-list">
        {frequencyList.map((item) => (
          <div key={item.id} className="frequency">
            <h4 className="frequency-header"> {item.title} </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequency;
