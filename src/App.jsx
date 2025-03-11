/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Task from './components/Task/Task'
import './App.css'

function App() {
 const [tasks, setTasks]=useState([
  
{id: "1", text: "Buy milk"},
{id: "2", text: "Wolk with dog"},
{id: "3", text: "Do homework"}
 ])

 const deleteTask=(id) => {
  const arr=tasks.filter(task => task.id != id)
  setTasks(arr)
 }
  return (
    <>
    
    {
      tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={id=>deleteTask(task.id)}/>

      )
      )
    }
      
    </>
  )
}

export default App
