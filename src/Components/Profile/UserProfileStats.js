import "./css/UserProfileStats.css"

import { FaHeart } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import {MdOutlinePostAdd} from "react-icons/md"
import React from 'react'

function UserProfileStats({postsLen, likes, comments}) {
    return (
      <div className="userProfileStats">
        <div className="userProfileStats__item">
          <MdOutlinePostAdd style={{ color: "#1F6CB0", fontSize: "2.5em" }} />
          <div className="userProfileStats__item--text">
            <span>{postsLen}</span>
            <span>Posts</span>
          </div>
        </div>
        <div className="userProfileStats__item">
          <FaHeart style={{ color: "#F24E1E", fontSize: "2.2em" }} />
          <div className="userProfileStats__item--text">
            <span>{likes}</span>
            <span>Likes</span>
          </div>
        </div>
        <div className="userProfileStats__item">
          <IoChatbubblesOutline style={{ fontSize: "2.4em" }} />
          <div className="userProfileStats__item--text">
            <span>{comments}</span>
            <span>Comments</span>
          </div>
        </div>
      </div>
    );
}

export default UserProfileStats
