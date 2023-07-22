import "./css/TextPost.css";

import React from "react";
import { useRef } from "react";

function TextPost({ content, setSpan, setVisibility }) {
  const textEle = useRef();

  setTimeout(() => {
    if (textEle.current) {
      setSpan(parseInt(18 + textEle.current.clientHeight / 10));
      setVisibility("visible");
    }
  }, 100);

  return (
    <p className="postCard__text" ref={textEle}>
      {content}
    </p>
  );
}

export default TextPost;
