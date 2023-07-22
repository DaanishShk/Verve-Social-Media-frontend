import "./css/ProfilePic.css";

import { Link } from "react-router-dom";
import React from "react";

function ProfilePic({ size, imgUrl, username, isClickable=true}) {

  const defaultImage = (e) => {
    e.target.src = "/default_profilePicture.jpg"
  }

  return isClickable ? (
    <Link to={`/${username}`} style={{ textDecoration: "none" }}>
      <div className="profilePic profilePic--clickable">
        <img
          src={imgUrl}
          alt=""
          style={{ height: size, width: size }}
          onError={defaultImage}
        />
      </div>
    </Link>
  ) : (
    <div className="profilePic">
      <img
        src={imgUrl}
        alt=""
        style={{ height: size, width: size }}
        onError={defaultImage}
      />
    </div>
  );
}

export default ProfilePic;
