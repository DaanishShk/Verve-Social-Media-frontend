import "./css/LoginCard.css";

import React, {useContext, useState} from 'react';

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import {Link} from "react-router-dom";
import LoginInput from "./LoginInput";

function LoginCard() {

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const {setIsAuth, setUser, baseUrl} = useContext(AuthContext)

    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [disabledError, setDisabledError] = useState("")
    
    const loginHandle = () => {
        if(!username) {
          setUsernameError("Cannot be empty")
          setPasswordError("");
          return;
        }

        if (!password) {
           setUsernameError("");
          setPasswordError("Cannot be empty");
          return;
        }
      
        getToken();
    }

    async function getToken() {
        let response = await fetch(`${baseUrl}/auth/token`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',           // without this cannot send anything other than plain text
            body:JSON.stringify({username, password})
        })
        const status = response.status
        response = await response.json();
        console.log(response);
         
        if (status >= 400) {
          handleError(response)
          return;
        }
        
        if(response) {       // change the condition with response to status code
          console.log(response);
          setUser(response);           // don't store stringified user
          response = JSON.stringify(response);     
          if (rememberMe === true) localStorage.setItem("user", response);
          else sessionStorage.setItem("user", response);
         
          setIsAuth(true);         
        }            
        // navigate("/")
    }

    const handleError = (error) => {
      const message = error.message;
      
      if(/username/i.test(message)) {
        setUsernameError(message)
        setPasswordError("")
        setDisabledError("")
      } else if(/password/i.test(message)) {
        setUsernameError("");
        setPasswordError(message);
        setDisabledError("");
      } else if (/disabled/i.test(message)) {
        setUsernameError("");
        setPasswordError("");
        setDisabledError("Account is not activated");
      }
    }

    console.log("rerendering login")
    
    return (
      <div className="loginCard">
        <h1>Login</h1>
        <LoginInput
          type="text"
          field="Username"
          value={username}
          setValue={setUsername}
          error={usernameError}
          className={"loginCard__input"}
        />
        <LoginInput
          type="password"
          field="Password"
          value={password}
          setValue={setPassword}
          error={passwordError}
          className={"loginCard__input"}
        />

        <div className="loginCard__rememberMe">
          <input
            type="checkbox"
            name=""
            id="remember-me"
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <span>{disabledError}</span>
        <button onClick={() => loginHandle()}>Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="loginCard__nav">
            Signup
          </Link>
        </p>
      </div>
    );
}

export default LoginCard
