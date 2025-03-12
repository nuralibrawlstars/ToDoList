/* eslint-disable no-unused-vars */
import { useState } from "react";
import Task from "./components/Task/Task";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Body from "./components/body/Body";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Buy milk" },
    { id: "2", text: "Wolk with dog" },
    { id: "3", text: "Do homework" },
  ]);

  const [currentTask, setCurrentTask] = useState("");

  const deleteTask = (id) => {
    const arr = tasks.filter((task) => task.id != id);
    setTasks(arr);
  };

  const onInputChange = (e) => {
    setCurrentTask(e.target.value);
  }
  const handleAddTask = () => {
    if(currentTask.trim() !=" ") {
     const newTask = {
      id: new Date(),
      text: currentTask
     }
     setTasks(prev=>[...prev, newTask])
     setCurrentTask(" ")
    }
    };
  

  return (
    <>
      <AddTaskForm currentTask={currentTask} onInputChange={(e)=>onInputChange(e)}  handleAddTask={handleAddTask}/>

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={(id) => deleteTask(task.id)}
        />
      ))}
    </>
  );
}

export default App;
