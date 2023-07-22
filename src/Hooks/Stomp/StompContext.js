import React, { createContext } from "react";

import { AuthContext } from "../Auth/AuthContext";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useContext } from "react";

const StompContext = createContext();

function StompClient({ children }) {
  const { baseUrl } = useContext(AuthContext);
  var stompClient = null;

  var socket = new SockJS(`${baseUrl}/stomp-endpoint`);
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    console.log("Connected: " + frame);
    stompClient.subscribe(`${baseUrl}/topic/greetings`, function (greeting) {
      JSON.parse(greeting.body);
    });
  });

  window.onbeforeunload = function () {
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    console.log("Disconnected");
  };

  function sendName() {
    stompClient.send(
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
