import React, { useState } from "react";
import "./App.css";

import Scene from "./Components/Scene";
import Picture from "./Components/Scene/Picture-box";
import Input from "./Components/Input";
import Box from "./Components/Flexbox";
import Button from "./Components/Button";
import TaskBar from "./Components/TaskBar";

function App() {
  const [task, setTask] = useState({});
  const onChangeInput = (event) =>
    setTask({ ...task, [event.target.id]: event.target.value });

  const [taskList, setTaskList] = useState([]);

  const onSubmitButton = () => {
    setTaskList(taskList.concat(task));
  };

  return (
    <div className="App">
      <Scene>
        <Picture />
        <Box>
          <Input
            type="text"
            id="name"
            onChange={onChangeInput}
            value={task.name}
          />
          <Input
            type="text"
            id="time"
            onChange={onChangeInput}
            value={task.time}
          />
          <Button type="submit" text="Add task" onClick={onSubmitButton} />
        </Box>

        <TaskBar taskList={taskList}></TaskBar>
      </Scene>
    </div>
  );
}

export default App;
