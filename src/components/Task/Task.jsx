import './Task.css'

const Task = ({task, deleteTask}) => {
    return (<div style={{display:"flex", gap: "20px"}}>

    
        
       <p>{task.text}</p> 
       <button onClick={()=> deleteTask(task.id)}>
        <img className="image" src="basket.png" alt="basket icon"  />
       </button>
       
       
       </div>);
}
export default Task;