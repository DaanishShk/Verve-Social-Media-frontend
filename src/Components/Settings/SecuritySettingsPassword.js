import React, { useState } from 'react'

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsShieldLock } from 'react-icons/bs';
import SettingsInput from './SettingsInput'
import SettingsSaved from './SettingsSaved';
import passwordChecks from '../Login/passwordChecks';

function SecuritySettingsPassword({securitySettingsHandle}) {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    const [newPasswordError, setNewPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [count, setCount] = useState(0)

    const passwordHandle = () => {
      if (newPassword.length < 8) {
        setNewPasswordError("Password is too short");
        setConfirmPasswordError("");
        return;
      }

      const obj = passwordChecks(newPassword);
      if (!obj.pass) {
        setNewPasswordError(obj.message);
        setConfirmPasswordError("");
        return;
      } else if (newPassword !== confirmPassword) {
        setNewPasswordError("");
        setConfirmPasswordError("Passwords do not match");
        return;
      } else if(password === "") {
        setNewPasswordError("");
        setConfirmPasswordError("");
        setPasswordError("Cannot be empty")
        return
      }
      setNewPasswordError("");
      setConfirmPasswordError("");
      sendRequest();
    };

    async function sendRequest() {
      const { status } = await securitySettingsHandle("password", {
        newPassword,
        confirmPassword,
        password,
      }); 
      if (status === 401) {
        setPasswordError("Password does not match");
      } else if(status === 200) {
        setPasswordError("");
        setCount(count+1)
      }
    }
    
    return (
      <div className="settingsGeneral__wrapper">
        <div className="settingsGeneral__fields">
          <div className="securitySettings__group">
            <SettingsInput
              name="New password"
              type="password"
              value={newPassword}
              setValue={setNewPassword}
              error={newPasswordError}
            />
            <SettingsInput
              name="Confirm password"
              type="password"
              instruction=""
              value={confirmPassword}
              setValue={setConfirmPassword}
              error={confirmPasswordError}
            />
          </div>
          <div className="securitySettings__group">
            <SettingsInput
              name="Current password"
              type="password"
              instruction="* To confirm changes, please enter your password"
              value={password}
              setValue={setPassword}
              error={passwordError}
            />
            <div className="securitySettings__submit">
              <button
                type="submit"
                className="securitySettings__button"
                onClick={() => passwordHandle()}
              >
                <BsShieldLock style={{ fontSize: "1.6rem" }} />
                <span>Save changes</span>
              </button>
              <SettingsSaved count={count}/>
            </div>
          </div>
        </div>
        <div className="securitySettings__instructions">
          <div className="instructions__header">
            <AiOutlineInfoCircle />
            <span>Password instructions</span>
          </div>
          <ol>
            <li>Should contain 10-25 characters</li>
            <li>
              Should contain an uppercase character, lowercase character, digit,
              and special character
            </li>
          </ol>
        </div>
      </div>
    );
}

export default SecuritySettingsPassword
