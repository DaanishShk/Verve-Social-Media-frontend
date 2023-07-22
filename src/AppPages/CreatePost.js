import "./css/CreatePost.css";

import React, { useState } from "react";

import { BsFonts } from "react-icons/bs";
import CreatePostForm from "../Components/CreatePost/CreatePostForm";
import { ImImages } from "react-icons/im";
import { MdOutlineVideoLibrary } from "react-icons/md";
import PageNavButton from "../Components/Reusable/PageNavButton";

function CreatePost() {
  const [tab, setTab] = useState("Video");

  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <div className="createPost__tabs">
        <PageNavButton
          Icon={BsFonts}
          text="Text"
          setTab={setTab}
          active={tab === "Text" ? true : false}
        />
        <PageNavButton
          Icon={ImImages}
          text="Image"
          active={tab === "Image" ? true : false}
          setTab={setTab}
        />
        <PageNavButton
          Icon={MdOutlineVideoLibrary}
          text="Video"
          active={tab === "Video" ? true : false}
          setTab={setTab}
        />
      </div>
      <CreatePostForm tab={tab}/>
    </div>
  );
}

export default CreatePost;
