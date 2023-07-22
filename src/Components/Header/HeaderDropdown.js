import "./css/HeaderDropdown.css"

import React, { useContext } from 'react'

import {AiOutlineSetting} from "react-icons/ai"
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import {RiLogoutBoxRLine} from "react-icons/ri"

function HeaderDropdown() {
  const {user, setIsAuth} = useContext(AuthContext);

  const signoutHandle = () => {
    localStorage.clear()
    sessionStorage.clear()
    setIsAuth(false)
  }
    return (
      <div className="headerDropdown">
        <Link
          to={`/${user.account.username}`}
          style={{ textDecoration: "none" }}
          className="headerDropdown__item"
        >
          <span>My profile</span>
          <HiOutlineUserCircle className="headerDropdown__item--icon" />
        </Link>

        <Link
          to="/settings"
          style={{ textDecoration: "none" }}
          className="headerDropdown__item"
        >
          <span>Settings</span>
          <AiOutlineSetting className="headerDropdown__item--icon" />
        </Link>

        <Link
          to="#"
          style={{ textDecoration: "none" }}
          className="headerDropdown__item"
          onClick={signoutHandle}
        >
          <span>Sign out</span>
          <RiLogoutBoxRLine className="headerDropdown__item--icon" />
        </Link>
      </div>
    );
}

export default HeaderDropdown
