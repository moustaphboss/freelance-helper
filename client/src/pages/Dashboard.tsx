import React from 'react'
import { useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  
  const handleLogout = async () => {
    navigate("/signup");
    console.log("Logout attempt");
    
  }
  return (
    <div>
      <h1 className="text-xl font-semibold mb-7">Dashboard</h1>
      <button className="border border-slate-300 px-8 rounded-full py-5" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard