import "./css/CreatePostForm.css"

import React, { useState } from 'react'

import {BiWorld} from "react-icons/bi"
import {BsFillPeopleFill} from "react-icons/bs";
import CreatePostButton from "../Reusable/CreatePostButton";
import VisibilityButton from "./VisibilityButton";
import useFetch from "../../Hooks/Fetch/useFetch";
import { useNavigate } from "react-router-dom";

function CreatePostForm({tab}) {
    const [title, setTitle] = useState("")
    const [imgUrl, setImgUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("")
    const [visibility, setVisibility] = useState("FRIENDS")
    const [text, setText] = useState("");

    const callEndpoint = useFetch();
    const navigate = useNavigate();
    
    let payload = {title: title.trim(), visibility, type:tab.toUpperCase()};
    

    const embedUrl = /youtube.com/.test(videoUrl)
      ? `https://youtube.com/embed/${videoUrl.split("watch?v=")[1]}`
      : /https:\/\/gfycat.com/.test(videoUrl)
      ? `https://gfycat.com/ifr/${videoUrl.split(".com/")[1]}`
      : null;
    // console.log(embedUrl)
    
    async function submitPost() {
      const {res, status} = await callEndpoint(
                  "/posts",
                  "POST",
                  JSON.stringify(payload),
                  "application/json"
                )
      console.log(res, status)
      if(status===201) {
        navigate(`/post/${res.id}`);
      }
    }

    switch (tab) {
      case "Text":
        payload["content"] = text.trim();
        break;
      case "Image":
        payload["content"] = imgUrl;
        break;
      default:
        payload["content"] = embedUrl;
    }
    
    return (
      <div className="createPostForm">
        <div className="createPostForm__wrapper">
          <div className="createPostForm__input">
            <label htmlFor="">Post title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {tab === "Image" || tab === "Link" ? (
            <div className="createPostForm__input">
              <label htmlFor="">Image url</label>
              <input
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value.trim())}
              />
            </div>
          ) : null}
          {tab === "Video" ? (
            <div className="createPostForm__input">
              <label htmlFor="">Video url</label>
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value.trim())}
              />
            </div>
          ) : null}

          <div className="createPostForm__input">
            <label htmlFor="">Visibility</label>
            <div className="createPostForm__visibility">
              <VisibilityButton
                Icon={BsFillPeopleFill}
                text="Friends"
                active={visibility === "FRIENDS" ? true : false}
                setVisibility={setVisibility}
              />
              <VisibilityButton
                Icon={BiWorld}
                text="Public"
                active={visibility === "PUBLIC" ? true : false}
                setVisibility={setVisibility}
              />
            </div>
          </div>
          {tab === "Image" || tab === "Link" ? (
            <img src={imgUrl} alt="" />
          ) : null}
          {tab === "Text" ? (
            <textarea
              className="createPostForm__text"
              placeholder="Enter text here (max 2500 characters)"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          ) : null}
          {tab === "Video" ? (
            <div className="video">
              <iframe
                src={embedUrl}
                title="video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
          <div className="createPostForm__button">
            <CreatePostButton
              callback={() => submitPost()}
            />
          </div>
        </div>
      </div>
    );
}

export default CreatePostForm
