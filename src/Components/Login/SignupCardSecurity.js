import "./css/SignupCardSecurity.css";

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import LoginInput from "./LoginInput";
import passwordChecks from "./passwordChecks";
import { useContext } from "react";

function SignupCardSecurity({ username, email }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { baseUrl } = useContext(AuthContext);

  const signupHandle = () => {
    if (password.length < 8) {
      setPasswordError("Password is too short");
      setConfirmPasswordError("");
      return;
    }

    const obj = passwordChecks(password);
    if (!obj.pass) {
      setPasswordError(obj.message);
      setConfirmPasswordError("");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("");
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    console.log(JSON.stringify({ username, email, password }));
    registerUser();
  };

  async function registerUser() {
    let res = await fetch(`${baseUrl}/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    console.log(res);
    // res = await res.json();
    // console.log(res);
    navigate("/login");
  }

  return (
    <div className="loginCard signupCard signupCardSecurity">
      <div className="signupCard__header">
        <h1>Signup</h1>
        <div className="signupCard__header--right">
          <div className="signupCard__header--state">
            <p className="signupCard__header--num ">1</p>
            <p>Basic details</p>
          </div>
          <div className="signupCard__header--state">
            <p className="signupCard__header--num signupCard__header--active">
              2
            </p>
            <p>Security</p>
          </div>
        </div>
      </div>

      <input
        type="text"
        id="username"
        value={username}
        style={{ display: "none" }}
      />

      <LoginInput
        type="password"
        field="Password"
        value={password}
        setValue={(val) => setPassword(val.trim())}
        error={passwordError}
        className={"loginCard__input signupCard__input"}
        info={
          "Should be 8-20 characters long. Must contain an uppercase and a special character \n "
        }
      />
      <LoginInput
        type="password"
        field="Confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        error={confirmPasswordError}
        className={"loginCard__input signupCard__input"}
      />
      <span style={{ backgroundColor: "transparent" }}>
        An activation link will be sent to your email
      </span>
      <button onClick={() => signupHandle()}>Signup</button>
      <p>
        Have an account?{" "}
        <Link to="/login" className="loginCard__nav signupCard__nav">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupCardSecurity;
