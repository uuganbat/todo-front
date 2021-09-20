import React, { useState, useEffect } from "react";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";
import Login from "./Login";

async function getData(url, token) {
  const res = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Token ${token}` },
  });
  const json = await res.json();
  return json;
}

function Todo(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [tasks, setTask] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(
      props.apiConfigs.host + props.apiConfigs.paths.taskList,
      props.token
    ).then(
      (res) => {
        setIsLoaded(true);
        setTask(res.datas);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="task">
        <h1 className="task-title">TO DO</h1>
        <TaskForm
          setTask={setTask}
          token={props.token}
          apiConfigs={props.apiConfigs}
        />
        <Tasks
          setTask={setTask}
          isLoaded={isLoaded}
          error={error}
          tasks={tasks}
          token={props.token}
          apiConfigs={props.apiConfigs}
        />
      </div>
    </div>
  );
}

export default Todo;
