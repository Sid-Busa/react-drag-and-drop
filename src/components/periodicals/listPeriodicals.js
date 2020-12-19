import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const ListPeriodicals = () => {
  const periodicalList = useSelector((state) => state.periodicals);

  //handle drag start
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  return (
    <div className="periodicals-info">
      <h2>PERIODICALS</h2>
      <div className="periodicals-list">
        {/* list of  periodical */}
        {periodicalList.map((item) => (
          !item.category && (
            <div
              key={item.id}
              className="periodicals"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
              <span> {item.title} </span>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ListPeriodicals;
