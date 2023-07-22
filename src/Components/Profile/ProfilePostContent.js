import "./css/ProfilePostContent.css";

import React from "react";

function ProfilePostContent({ content, type }) {
  return (
    <div className="profilePostImage">
      {type === "IMAGE" ? (
        <img src={content} alt="" />
      ) : type === "VIDEO" ? (
        <div className="video profilePost__video">
          <iframe
            src={content + "?autoplay=0"}
            title="video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : type === "TEXT" ? (
        <p className="profilePost__text">{content}</p>
      ) : null}
    </div>
  );
}

export default ProfilePostContent;
