import "./css/UserCard.css";


import ProfilePic from "../Reusable/ProfilePic.js"
import React from 'react'

function UserCard({description, imgUrl, displayName, username, numberFollowing, numberFollowers, isPicClickable=true}) {
    return (
      <div className="userCard">
        <div className="userCard__top">
          <ProfilePic
            size="150px"
            imgUrl={imgUrl}
            username={username}
            isClickable={isPicClickable}
          />
          <h2>{displayName}</h2>
        </div>

        <div className="userCard__bottom">
          <p>
            {description}
          </p>
          <div className="userCard__bottom--stats">
            <p>
              Following: <span>{numberFollowing}</span>
            </p>
            <p>
              Followers: <span>{numberFollowers}</span>
            </p>
          </div>
          {/* <div className="userCard__bottom--links">
            <span>Links:</span>
            <div className="userCard__bottom--icons">
              <AiFillInstagram />
              <FaFacebook />
              <FaPinterest />
            </div>
          </div> */}
        </div>
      </div>
    );
}

export default UserCard
