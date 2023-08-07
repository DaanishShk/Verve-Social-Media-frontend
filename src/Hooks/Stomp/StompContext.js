import React, { createContext, useEffect, useRef, useState } from "react";

import { AuthContext } from "../Auth/AuthContext";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useContext } from "react";

const StompContext = createContext();

function StompClient({ children }) {
  const { baseUrl, user } = useContext(AuthContext);

  const stompClient = useRef(
    Stomp.over(new SockJS(`${baseUrl}/stomp-endpoint`))
  );

  useEffect(() => {
    if (user == null) return;
    stompClient.current.connect({}, function (frame) {
      console.log("Connected: " + frame);
      stompClient.current.subscribe(
        `/user/${user.account.username}/notifications`,
        function (message) {
          console.log(message);
        }
      );
    });
  }, [user]);

  window.onbeforeunload = function () {
    if (stompClient.current !== null) {
      stompClient.current.disconnect();
    }
    console.log("Disconnected");
  };

  function sendName() {
    stompClient.current.send(
      "/app/hello",
      {},
      JSON.stringify({ name: "Jason Romario" })
    );
  }

  return (
    <StompContext.Provider value={{ sendName }}>
      {children}
    </StompContext.Provider>
  );
}

export { StompClient, StompContext };
