import React, { useState } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import { BsShieldLock } from "react-icons/bs";
import SettingsInput from "./SettingsInput";
import SettingsSaved from "./SettingsSaved";
import { useContext } from "react";

function SecuritySettingsBasic({ account, securitySettingsHandle }) {
  const { baseUrl, user, setUser } = useContext(AuthContext);

  const [username, setUsername] = useState(account.username);
  const [email, setEmail] = useState(account.email);
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [count, setCount] = useState(0);

  const basicDetailsHandle = () => {
    basicDetailsCheck();
  };

  async function basicDetailsCheck() {
    if (username.length < 5) {
      setUsernameError("Username too short");
      setEmailError("");
      return;
    }

    if (/\W/.test(username) || /\s/.test(username)) {
      setUsernameError("Cannot contain spaces or special characters");
      setEmailError("");
      return;
    }
    setUsernameError("");
    // add username checks

    let response = await fetch(`${baseUrl}/accounts?username=${username}`);
    response = await response.json();
    console.log(response);

    if (!response.valid && user.account.username !== username) {
      setUsernameError("Username already exists");
      setEmailError("");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setUsernameError("");
      setEmailError("Email is invalid");
    } else if (password === "") {
      setUsernameError("");
      setEmailError("");
      setPasswordError("Cannot be empty");
      return;
    } else {
      setUsernameError("");
      setEmailError("");
      sendRequest();
    }
  }

  async function sendRequest() {
    const { res, status } = await securitySettingsHandle("basic", {
      username,
      email,
      password,
    });
    if (status === 401) {
      setPasswordError("Password does not match");
    } else {
      setPasswordError("");
      setCount(count + 1);
      console.log("Changing local storage contents");
      console.log(res);
      localStorage.clear();
      sessionStorage.setItem("user", JSON.stringify(res));
      setUser(res);
    }
  }

  return (
    <div className="settingsGeneral__wrapper">
      <div className="settingsGeneral__fields">
        <div className="securitySettings__group">
          <SettingsInput
            name="Username"
            type="text"
            value={username}
            setValue={setUsername}
            error={usernameError}
          />
          <SettingsInput
            name="Email"
            type="email"
            instruction="* For verification and forgot password"
            value={email}
            setValue={setEmail}
            error={emailError}
          />
        </div>
        <div className="securitySettings__group">
          <SettingsInput
            name="Current password"
            type="text"
            instruction="* To confirm changes, please enter your password"
            value={password}
            setValue={setPassword}
            error={passwordError}
          />
          <div className="securitySettings__submit">
            <button
              type="submit"
              className="securitySettings__button"
              onClick={() => basicDetailsHandle()}
            >
              <BsShieldLock style={{ fontSize: "1.6rem" }} />
              <span>Save changes</span>
            </button>
            <SettingsSaved count={count} />
          </div>
        </div>
      </div>
      <div className="securitySettings__instructions">
        <div className="instructions__header">
          <AiOutlineInfoCircle />
          <span>Username instructions</span>
        </div>
        <ol>
          <li>Should contain 5-20 characters</li>
          <li>Cannot contain spaces or special characters</li>
        </ol>
      </div>
    </div>
  );
}

export default SecuritySettingsBasic;
