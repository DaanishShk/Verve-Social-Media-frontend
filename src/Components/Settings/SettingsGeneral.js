import "./css/SettingsGeneral.css"

import React, { useContext, useEffect, useRef, useState } from 'react'

import { AuthContext } from "../../Hooks/Auth/AuthContext";
import DragDropInput from "./DragDropInput";
import PicAndUsername from "../Reusable/PicAndUsername";
import SettingsInput from "./SettingsInput"
import SettingsSaved from "./SettingsSaved";
import UserCard from "../Profile/UserCard";
import useFetch from "../../Hooks/Fetch/useFetch";

function SettingsGeneral() {

  const { baseUrl, user, setUser } = useContext(AuthContext);
    
    const [displayName, setDisplayName] = useState(user.account.displayName)
    const [profilePic, setProfilePic] = useState("")    
    const [imgSrc, setImgSrc] = useState(
      `${baseUrl}/images/${user.account.username}/profilepic`
    );

    

    const [count, setCount] = useState(0)

    // console.log(profilePic)
    
    const callEndpoint = useFetch(AuthContext);

    const submitHandle = () => {
      let data = new FormData()
      // console.log(profilePic)
      data.append('file', profilePic)
      data.append('displayName', displayName)
      // for (let pair of data.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
        // don't use x-www media-type here
     submitAndUpdateLocalData(data);
    }

    async function submitAndUpdateLocalData(data) {
      const {status, res} = await callEndpoint(
        "/settings/general",
        "POST",
        data,
        undefined
      );

       if(status === 200) {
         setCount(count + 1)
         let obj = { ...user, account: res };
         localStorage.setItem("user", JSON.stringify(obj))
         setUser(obj)
       }
    }


    
    useEffect(() => {
      initializeProfilePicture()
    }, [])

    async function initializeProfilePicture() {
      let response = await fetch(
        `${baseUrl}/images/${user.account.username}/profilepic`
      );
      let data = await response.blob();
      setProfilePic(data)
      
      // ... do something with the file or return it
    }


    
    return (
      <div className="settingsGeneral">
        <h1>General</h1>
        <div className="settingsGeneral__wrapper">
          <div className="settingsGeneral__fields">
            <SettingsInput
              name="Display name"
              type="text"
              instruction="* The name that is visible to others. Username by default, does not change your username"
              value={displayName}
              setValue={setDisplayName}
            />
            <DragDropInput
              name={"Profile picture"}
              image={profilePic}
              setImage={setProfilePic}
              setImgSrc={setImgSrc}
              size={256}
            />
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
                description={"dummy text description"}
                imgUrl={imgSrc}
                displayName={displayName}
                numberFollowers={"ex"}
                numberFollowing={"ex"}
                isPicClickable={false}
              />
              <PicAndUsername
                imgUrl={imgSrc}
                picSize={"50px"}
                fontSize={"1.5rem"}
                displayName={displayName}
                isPicClickable={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default SettingsGeneral
