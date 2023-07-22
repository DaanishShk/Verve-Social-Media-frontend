import "./css/FriendsAndFollowingHeader.css";

import { BsFillPeopleFill, BsFillPersonPlusFill } from "react-icons/bs";

import PageNavButton from '../Reusable/PageNavButton';
import React from 'react'

function FriendsAndFollowingHeader({tab, setTab}) {
    return (
      <div className="feedHeader friendsAndFollowingHeader">
        <div className="feedHeader__left">
          <PageNavButton
            Icon={BsFillPeopleFill}
            text="Friends"
            setTab={setTab}
            active={tab === "Friends" ? true : false}
          />
          <PageNavButton
            Icon={BsFillPersonPlusFill}
            text="Following"
            setTab={setTab}
            active={tab === "Following" ? true : false}
          />
        </div>
      </div>
    );
}

export default FriendsAndFollowingHeader
