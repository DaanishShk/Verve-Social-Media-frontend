import "./css/SettingsSidebar.css"

import { BsPinAngle, BsShield } from "react-icons/bs";

import {FaIdCardAlt} from "react-icons/fa"
import {GrUserSettings} from "react-icons/gr"
import {IoSettingsOutline} from "react-icons/io5"
import { Link } from "react-router-dom";
import React from 'react'
import {RiArticleLine} from "react-icons/ri"

// Don't use left:0 as that is always true, use top to get it moving with the page 
function SettingsSidebar() {
    return (
      <div className="settingsSidebar">
        <div className="settingsSidebar__header">
          <h2>Settings</h2>
          <IoSettingsOutline style={{ fontSize: "2.4rem"}} className="settingsSidebar__header--icon"/>
        </div>
        <div className="settingsSidebar__section">
          <h4>Account</h4>
          <Link to="/settings/general" style={{ textDecoration: "none" }}>
            <button>
              <GrUserSettings />
              <span>General</span>
            </button>
          </Link>
          <Link to="/settings/security" style={{ textDecoration: "none" }}>
            <button>
              <BsShield />
              <span>Security</span>
            </button>
          </Link>
        </div>
        <div className="settingsSidebar__section">
          <h4>Profile</h4>
          <Link to="/settings/card" style={{ textDecoration: "none" }}>
            <button>
              <FaIdCardAlt />
              <span>Card</span>
            </button>
          </Link>

          <Link to="/settings/main" style={{ textDecoration: "none" }}>
            <button>
              <RiArticleLine />
              <span>Main</span>
            </button>
          </Link>

          {/* <Link to="/settings/pinned" style={{ textDecoration: "none" }}>
            <button>
              <BsPinAngle />
              <span>Pinned</span>
            </button>
          </Link> */}
        </div>
      </div>
    );
}

export default SettingsSidebar
