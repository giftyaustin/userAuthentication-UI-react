import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const history = useNavigate();
  const [message, setMessage] = useState();
  const [authorized, setAuthorized] = useState(false);
  const fetchUserDetails = async () => {
    const tokens = {
      accessToken: localStorage.getItem("at"),
      refreshToken: localStorage.getItem("rt"),
    };
    const response = await fetch("http://localhost:5000/demouser", {
      method: "POST",
      body: JSON.stringify(tokens),
      headers: { "content-type": "application/json" },
    });
    const res = await response.json();
    setMessage(res.message);
    setAuthorized(res.authorized);
    if (res.accessToken) {
      localStorage.setItem("at", res.accessToken);
    }
    if (res.authorized === false) {
      setAuthorized(false);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div className="dashboard">
      This is your private dashboard
      {authorized ? (
        <div className="d-flex justify-content-end">
          <button
            className="demo"
            onClick={() => {
              localStorage.removeItem("at");
              localStorage.removeItem("rt");
              history("/demo/login");
            }}
          >
            Log out
          </button>
        </div>
      ) : null}
      <div>Response from API : {message}</div>
      {!authorized ? (
        <div className="text-center">
          <div className="text-center session-exp">Session Expired !!</div>
          <button
            className="demo"
            onClick={() => {
              localStorage.removeItem("at");
              localStorage.removeItem("rt");
              history("/");
            }}
          >
            Home
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
