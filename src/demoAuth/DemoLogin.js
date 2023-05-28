import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DemoLogin =  () => {
    const history = useNavigate();
    const [ldetails, setLdetails] = useState({email: null, password: null})

const changeInput = (e) =>{
    setLdetails(prev =>{return ({...prev, [e.target.name]:e.target.value?e.target.value:null})})
}

const handleLogin = async ()=>{
  if(ldetails.email===null || ldetails.password ===null){
    alert("Enter all fields")
  }
  else{
    const userData = {email:ldetails.email, password:ldetails.password}
    const reqOptions = {
      method: "POST",
      headers: {"content-type":"application/json"},
      body : JSON.stringify(userData)
    }
    const response = await fetch("http://localhost:5000/demo/login", reqOptions);
    const res = await response.json()
    if(res.authorized){
      localStorage.setItem("at",res.accessToken)
      localStorage.setItem("rt",res.refreshToken)
      history("/user/dashboard")
    }
  }
}

  return (
    <div><div className='text-center'><h4 className='text-center demo-text'>Demo</h4></div>
          <div className='d-flex justify-content-center align-items-center '>
      <div className="loginbox d-flex align-items-center justify-content-center">
        <div className="login-outline d-inline-block w-50">
            <div className="light-point"></div>
            
            <div className='credentials_h'>
            <div className="username-i-h mb-3">
                <input type="text" placeholder='email' name="email" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            <div className="username-i-h mb-3">
                <input type="password" placeholder='password' name="password" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            </div>
           
            <div className='line mb-3'></div>
            <div className='login-btn-h d-flex justify-content-center '>
                <button className="login-btn d-inline-block w-100" onClick={handleLogin}>Login</button>
            </div>
            <div className="no-account-h my-3 pt-3">
                <p className='no-account-text d-inline-block w-50 text-center'>No account?</p>
                <button className='d-inline-block w-25 nc-signup-btn' onClick={()=>{
                  history('/demo/signup')
                }}>Signup</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DemoLogin
