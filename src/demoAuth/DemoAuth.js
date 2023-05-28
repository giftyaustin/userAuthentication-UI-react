import React from 'react';
import DemoLogin from './DemoLogin';
import DemoSignup from './DemoSignup';
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

const Auth = () => {
  const history = useNavigate()
  
  
 
  return (
    <div>
      
          
          <Routes>
            <Route exact path='/login' element= {<DemoLogin/>}/>
            <Route exact path='/signup' element= {<DemoSignup/>}/>
          </Routes>
         

    
    </div>
  )
}

export default Auth