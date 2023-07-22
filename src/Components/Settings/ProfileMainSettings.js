import "./css/ProfileMainSettings.css";

import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import DragDropInput from "./DragDropInput";
import PicAndUsername from "../Reusable/PicAndUsername";
import SettingsInput from "./SettingsInput";
import SettingsSaved from "./SettingsSaved";
import useFetch from "../../Hooks/Fetch/useFetch";

function ProfileMainSettings() {

  const { baseUrl, user, setUser } = useContext(AuthContext);
  
  const [aboutMe, setAboutMe] = useState(user.accountProfile.aboutMe);
  const [background, setBackground] = useState("");
  const [imgSrc, setImgSrc] = useState(
    `${baseUrl}/images/${user.account.username}/background`
  );
  
  const [count, setCount] = useState(0)

  // console.log(profilePic)

  const callEndpoint = useFetch(AuthContext);

  const submitHandle = () => {
    let data = new FormData();
    // console.log(profilePic)
    data.append("background", background);
    data.append("aboutMe", aboutMe);
    // for (let pair of data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    sendRequest(data)
  };

  async function sendRequest(data) {
    const { res, status } = await callEndpoint(
      "/settings/profile/main",
      "POST",
      data,
      undefined
    ); // don't use x-www media-type here

    if(status === 200) {
      setCount(count + 1)
      let obj = { ...user, accountProfile: res };
      localStorage.setItem("user", JSON.stringify(obj));
      setUser(obj);
    }
  }

   useEffect(() => {
     initializeBackgroundPicture();
   }, []);

   async function initializeBackgroundPicture() {
     let response = await fetch(
       `${baseUrl}/images/${user.account.username}/background`
     );
     let data = await response.blob();
     setBackground(data);

     // ... do something with the file or return it
   }

  return (
    <div className="settingsGeneral profileMainSettings">
      <h1>Main</h1>
      <div className="settingsGeneral__wrapper">
        <div className="settingsGeneral__fields">
          <SettingsInput
            name="About me"
            type="text"
            instruction="* Max 1000 characters"
            value={aboutMe}
            setValue={setAboutMe}
            isTextArea={true}
            maxLength={1000}
          />
          <DragDropInput
            name={"Profile picture"}
            instruction={"* Image should be less than 512kb"}
            image={background}
            setImage={setBackground}
            setImgSrc={setImgSrc}
            size={512}
          />
          <div className="securitySettings__submit">
            <button type="submit" onClick={submitHandle}>
              Save changes
            </button>
            <SettingsSaved count={count} />
          </div>
        </div>
        <div className="settingsGeneral__divider"></div>
        <div className="settingsGeneral__preview">
          <h3>Preview</h3>
          <div className="settingsGeneral__preview--wrapper">
            <img src={imgSrc} alt="background" />
            <div className="profileMainSettings__preview--aboutMe">
              <h6>About me</h6>
              <p>{aboutMe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMainSettings;
