import React from 'react';
import { useContext } from 'react';
import dairyContext from './Context/dairyContext';
import { useState } from 'react';

const AddDairy = () => {
const context = useContext(dairyContext)
const {addDairy, mode, showAlert} = context;
const [dairy, setDairy] = useState({day: '', ImportantEvents:'', favouritepersonoftheDay: '', eatingHabits:'', wakingTime:'', sleepingTime:''})

const handleChange = (event) =>{
 setDairy({...dairy, [event.target.name]: event.target.value})
}

const handleClick = (e) =>{
// e.preventDefault();
addDairy(dairy.day, dairy.ImportantEvents, dairy.favouritepersonoftheDay, dairy.eatingHabits, dairy.wakingTime, dairy.sleepingTime)
setDairy({day: '', ImportantEvents:'', favouritepersonoftheDay: '', eatingHabits:'', wakingTime:'', sleepingTime:''})
showAlert("Dairy added successfully", "success")



}



  return (
    <>
    <div style={{ height:"100vh"}}>

<div className="container1 mx-2" style={{paddingTop:"40px"}} >
<div className=" my-4 container2">
  <label style={{color:"white", fontWeight:"bold"}}htmlFor="exampleFormControlInput1" className="form-label"><h4>Day</h4></label>
  <input type="datetime-local" className="form-control" id="exampleFormControlInput1" name="day" onChange={handleChange} style={{ backgroundColor: "white"}} />
</div>
<div className=" my-4">
  <label style={{color:"white", fontWeight:"bold"}}htmlFor="exampleFormControlInput1" className="form-label"><h4>Waking Time</h4></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="wakingTime"onChange={handleChange}style={{ backgroundColor: "white" }}/>
</div>
<div className=" my-4">
  <label style={{color:"white", fontWeight:"bold"}}htmlFor="exampleFormControlInput1" className="form-label"><h4>Sleeping Time</h4></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="sleepingTime"onChange={handleChange}style={{ backgroundColor: "white" }}/>
</div>
<div className=" my-4">
  <label style={{color:"white", fontWeight:"bold"}}htmlFor="exampleFormControlInput1" className="form-label"><h4>Favourite Person of the Day</h4></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="favouritepersonoftheDay"onChange={handleChange}style={{ backgroundColor: "white" }}/>
</div>
<div className="mb-3">
  <label style={{color:"white", fontWeight:"bold"}}htmlFor="exampleFormControlTextarea1" className="form-label"><h4>Important Events</h4></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="ImportantEvents"onChange={handleChange}style={{ backgroundColor: "white" }}></textarea>
</div>
<div className=" my-4">
  <label style={{color:"white", fontWeight:"bold"}}htmlFor="exampleFormControlInput1" className="form-label"><h4>Eating Habits</h4></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="eatingHabits"onChange={handleChange}style={{ backgroundColor: mode === "white" }}/>
</div>

</div>
<div className="button1" style={{marginTop:"70px"}} >
<button type="button" className="btn btn-primary" onClick = {handleClick}>Add a Dairy</button>
</div>
</div>


</>
  )
}

export default AddDairy