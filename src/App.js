import React, { useState } from "react";
import "./App.css";

import Scene from "./Components/Scene";
import Picture from "./Components/Picture-box/index";
import Input from "./Components/Input";
import Box from "./Components/Flexbox";
import Button from "./Components/Button";
import TaskBar from "./Components/TaskBar";
import Timer from "./Components/Timer";

function App() {
  const [task, setTask] = useState({ name: "", time_min: 0, time_sec: 0 });
  const onChangeInput = (event) =>
    setTask({ ...task, [event.target.id]: event.target.value });

  let [taskList, setTaskList] = useState([]);

  const onSubmitButton = () => {
    setTaskList(taskList.filter((el) => el.name !== task.name).concat(task));
  };

  const clearAll = () => {
    setTaskList((taskList = []));
  };

  const [time, setTime] = useState({ min: 0, sec: 0 });

  const onListClick = (event) => {
    setTime({
      ...time,
      min:
        event.target.parentNode.lastChild.previousSibling.previousSibling
          .innerText,

      sec: event.target.parentNode.lastChild.innerText,
    });
    console.log(time);
  };

  return (
    <div className="App">
      <Scene>
        <Picture />
        <Timer numbers={time.min + ":" + time.sec}></Timer>
        <Box className="flex-container-center-center">
          <span>
            <p>Task: </p>
          </span>
          <Input
            type="text"
            id="name"
            className="input clear"
            onChange={onChangeInput}
            value={task.name}
          />
          <span>
            <p>Time: </p>
          </span>
          <Input
            type="number"
            id="time_min"
            className="input-time clear"
            onChange={onChangeInput}
            placeholder="min"
            value={task.time_min}
          />
          :
          <Input
            type="number"
            id="time_sec"
            className="input-time clear"
            placeholder="sec"
            onChange={onChangeInput}
            value={task.time_sec}
          />
        </Box>
        <Box className="flex-container-center-center">
          <Button type="submit" text="Add task" onClick={onSubmitButton} />
          <Button type="button" text="Clear tasks" onClick={clearAll} />
        </Box>

        <TaskBar onClick={onListClick} taskList={taskList}></TaskBar>
      </Scene>
    </div>
  );
}

export default App;
