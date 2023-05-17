import React from 'react';
import { useContext } from 'react';
import dairyContext from './Context/dairyContext';

const Alert = (props) => {
  const context = useContext(dairyContext)
  const {alert} = context
  const capital = (word)=>{
      let capitalize = word.toLowerCase();
       return capitalize.charAt(0).toUpperCase() + capitalize.slice(1)
  };
  return (
    <div>
{alert &&(
    <div  className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert">
    
         <strong>{capital(alert.type)}</strong> : <strong>{alert.msg}</strong>
</div>
)}
  
  </div>
  )
}

export default Alert