import "./css/Header.css"

import {
  AiFillRedditCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import React, { useContext, useRef, useState } from "react"

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import {
  BsFillPeopleFill,
} from "react-icons/bs";
import HeaderDropdown from "./HeaderDropdown";
import {IoIosArrowDown} from "react-icons/io"
import {IoNewspaper} from "react-icons/io5"
import {Link} from "react-router-dom"
import ProfilePic from "../Reusable/ProfilePic";

// Faced some problems with icon styling and classnames
// Used wrapper for header centering
// Profile pic prop for sizing not added

function Header() {

  const [picHover, setPicHover] = useState(false);
  const [dropHover, setDropHover] = useState(false);

  const {baseUrl, user} = useContext(AuthContext)
  
  // look closely at how the timeout problem was handled, timeoutId might be different on rerender but because of closure it works
  const timeoutId = useRef(null);
  
  const picHoverHandle = () => {
    setPicHover(true)
    if(timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    } 
  };
  
  const picOutHandle = () => {
    timeoutId.current = setTimeout(() => setPicHover(false), 100);
  }


  // console.log(timeoutId); 
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <div className="header__logoTitle">
            <AiFillRedditCircle className="logoTitle__logo" />
            <h3>Verve</h3>
          </div>
        </Link>

        {/* <div className="header__search">
          <AiOutlineSearch className="search__magnify" />
          <input placeholder="Search social media" />
        </div> */}

        <div className="header__user">
          <Link to="/createpost">
            <AiOutlinePlusCircle className="user__icon" />
          </Link>
          <Link to="/">
            <IoNewspaper className="user__icon" />
          </Link>
          <Link to="/relations">
            <BsFillPeopleFill className="user__icon" />
          </Link>
          {picHover || dropHover ? (
            <div
              className="header__user--drop"
              onMouseEnter={() => setDropHover(true)}
              onMouseLeave={() => setDropHover(false)}
            >
              <HeaderDropdown />
            </div>
          ) : null}
          <div
            className="header__user--hover"
            onMouseOver={picHoverHandle}
            onMouseOut={picOutHandle}
          >
            <div className="header__user--text">
              <IoIosArrowDown />
              <span>{user.account.username}</span>
            </div>
            <ProfilePic
              size="30px"
              imgUrl={`${baseUrl}/images/${user.account.username}/profilepic`}
              isClickable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
