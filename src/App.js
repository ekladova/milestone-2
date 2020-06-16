import React, { useState, useEffect } from "react";
import "./App.css";

import tom_stop from "./pictures-milestone-2/tom-stop.png";
import tom_go from "./pictures-milestone-2/tom-go.png";

import Scene from "./Components/Scene";
import Picture from "./Components/Picture-box/index";
import Input from "./Components/Input";
import Box from "./Components/Flexbox";
import Button from "./Components/Button";
import TaskBar from "./Components/TaskBar";
import Timer from "./Components/Timer";

function App() {
  const [task, setTask] = useState({
    name: "",
    time_min: 0,
    time_sec: 0,
  });

  const onChangeInput = (event) =>
    setTask({ ...task, [event.target.id]: event.target.value });

  const [taskList, setTaskList] = useState([]);

  const onSubmitButton = () => {
    setTaskList(taskList.filter((el) => el.name !== task.name).concat(task));
  };

  const clearAll = () => {
    setTaskList([]);
  };

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [time, setTime] = useState({ min: 0, sec: 0 });
  const onListClick = (event) => {
    const currentTime = taskList.find(
      (el) => el.name === event.currentTarget.id
    );
    setTime({ ...time, min: currentTime.time_min, sec: currentTime.time_sec });
    // changeTime();
    setSeconds(time.sec);
    setMinutes(time.min);
  };

  const [start, setStart] = useState(false);
  const changeActive = () => {
    if (taskList.length > 0) setStart(!start);
  };

  // const changeTime = () => {
  //   setSeconds(time.sec);
  //   setMinutes(time.min);
  // };

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        if (seconds > 0 && minutes >= 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else if (seconds === 0 && minutes === 0) {
          setStart(!start);
        }
      }, 1000);
    } else if (!start && seconds !== 0 && minutes !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, seconds, minutes]);

  return (
    <div className="App">
      <Scene>
        <Picture
          src={start ? tom_go : tom_stop}
          list={taskList}
          onClick={changeActive}
          active={start}
        />

        <Timer>
          {minutes}:{seconds}
        </Timer>

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
