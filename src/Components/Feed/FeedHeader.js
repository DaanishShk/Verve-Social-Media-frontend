import "./css/FeedHeader.css";

import { BiRefresh, BiWorld } from "react-icons/bi";
import { BsFillPeopleFill, BsFillPersonPlusFill } from "react-icons/bs";

import CardListToggle from "../Reusable/CardListToggle";
import PageNavButton from "../Reusable/PageNavButton";
import React from "react";
import SortBy from "../Reusable/SortBy";

function FeedHeader({tab, setTab, refresh, setRefresh, view, setView, setSort}) {
  return (
    <div className="feedHeader">
      <div className="feedHeader__left">
        <BiRefresh
          style={{ fontSize: "2em", color: "#1F6CB0" }}
          className="feedHeader__refresh"
          onClick={() => setRefresh(!refresh)}
        />
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
        <PageNavButton
          Icon={BiWorld}
          text="Public"
          setTab={setTab}
          active={tab === "Public" ? true : false}
        />
      </div>
      <div className="feedHeader__right">
        <CardListToggle view={view} setView={setView} />
        <SortBy setSort={setSort}/>
      </div>
    </div>
  );
}

export default FeedHeader;
