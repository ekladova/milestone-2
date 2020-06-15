import React from "react";
import "./task.css";

const TaskBar = ({ taskList, onClick, time_min, time_sec }) => {
  return (
    <ul className="flex-container-justify-height ">
      {taskList.length ? (
        taskList.map((task) => {
          return (
            <li
              key={task.name + task.time_min + task.time_sec}
              className="listItem"
              onClick={onClick}
            >
              <p>
                <span>{task.name} </span>
                <span time_min={task.time_min}>{task.time_min}</span>:
                <span time_sec={task.time_sec}>{task.time_sec}</span>
              </p>
            </li>
          );
        })
      ) : (
        <p>No tasks yet</p>
      )}
    </ul>
  );
};

export default TaskBar;
