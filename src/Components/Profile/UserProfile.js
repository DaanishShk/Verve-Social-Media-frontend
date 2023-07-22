import "./css/UserProfile.css";

import Activity from "./Activity";
import React from 'react'
import UserCard from './UserCard';
import UserProfileMainSection from './UserProfileMainSection';

function UserProfile({profile, profilPicUrl, backgroundUrl, followStatus, friendStatus, stats, friends, activityComments}) {


    return (
      <div className="userProfile">
        <img src={backgroundUrl} alt="background" onError={(e) => {
          e.target.src = "/default_background.jpg"
        }}/>
        <div className="userProfile__wrapper">
          <div className="userProfile__cards">
            <UserCard
              imgUrl={profilPicUrl}
              description={profile.description}
              displayName={profile.account.displayName}
              username={profile.account.username}
              isPicClickable={false}
              numberFollowers={profile.numberFollowers}
              numberFollowing={profile.numberFollowing}
            />
            <Activity
              activityComments={activityComments}
              links={profile.links}
            />
          </div>
          <UserProfileMainSection
            profile={profile}
            followStatus={followStatus}
            friendStatus={friendStatus}
            postsLen={stats.totalPosts}
            likes={stats.totalLikes}
            comments={stats.totalComments}
            friends={friends}
          />
        </div>
      </div>
    );
}

export default UserProfile
