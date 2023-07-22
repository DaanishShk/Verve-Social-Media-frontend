import "./css/CreatePostButton.css";

import React from 'react'

function CreatePostButton({callback}) {
    
    return (
        <div className="createPostButton">
            <button onClick={() => callback?.()}>Create Post</button>
        </div>
    )
}

export default CreatePostButton
