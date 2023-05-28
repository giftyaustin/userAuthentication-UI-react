import React , {  useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom';

const DemoSignup = () => {
    const history = useNavigate();
    const [dRDetails, setDRDetails] = useState({email : null, rfullName  : null, rPassword : null})
 const changeInput = (e)=>{
 
        setDRDetails(prev => ({...prev, [e.target.name]:e.target.value?e.target.value:null}))
    }


    const handleSignup = async()=>{
        if(dRDetails.email ===null || dRDetails.rfullName===null || dRDetails.rPassword===null){
            alert("Enter all fields")
        }
      
        else{
           
            const userData = {"email": dRDetails.email,"fullName": dRDetails.rfullName,"password": dRDetails.rPassword}
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            };
            const response = await fetch("http://localhost:5000/demo/signup", requestOptions)
            const res = await response.json()
            if(res.authorized===true){
               localStorage.setItem("at", res.accessToken)
               localStorage.setItem("rt", res.refreshToken)
               history("/user/dashboard")
            }
            else{
                alert(res.message + ", try signing in")
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
            
                <input type="email" placeholder='Enter email' name = "email" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            <div className="username-i-h mb-3">
              
                <input type="text" placeholder='Enter full name' name = "rfullName" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            <div className="username-i-h mb-3">
                <input type="text" placeholder='Create password' name = "rPassword" className='username-i' onChange={(e)=>{changeInput(e)}}/>
            </div>
            
            </div>
          
           
            <div className='line mb-3'></div>
            <div className='login-btn-h d-flex justify-content-center '>
                <button className="login-btn d-inline-block w-100" onClick={handleSignup}>Sign up</button>
            </div>
            <div className="no-account-h my-3 pt-3">
                <p className='no-account-text d-inline-block w-50 text-center'>Have an account?</p>
                <button className='d-inline-block w-25 nc-signup-btn' onClick={()=>{
                  history('/demo/login')
                }}>Login</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DemoSignup;
