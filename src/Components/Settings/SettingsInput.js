import "./css/SettingsInput.css"

import React from 'react'

function SettingsInput({value, setValue, name, type, maxLength=20, instruction, error, isTextArea=false}) {
    return (
      <div className="settingsInput">
        <label>{name}</label>

        <div className="settingsInput__field">
          {isTextArea ? (
            <textarea
              type={type}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={maxLength}
            />
          ) : (
            <input
              type={type}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={maxLength}
            />
          )}
          <span>{error}</span>
        </div>

        <small>{instruction}</small>
      </div>
    );
}

export default SettingsInput
