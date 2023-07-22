import "./css/Login.css";

import { Navigate, Route, Routes } from "react-router";

import LoginCard from "../Components/Login/LoginCard";
import LogoName from '../Components/Reusable/LogoName'
import React from 'react'
import SignupCard from "../Components/Login/SignupCard";

function Login() {
    return (
      <div className="login">
        <LogoName />
        <Routes>
          <Route path="/*" element={<Navigate to="/login"/>}/>
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/login" element={<LoginCard />} />
        </Routes>
      </div>
    );
}
// pay close attention to how the default route is set up


export default Login
