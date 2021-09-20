import React, { useState } from "react";

async function postData(url, token, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}

function TaskForm(props) {
  const [taskInput, setTaskInput] = useState("");
  const style = !taskInput
    ? { opacity: 0, display: "none" }
    : { display: "block" };
  style.display = console.log(style);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(
      props.apiConfigs.host + props.apiConfigs.paths.taskCreate,
      props.token,
      {
        name: taskInput,
        complete: false,
      }
    ).then((res) => {
      if (res.status === "success") {
        props.setTask((arr) => [...arr, res.data]);
        setTaskInput("");
      }
    });
  };

  const clearTaskInput = () => {
    setTaskInput("");
  };

  return (
    <form
      action="#"
      className="task-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        required={true}
        value={taskInput}
        placeholder="What will you do today?"
        className="form-control"
        onChange={(e) => {
          setTaskInput(e.target.value);
        }}
      />
      <button
        type="button"
        className="input-button"
        onClick={clearTaskInput}
        style={style}
      >
        <span className="material-icons">clear</span>
      </button>
      <button type="submit" className="input-button" style={style}>
        <span className="material-icons">add</span>
      </button>
    </form>
  );
}

export default TaskForm;
