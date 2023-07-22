import "./css/VisibilityButton.css"

import React from 'react'

function VisibilityButton({Icon, text, active, setVisibility}) {

    const visibilityHandle = (v) => {
        // console.log(v)
      setVisibility(v);
    };

    // console.log(active === text.toUpperCase());
    // console.log(
    //   "visibilityButton" + (active ? " visibilityButton__active" : "")
    // );
    return (
      <div
        className={
          "pageNavButton visibilityButton" + (active ? " visibilityButton__active" : "")
        }
      >
        <button type="button" onClick={()=>visibilityHandle(text.toUpperCase())}>
          <Icon style={{ fontSize: "1.5em" }} />
          <span>{text}</span>
        </button>
      </div>
    );
}

export default VisibilityButton
