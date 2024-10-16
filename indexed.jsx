import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider.js";
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider></React.StrictMode>
  ,

  document.getElementById("root")
);


// to run react-app => npm start
