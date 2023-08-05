import "./index.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import { Auth } from "./Hooks/Auth/AuthContext";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./AppPages/ErrorFallback";
import { StompClient } from "./Hooks/Stomp/StompContext";

ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <StompClient>
          <App />
        </StompClient>
      </ErrorBoundary>
    </Auth>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
