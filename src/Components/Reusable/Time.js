import "./css/Time.css";

import React from 'react'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

function Time({timestamp, fontSize}) {

  const date = new Date(timestamp)
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  const time = date.toLocaleTimeString();
    return (
      <div className="time" style={{fontSize:fontSize}}>
        <span>{`${date.getDate()} ${months[date.getMonth()]} '${date.getFullYear()%100}`}</span>
        <br />
        <span>{time.slice(0,-6) + time.slice(-3)}</span>
      </div>
    );
}

export default Time
