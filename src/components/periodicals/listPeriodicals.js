import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const ListPeriodicals = () => {
  const periodicalList = useSelector((state) => state.periodicals);
  return (
    <div className="periodicals-info">
      <h2>PERIODICALS</h2>
      <div className="periodicals-list">
        {/* list of  periodical */}
        {periodicalList.map((item) => (
          <div key={item.id} className="periodicals">
            <span> {item.title} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPeriodicals;
