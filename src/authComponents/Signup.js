import React, { useEffect } from 'react';
import { useContext , useState} from 'react';
import { AuthContext } from './AuthContext';

import "./login.css"

const Signup = () => {
  const {history} = useContext(AuthContext);
  const [rDetails, setRDetails] = useState({email : null, rUsername  : null, rPassword : null})

  const changeInput = (e)=>{
 
      setRDetails(prev => ({...prev, [e.target.name]:e.target.value?e.target.value:null}))
  }


  return (<><div className='text-center'><h4 className='text-center demo-text'>Secure</h4></div>
    <div className='d-flex justify-content-center align-items-center '>
      <div className="loginbox d-flex align-items-center justify-content-center">
        
        <div className="login-outline d-inline-block w-50">
            <div className="light-point"></div>
            

           
            <div className='credentials_h'>
            
            <div className="username-i-h mb-3">
            
                <input type="email" placeholder='Enter email' name = "email" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            <div className="username-i-h mb-3">
              
                <input type="text" placeholder='Create username' name = "rUsername" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            <div className="username-i-h mb-3">
                <input type="text" placeholder='Create password' name = "rPassword" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            
            </div>
          
           
            <div className='line mb-3'></div>
            <div className='login-btn-h d-flex justify-content-center '>
                <button className="login-btn d-inline-block w-100">Sign up</button>
            </div>
            <div className="no-account-h my-3 pt-3">
                <p className='no-account-text d-inline-block w-50 text-center'>Have an account?</p>
                <button className='d-inline-block w-25 nc-signup-btn' onClick={()=>{
                  history('/auth/login')
                }}>Login</button>
            </div>
        </div>
      </div>
    </div></>
  )
}

export default Signup
