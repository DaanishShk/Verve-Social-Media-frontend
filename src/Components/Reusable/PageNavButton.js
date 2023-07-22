import "./css/PageNavButton.css";

import React from 'react';

function PageNavButton({Icon, text, active, setTab}) {

    const tabHandle = (t) => {
      // console.log(v)
      setTab(t);
    };
    
    return (
      <div
        className={
          "pageNavButton" + (active ? " visibilityButton__active" : "")
        }
      >
        <button
          type="button"
          onClick={() => tabHandle(text)}
        >
          {Icon ? <Icon style={{ fontSize: "1.5em" }} /> : null}
          <span>{text}</span>
        </button>
      </div>
    );
}

export default PageNavButton
