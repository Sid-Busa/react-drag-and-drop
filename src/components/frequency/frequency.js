import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "./style.css";
const Frequency = () => {
  const dispatch = useDispatch()
  // frequency and periodical data from reducer
  const frequencyList = useSelector((state) => state.frequency);
  const periodicalList = useSelector((state) => state.periodicals);

  //handle drag start
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  //handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //handle on drop
  const onDrop =  (e,categoryName) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const newListItems = periodicalList
    const newList =  newListItems.map((item) =>{
      if(item.id === id ){
        item.category = categoryName
      }
      return item
    })  
    dispatch({
      type:"SET_PERIODICAL_CATEGORY",
      payload:newList
    })
  };
  return (
    <div className="frequency-info">
      <h2> FREQUENCY </h2>
      <div className="frequency-list">
        {frequencyList.map((item) => (
          <div key={item.id} className="frequency" onDragOver={handleDragOver} onDrop={(e) => onDrop(e,item.category)} >
            <h4 className="frequency-header"> {item.title} </h4>
            {periodicalList.map((periodical) => (
              <div key={periodical.id}>
                {periodical.category === item.category && (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, periodical.id)}
                    className="periodicals"
                  >
                    {periodical.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Frequency;
