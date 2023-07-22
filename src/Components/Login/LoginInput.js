import "./css/LoginInput.css"

import React from 'react'

function LoginInput({type, field, value, setValue, maxLength=20, error, info, className}) {

    return (
      <div className={className}>
        <div className="loginCard__input--header">
          <label htmlFor="email">{field}</label>
          <span>{error}</span>
        </div>

        <input
          type={type}
          id={type}
          value={value}
          onChange={(e) => setValue(e.target.value.trim())}
          maxLength={maxLength}
        />
        {info ? <p>{info}</p>: null}
      </div>
    );
}

export default LoginInput
