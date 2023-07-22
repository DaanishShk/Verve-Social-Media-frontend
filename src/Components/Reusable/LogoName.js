import "./css/LogoName.css";

import { AiFillRedditCircle } from 'react-icons/ai';
import React from 'react'

function LogoName() {
    return (
        <div className="logoName">
          <AiFillRedditCircle 
          className="logoName__logo"/>
          <h3>Verve</h3> 
          {/* gabble, vertigo */}
        </div>
    );
}

export default LogoName
