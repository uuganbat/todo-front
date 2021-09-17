import React, { useState } from "react";

async function postData(url, data) {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json;" },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}

export default function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(props.apiConfigs.host + props.apiConfigs.paths.login, {
      username: username,
      password: password,
    }).then((response) => {
      props.setToken(response.token);
    });
  };

  return (
    <div className="container">
      <div className="login">
        <h1 className="title">Welcome to To Do</h1>
        <form
          action="#"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="login-form"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
