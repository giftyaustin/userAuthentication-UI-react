import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  return (
    <div className="home-decorate">
      <div className="btn-h d-flex justify-content-center">
        <button className="demo"  onClick={()=>{history("/demo/login")}}>Demo</button>
        <div className="separator"></div>
        <button className="demo" onClick={()=>{history("/auth/login")}}>Secure</button>
      </div>
      <p className="info">Secure authentication still in Beta phase</p>
    </div>
  );
};

export default Home;
