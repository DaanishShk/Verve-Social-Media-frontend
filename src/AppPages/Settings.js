import "./css/Settings.css"

import {Navigate, Route, Routes} from "react-router-dom"

import CardSettings from "../Components/Settings/CardSettings"
import ProfileMainSettings from "../Components/Settings/ProfileMainSettings"
import React from 'react'
import SecuritySettings from "../Components/Settings/SecuritySettings"
import SettingsGeneral from "../Components/Settings/SettingsGeneral"
import SettingsSidebar from "../Components/Settings/SettingsSidebar"

function Settings() {
    return (
      <div className="settings">
        <SettingsSidebar />
        <div className="settings__pages">
          <Routes>
            <Route path="general" element={<SettingsGeneral />} />
            <Route path="security" element={<SecuritySettings />} />
            <Route path="card" element={<CardSettings />} />
            <Route path="main" element={<ProfileMainSettings />} />
            <Route path="" element={<Navigate to="general" />} />
          </Routes>
        </div>
      </div>
    );
}

export default Settings
