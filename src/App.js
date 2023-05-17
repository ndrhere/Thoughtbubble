import './App.css';
import DairyState from './Context/dairyState';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Alert from './Alert';

function App() {
  return (
    <div className="App">
    
    <DairyState>
      <Router>
        
    <Navbar/>
    <Alert/>
   
    

   <Routes>


  <Route exact path = '/home' element = {<Home/>}></Route>
  <Route exact path = '/about' element = {<About/>}></Route>
  <Route exact path = '/login' element = {<Login/>}></Route>
  <Route exact path = '/' element = {<Signup/>}></Route>



   </Routes>






    </Router>
    </DairyState>
    </div>
  );
}

export default App;
