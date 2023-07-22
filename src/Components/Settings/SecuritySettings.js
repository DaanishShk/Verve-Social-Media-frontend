import "./css/SecuritySettings.css";

import { Auth, AuthContext } from "../../Hooks/Auth/AuthContext";
import React, { useState } from "react";

import SecuritySettingsBasic from "./SecuritySettingsBasic";
import SecuritySettingsPassword from "./SecuritySettingsPassword";
import { useContext } from "react";
import useFetch from "../../Hooks/Fetch/useFetch";

function SecuritySettings() {
  const { user } = useContext(AuthContext);
  const callEndpoint = useFetch(AuthContext);

  const securitySettingsHandle = (location, obj) => {
    return callEndpoint(
      `/settings/security/${location}`,
      "POST",
      JSON.stringify(obj),
      "application/json"
    );
  };

  return (
    <div className="securitySettings">
      <h1>Security</h1>
      <h2>Basic details</h2>
      <SecuritySettingsBasic
        account={user.account}
        securitySettingsHandle={securitySettingsHandle}
      />
      <hr />
      <h2>Password</h2>
      <SecuritySettingsPassword
        securitySettingsHandle={securitySettingsHandle}
      />
    </div>
  );
}

export default SecuritySettings;
