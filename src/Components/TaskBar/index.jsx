import React from "react";

const TaskBar = ({ taskList }) => {
  return (
    <div>
      <ul>
        {taskList.length ? (
          taskList.map((task) => {
            return (
              <li>
                {task.name} - {task.time}
              </li>
            );
          })
        ) : (
          <p>No tasks yet</p>
        )}
      </ul>
    </div>
  );
};

export default TaskBar;
