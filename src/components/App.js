import React, { useState } from "react";
import Login from "./Login";
import Todo from "./Todo";

function App(props) {
  const [token, setToken] = useState();

  if (!token) {
    return <Login apiConfigs={props.apiConfigs} setToken={setToken} />;
  }

  return <Todo apiConfigs={props.apiConfigs} token={token} />;
}

export default App;
