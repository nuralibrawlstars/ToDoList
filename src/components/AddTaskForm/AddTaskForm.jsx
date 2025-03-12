import "./AddTaskForm.css"

const AddTaskForm=({currentTask, onInputChange, handleAddTask}) => {
 return (

  <>
  <input className="in" type="text" value={currentTask} onChange={onInputChange} placeholder="enter new task"/>

  <button  onClick={handleAddTask} className="b">Add</button>
</>

 )

}
export default AddTaskForm