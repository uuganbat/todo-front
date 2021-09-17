import React from "react";

async function deleteData(url, token, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}

function Tasks(props) {
  const deleteTask = (id) => {
    const tasks = props.tasks.filter((task) => task.id !== id);
    deleteData(
      props.apiConfigs.host + props.apiConfigs.paths.taskDelete,
      props.token,
      {
        id: id,
      }
    ).then((res) => {
      if (res.status === "success") {
        props.setTask(tasks);
      }
    });
  };

  if (props.error) {
    return <div>Error</div>;
  } else if (!props.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="task-list">
        {props.tasks.map((task) => (
          <li key={task.id}>
            <div>
              {/* <input type="checkbox" /> */}
              {task.name}
            </div>
            <div>
              <span className="material-icons">edit</span>
              <span
                // key={task.id}
                onClick={(e) => deleteTask(task.id)}
                className="material-icons"
              >
                delete
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Tasks;
