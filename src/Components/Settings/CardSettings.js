import "./css/CardSettings.css"

import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest, BsReddit } from "react-icons/bs";
import React, { useContext, useState } from 'react'

import Activity from "../Profile/Activity";
import ActivityLinks from "../Profile/ActivityLinks";
import { AuthContext } from "../../Hooks/Auth/AuthContext";
import CardSettingsLinkInput from "./CardSettingsLinkInput";
import { FaDiscord } from "react-icons/fa";
import SettingsInput from "./SettingsInput";
import SettingsSaved from "./SettingsSaved";
import UserCard from "../Profile/UserCard";
import useFetch from "../../Hooks/Fetch/useFetch";
import useLink from "../../Hooks/Links/useLink";

function CardSettings() {

  const {baseUrl, user, setUser} = useContext(AuthContext)
    const [description, setDescription] = useState(
      user.accountProfile.description
    ); 

    const [count, setCount] = useState(0)
  
    const callEndpoint = useFetch(AuthContext);
    const [links, setLinks] = useState(user.accountProfile.links)

    const submitHandle = () => {
      submitAndUpdateLocalData()
       // don't use x-www media-type here
    };

    async function submitAndUpdateLocalData() {
      const { status, res } = await callEndpoint(
        "/settings/profile/card",
        "POST",
        JSON.stringify({ description, links }),
        "application/json"
      );
      console.log(status, res);
      if (status === 200) {
        setCount(count + 1)
        let obj = { ...user, accountProfile: res};
        localStorage.setItem("user", JSON.stringify(obj));
        setUser(obj);
      }
    }

  
    return (
      <div className="cardSettings">
        <h1>Card</h1>
        <div className="settingsGeneral__wrapper">
          <div className="settingsGeneral__fields">
            <SettingsInput
              name="Description"
              type="text"
              instruction="* Max 100 characters"
              value={description}
              setValue={setDescription}
              isTextArea={true}
              maxLength={100}
            />
            <div className="cardSettings__links">
              <h2>Links</h2>
              <CardSettingsLinkInput
                site="REDDIT"
                Icon={BsReddit}
                links={links}
                setLinks={setLinks}
              />
              <CardSettingsLinkInput
                site="YOUTUBE"
                Icon={AiFillYoutube}
                links={links}
                setLinks={setLinks}
              />
              <CardSettingsLinkInput
                site="TWITTER"
                Icon={AiOutlineTwitter}
                links={links}
                setLinks={setLinks}
              />
              <CardSettingsLinkInput
                site="INSTAGRAM"
                Icon={AiFillInstagram}
                links={links}
                setLinks={setLinks}
              />
              <CardSettingsLinkInput
                site="DISCORD"
                Icon={FaDiscord}
                links={links}
                setLinks={setLinks}
              />
              <CardSettingsLinkInput
                site="PINTEREST"
                Icon={BsPinterest}
                links={links}
                setLinks={setLinks}
              />
            </div>
            <div className="securitySettings__submit">
              <button type="submit" onClick={submitHandle}>
                Save changes
              </button>
              <SettingsSaved count={count}/>
            </div>
          </div>
          <div className="settingsGeneral__divider"></div>
          <div className="settingsGeneral__preview">
            <h3>Preview</h3>
            <div className="settingsGeneral__preview--wrapper">
              <UserCard
                imgUrl={`${baseUrl}/images/${user.account.username}/profilepic`}
                description={description}
                displayName={user.account.displayName}
                isPicClickable={false}
                numberFollowers={"ex"}
                numberFollowing={"ex"}
              />
              <Activity
                activityComments={[
                  {
                    account: {
                      username: user.account.username,
                      displayName: user.account.displayName,
                    },
                    postId: 0,
                    id: 0,
                    content: "Sample comment, do not click",
                  },
                ]}
                links={links}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default CardSettings
