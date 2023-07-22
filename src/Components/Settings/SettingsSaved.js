import "./css/SettingsSaved.css";

import React, { useEffect, useRef } from "react";

import { FiCheck } from "react-icons/fi";
import { useState } from "react";

function SettingsSaved({ count }) {
  const [display, setDisplay] = useState("none");
  const timer = useRef();

  useEffect(() => {
    if (count === 0) return;

    console.log("running saved useEffect");
    clearTimeout(timer.current);
    setDisplay("flex");
    timer.current = setTimeout(() => setDisplay("none"), 2000);
  }, [count]);

  return (
    <div className="settingsSaved" style={{ display }}>
      <FiCheck />
      <span>Saved</span>
    </div>
  );
}

export default SettingsSaved;
