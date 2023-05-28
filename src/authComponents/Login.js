import React from 'react';
import "./login.css";
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

const Login = () => {
  const {history} = useContext(AuthContext)
  return (<div className='decorate'><div className='text-center'><h4 className='text-center demo-text'>Secure</h4></div>
    <div className='d-flex justify-content-center align-items-center '>
      <div className="loginbox d-flex align-items-center justify-content-center">
        <div className="login-outline d-inline-block w-50">
            <div className="light-point"></div>     
            
            <div className='credentials_h'>
            <div className="username-i-h mb-3">
                <input type="text" placeholder='username' className='username-i'/>
            </div>
            <div className="username-i-h mb-3">
                <input type="text" placeholder='password' className='username-i'/>
            </div>
            </div>
           
            <div className='line mb-3'></div>
            <div className='login-btn-h d-flex justify-content-center '>
                <button className="login-btn d-inline-block w-100">Login</button>
            </div>
            <div className="no-account-h my-3 pt-3">
                <p className='no-account-text d-inline-block w-50 text-center'>No account?</p>
                <button className='d-inline-block w-25 nc-signup-btn' onClick={()=>{
                  history('/auth/signup')
                }}>Signup</button>
            </div>
        </div>
      </div>
    </div></div>
  )
}

export default Login
