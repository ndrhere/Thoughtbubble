import DairyContext from "./dairyContext";
import React from "react";
import { useState } from "react";

// import {useParams} from "react-router-dom";

const DairyState = (props) => {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
  })
  setTimeout(()=>{
   setAlert(null)
  }, 2000)
};

  const [mode, setMode] = useState('light')

  const modeChanger = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "rgba(52,53,65,1)";
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white";
    }
  }
  // const {id} = useParams()
  const port = "http://localhost:4000";
  const [dairies, setDairies] = useState([]);

  const fetchDairy = async () => {
    const response = await fetch(`${port}/fetchalldairies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-Token": localStorage.getItem("token"),
      },
    });

    const json = await response.json()
    
    setDairies(json)
  };


  const addDairy = async (day, ImportantEvents, favouritepersonoftheDay, eatingHabits, wakingTime, sleepingTime, ) => {

  const response =  await fetch(`${port}/adddairy`, {
    method: "POST",
    headers: {
       "Content-Type": "application/json",
       "auth-Token": localStorage.getItem("token")
    },
    body: JSON.stringify({day, ImportantEvents, favouritepersonoftheDay, eatingHabits, wakingTime, sleepingTime})

   
})

const json = await response.json()
setDairies(dairies.concat(json))

  }


const updateDairy = async (id, day, ImportantEvents, favouritepersonoftheDay, eatingHabits, wakingTime, sleepingTime) =>{
 
const response = await fetch(`${port}/updateDairy/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "auth-Token": localStorage.getItem('token')
  },
  body: JSON.stringify({day, ImportantEvents, favouritepersonoftheDay, eatingHabits, wakingTime, sleepingTime})
  //here we write day, ImportantEvents, favouritepersonoftheDay and so on directly because we have given all this in our paranthesis and thus we can use them directly in the other variables of the functions as well using destructuring //
})

const json = await response.json()
//Q. How is newDairy an array ? It must be an object. Right becuse JSON.parse changes a javaScript string into an object. Right ?
//JSON.parse changes a javaScript string back to an array of object. when we are getting data as response.json() we are actually getting it in json() format which is an array of object.

setDairies(json)

const newDairy = JSON.parse(JSON.stringify(dairies))
for(let index=0; index<newDairy.length;index++){
  const element = newDairy[index]
  if(element._id === id){
    newDairy[index].day = day;
    newDairy[index].ImportantEvents = ImportantEvents;
    newDairy[index].favouritepersonoftheDay = favouritepersonoftheDay;
    newDairy[index].eatingHabits = eatingHabits;
    newDairy[index].wakingTime = wakingTime;
    newDairy[index].sleepingTime = sleepingTime;
    break;
    }
  
}
    setDairies(newDairy);
}

const deleteDairy = async (id) =>{
  console.log("Deleting the dairy with id", id);
  const response = await fetch(`${port}/deletedairy/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-Token": localStorage.getItem('token')
    }
  })

  
  const json = await response.json()
   
   console.log("Deleting the dairy with id"+  id)
   console.log(json)
   

   const newDairy = dairies.filter((element)=>{
   return element._id !== id
   })
   setDairies(newDairy)
   showAlert("Dairy deleted successfully", "success")
}









  return (
    <div>
      <DairyContext.Provider value = {{addDairy, fetchDairy, dairies, deleteDairy, updateDairy, mode, modeChanger, alert, showAlert}}>
        
        {props.children}
      </DairyContext.Provider>
    </div>
  );
};

export default DairyState;
