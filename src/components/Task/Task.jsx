import './Task.css'

const Task = ({task, deleteTask}) => {
    return (<div className="style">

    
        
       <p className='p'>{task.text}</p> 
       <button onClick={()=> deleteTask(task.id)}>
        <img className="image" src="basket.png" alt="basket icon"  />
       </button>
       
       
       </div>);
}
export default Task;