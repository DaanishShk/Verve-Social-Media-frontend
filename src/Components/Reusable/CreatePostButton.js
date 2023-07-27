import "./css/CreatePostButton.css";

import React from "react";

function CreatePostButton({ callback, disabled }) {
  return (
    <div className="createPostButton">
      <button onClick={() => callback?.()} disabled={disabled}>
        Create Post
      </button>
    </div>
  );
}

export default CreatePostButton;
