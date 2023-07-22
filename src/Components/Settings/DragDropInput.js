import "./css/DragDropInput.css"

import React, { useEffect, useState } from 'react'

function DragDropInput({image, setImage, setImgSrc, name, size}) {

  const [error, setError] = useState("");

  const dragOverHandle = (e) => {
    e.preventDefault() ;
    e.dataTransfer.dropEffect = "move";
  }
  const dragEnterHandle = (e) => {
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move"
  };
  const dragLeaveHandle = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "";
    // e.dataTransfer.dropEffect = "link";
  };
  const dropHandle = (e) => {
    e.preventDefault();
    // e.dataTransfer.dropEffect = "link";
    const files = e.dataTransfer.files;
    console.log(files)
    if(files.length) {
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {

    console.log(Math.ceil(files[0].size/1024))
    console.log(size)
    console.log(Math.ceil(files[0].size / 1024) <= size);
    if (Math.ceil(files[0].size / 1024) <= size) {
      setError("")
      setImage(files[0]);
    } else {
      setError("Image too big")
    }
  }

  
  
  useEffect(() => {
    let reader = new FileReader();

    reader.onload = function (event) {
      setImgSrc(event.target.result);
    };

    // added to avoid empty string error, go over this section again
    try {
      reader.readAsDataURL(image);       // this causes onload to run when completed
    } catch (e) {
      console.log(e);
    }
  }, [image]);



  
    return (
      <div className="dragDropInput">
        <div className="dragDropInput__header ">
          <p>{name}</p>
          <span>{error}</span>
        </div>

        <div
          className="dragDropInput__zone"
          onDragOver={dragOverHandle}
          onDrop={dropHandle}
          onDragEnter={dragEnterHandle}
          onDragLeave={dragLeaveHandle}
        >
          <p>Drop image here</p>
          <p>or</p>
          <label htmlFor="image-input">Choose file</label>
          <input
            type="file"
            name=""
            id="image-input"
            accept="image/*"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>
        <small>{`* Image should be less than ${size}KB`}</small>
      </div>
    );
}

export default DragDropInput
