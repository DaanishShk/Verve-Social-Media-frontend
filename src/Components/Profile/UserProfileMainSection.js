import "./css/UserProfileMainSection.css";

import Follow from "./Follow";
import React from 'react';
import UserProfileFriends from "./UserProfileFriends";
import UserProfileStats from "./UserProfileStats";

// Have made this .css mistake several times :(



function UserProfileMainSection({profile, followStatus, friendStatus, postsLen, likes, comments, friends}) {


    return (
      <div className="userProfile__mainSection">
        <div className="mainSection__header">
          <h1>{profile.account.displayName}'s Profile</h1>
          <Follow account={profile.account} followStatus={followStatus}/>
        </div>
        <div className="mainSection__stats">
          <UserProfileStats postsLen={postsLen} likes={likes} comments={comments}/>
        </div>
        <div className="mainSection__aboutMe">
          <h3>About me</h3>
          <p>{profile.aboutMe}</p>
        </div>
        <UserProfileFriends account={profile.account} friendStatus={friendStatus} friends={friends}/>
      </div>
    );
}

export default UserProfileMainSection
