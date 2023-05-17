import React from "react";
import { useContext } from "react";
import dairyContext from "./Context/dairyContext";

const Dairyitems = (props) => {
  const context = useContext(dairyContext)
  const {deleteDairy} = context
  let {
    day,
    ImportantEvents,
    favouritepersonoftheDay,
    eatingHabits,
    wakingTime,
    sleepingTime,
    editDairy,
    dairy
  } = props;
  return (
    <>
    <div style={{ height:"100vh", width:"97.3vw", marginTop:"-16px", marginBottom:"0px"}}>
      <div className="card" style={{width:"400px"}}>
        <div className="card-body" style={{backgroundColor:"rgb(94 94 143)"}}>
          <h6 className="card-title"><h4>Day:</h4> {day}</h6>
          <h6 className="card-title"><h4>Waking Time:</h4> {wakingTime}</h6>
          <h6 className="card-title"><h4>Sleeping Time:</h4> {sleepingTime}</h6>
          <h6 className="card-title"><h4>Favourite People:</h4> {favouritepersonoftheDay}</h6>
          <h6 className="card-title"><h4>Eating Habits:</h4> {eatingHabits}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
           <p className="card-text">
          <h6 style={{color:"white", fontWeight:"bold"}}><h4 style={{color:'yellow'}}>Important Events:</h4> {ImportantEvents}</h6>
          </p>
          <i style={{color:"yellow"}}
            className="fa-regular fa-trash-can mx-2"
            onClick={() => {
              deleteDairy(dairy._id);
              
            }}
          ></i>
          <i style={{color:"yellow"}}
            className="fa-sharp fa-regular fa-pen-to-square mx-2"
            onClick={() => {
              editDairy(dairy);
            }}
          ></i>
        
        </div>
      </div>
    </div>
    </>
  );
};

export default Dairyitems;
