import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";

const apiConfigs = {
  host: "https://todo-front-ub.herokuapp.com",
  paths: {
    login: "/api/v1/login/",
    taskList: "/api/v1/task-list/",
    taskCreate: "/api/v1/task-create/",
    taskDelete: "/api/v1/task-delete/",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App apiConfigs={apiConfigs} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
