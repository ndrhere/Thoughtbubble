import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleLogout = () =>{
   navigate('/login')

  }

  const loggedIn = !['/login', '/'].includes(location.pathname)
  // const context = useContext(dairyContext)
  // const {modeChanger} = context;
  return (
    <div>
        <>
        {loggedIn && 
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark --bs-bg-opacity: 0.8;`}>
  <div className="container-fluid" style={{color:'white'}}>
    <Link className="navbar-brand" to="/home">Dairy.AI</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home"><h5>Home</h5></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><h5 className="mx-4">Your Dairies</h5></Link>
        </li>
       
        
      </ul>

       <div>
        <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
      {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick= {modeChanger} /> */}
  {/* <label className="form-check-label" for="flexSwitchCheckDefault" >Enable Dark Mode</label> */}
{/* </div> */}
    </div>
  </div>
</nav>}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    </div>
  )
}

export default Navbar