import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dairynote from './dairynote2.jpg'
import { Link } from 'react-router-dom'
import logo from './LogoDairy.jpg'
import { useContext } from 'react'
import dairyContext from './Context/dairyContext'


const Signup = () => {
const context = useContext(dairyContext)
const {showAlert} = context
const navigate = useNavigate()
const port = 'http://localhost:4000'
const [details, setDetails] = useState({name: "", email: "", password: ""})

const handleChange = (event) =>{
setDetails({...details, [event.target.name]: event.target.value})
}

const handleClick = async (e) =>{
e.preventDefault();
const response = await fetch(`${port}/createuser`, {
method: 'POST',
headers: {
    'Content-Type': "application/json"
},

body: JSON.stringify({name:details.name, email:details.email, password:details.password})

})
const json = await response.json()
console.log(json)
if(json.authToken){
    navigate('/login')
    showAlert("Registered successfully", "success")
}else{
    prompt('Internal Error')
    showAlert("Registration Aborted", "failure")
}

}
  return (
<div className="container11" style={{height:"250vh"}}>
<div>
  <h3 style={{color:"yellow", fontWeight:"bold", position:"relative", right:"450px", top:"20px"}}>ThoughtBubble.AI</h3>
  <img style={{width:"70px", height:"70px", position:"relative", right:"622px", bottom:"35px"}} src={logo} alt="Logo"></img>
</div>
<div className="title" style={{paddingTop:"61px"}}>
  <h2 style={{color:"white", fontWeight:"bold"}}>IMAGINE A PLACE...</h2>
</div>
<div className="my-4" style={{color:"white", width:"1120px", margin:"auto"}}>
  ...where you can keepsafe your daily thoughts on cloud, a dairy note making application, ThoughtBubble with which you can keep track your daily activities and access it whenever you like to see whether you were according your desired routine that day.A place that make easy for you to remember the good events happened and important events to follow up.
</div>
<div>
  <img className="my-4"src={dairynote} alt="Dairy"></img>
</div>

<div className="my-4">
  <h2 style={{color:"white", fontWeight:"bold"}}>Register yourSelf Now !</h2>
</div>



    <div className="my-4" style={{width:"700px", lineHeight:"3rem", margin:"auto"}}>
<div class="mb-3">
  <label style={{color:"white", fontWeight: "bold"}}for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="name" name="name"onChange={handleChange}/>
</div>
<div>
  <label style={{color:"white", fontWeight: "bold"}}for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" name="email"onChange={handleChange}/>
</div>
<div>
<label style={{color:"white", fontWeight: "bold"}}for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" name="password"aria-labelledby="passwordHelpBlock" onChange={handleChange}></input>
</div>

<div className="my-4"><button type="button" class="btn btn-primary" onClick = {handleClick}>Create Account</button></div>

<div style={{ fontWeight: "bold"}}>
  <Link to="/login" style={{color:"white"}}>Already Registered? Click here to login!</Link>
</div>

<div className="my-4">

</div>











    </div>
    </div>
  )
}

export default Signup