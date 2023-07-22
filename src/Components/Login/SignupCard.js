import "./css/SignupCard.css";

import React, { useState } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import { Link } from "react-router-dom";
import LoginInput from "./LoginInput";
import SignupCardSecurity from "./SignupCardSecurity";
import { useContext } from "react";

// Have left the classnames same as loginCard since requires same styling

function SignupCard() {
  const { baseUrl } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [cardState, setCardState] = useState(1);

  const nextHandle = () => {
    usernameAndEmailCheck();
  };

  async function usernameAndEmailCheck() {
    if (username.length < 5) {
      setUsernameError("Username too short");
      setEmailError("");
      return;
    }

    if (/\W/.test(username) || /\s/.test(username)) {
      setUsernameError("Cannot contain special characters");
      setEmailError("");
      return;
    }

    // add username checks

    let response = await fetch(`${baseUrl}/accounts?username=${username}`);
    response = await response.json();
    console.log(response);

    if (!response.valid) {
      setUsernameError("Username already exists");
      setEmailError("");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setUsernameError("");
      setEmailError("Email is invalid");
    } else {
      setCardState(2);
    }
  }

  if (cardState === 2)
    return <SignupCardSecurity username={username} email={email} />;

  return (
    <div className="loginCard signupCard">
      <div className="signupCard__header">
        <h1>Signup</h1>
        <div className="signupCard__header--right">
          <div className="signupCard__header--state">
            <p className="signupCard__header--num signupCard__header--active">
              1
            </p>
            <p>Basic details</p>
          </div>
          <div className="signupCard__header--state">
            <p className="signupCard__header--num">2</p>
            <p>Security</p>
          </div>
        </div>
      </div>
      <LoginInput
        type="text"
        field="Username"
        value={username}
        setValue={setUsername}
        error={usernameError}
        className={"loginCard__input signupCard__input"}
        info={"Should be 5-20 characters long with no special characters"}
      />
      <LoginInput
        type="text"
        field="Email"
        value={email}
        setValue={setEmail}
        error={emailError}
        className={"loginCard__input signupCard__input"}
        info={"A verification link will be sent to the above address"}
        maxLength={40}
      />

      <button id="signupCard__next" onClick={() => nextHandle()}>
        Next
      </button>
      <p>
        Have an account?{" "}
        <Link to="/login" className="loginCard__nav signupCard__nav">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupCard;
