import React, { useState } from "react";
import Login from "./login";
import Todo from "./todo";

function App(props) {
  const [token, setToken] = useState();

  if (!token) {
    return <Login apiConfigs={props.apiConfigs} setToken={setToken} />;
  }

  return <Todo apiConfigs={props.apiConfigs} token={token} />;
}

export default App;
