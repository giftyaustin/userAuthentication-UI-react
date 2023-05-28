import React from 'react';
import Login from "./Login"
import Signup from "./Signup"
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'

const Auth = () => {
  const history = useNavigate()
  
  
 
  return (
    <div>
      <AuthContext.Provider value={{history}}>
          
          <Routes>
            <Route exact path='/login' element= {<Login/>}/>
            <Route exact path='/signup' element= {<Signup/>}/>
          </Routes>
         

      </AuthContext.Provider>
    </div>
  )
}

export default Auth
