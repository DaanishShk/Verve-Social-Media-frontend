import "./css/ActivityLinks.css"

import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest, BsReddit } from "react-icons/bs";

import { FaDiscord } from "react-icons/fa";
import React from 'react'

function ActivityLinks({links}) {

    return (
      <div className="activityLinks">
        <div className="userCard__bottom--links">
          <span>Links:</span>
          <div className="userCard__bottom--icons">
            {links["REDDIT"] ? (
              <a
                href={`https://www.reddit.com${links["REDDIT"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsReddit />
              </a>
            ) : null}
            {links["YOUTUBE"] ? (
              <a
                href={`https://www.youtube.com${links["YOUTUBE"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            ) : null}
            {links["TWITTER"] ? (
              <a
                href={`https://twitter.com${links["TWITTER"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            ) : null}
            {links["INSTAGRAM"] ? (
              <a
                href={`https://www.instagram.com${links["INSTAGRAM"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            ) : null}
            {links["DISCORD"] ? (
              <a
                href={`https://discord.com${links["DISCORD"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            ) : null}
            {links["PINTEREST"] ? (
              <a
                href={`https://www.pinterest.com${links["PINTEREST"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPinterest />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
}

export default ActivityLinks
