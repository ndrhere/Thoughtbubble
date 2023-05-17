import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import image from './dairynote3.avif';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import dairyContext from './Context/dairyContext';




const Login = () => {
  const context = useContext(dairyContext);
  const {showAlert} = context;
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({email: "", password: ""})


const handleChange = (event) =>{
setCredentials({...credentials, [event.target.name]: event.target.value})
}

const handleClick = async (e) =>{
e.preventDefault()

const response = await fetch('http://localhost:4000/login', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({email: credentials.email, password: credentials.password})
})

const json = await response.json()
console.log(json)
if(json.authToken){
   localStorage.setItem('token', json.authToken)
   showAlert("Logged In successfully", "success")
   navigate('/home')
}



}

  return (
    <div style={{ height:"120vh", lineHeight:"2rem"}}>
      <div style={{paddingTop: "61px"}}>
<div style={{color:"white", fontWeight:"bold"}}>
  <h2>Login to start your Journey...</h2>
</div>
<div>
  <p style={{color:"white", fontWeight:"bold"}}>...Login to start creating, updating and saving your daily dairies</p>
</div>
    <div className="my-3">
      <img style={{width:"200px", height:"200px"}} src={image} alt="Dairy"></img>
    </div>
<div className="mb-3 my-4" style={{ margin:"auto", width:"700px", lineHeight: "4rem"}}>
  <label style={{color:"white", fontWeight:"bold"}}for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name= "email" onChange={handleChange}/>
  
  <label style={{color:"white", fontWeight:"bold"}}for="inputPassword5" className="form-label">Password</label>
  <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" name="password" onChange={handleChange}></input>
</div>

<div>
<button type="button" className="btn btn-primary my-4" onClick = {handleClick}>Login</button>
</div>


<div>
  <Link to="/" style={{color:"white", fontWeight:"bold"}}>not having an account Yet? Click here to Register!</Link>
</div>



</div>

    </div>
  )
}

export default Login