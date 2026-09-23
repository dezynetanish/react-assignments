import {useState} from "react"
import {v4 as uuidv4 } from 'uuid';
import "./tracker.css"
export default function Tracker(){
    let [task, setTask]= useState([{ta:"tvrfg",id:uuidv4(),isdone:false}]);
    let [newtask, setnewTask]= useState("");

    let addtask = ()=>{
        setTask([...task,{ta:newtask,id:uuidv4(),isdone:false}])
        setnewTask("")
    }
    let deleteTask = (id)=>{
        setTask(task.filter((tasks)=>(tasks.id !=id)))
    }
    let markall =()=>{
        setTask(task.map((tasks)=> {
            return{...tasks,isdone:true}
        }))
    }
    let mark = (id) =>{
        setTask(task.map((tasks) =>{
            if(tasks.id == id){
                return{...tasks,isdone:true}
            }
            else{
                return tasks
            }
        }))
    }
    return <div className="container">
        <h1>Interview Preparation Tracker</h1>
        <hr />
        <h3>Add Task to crack the interview</h3>
        <input placeholder="Enter Your Task" value={newtask} onChange={(e) => setnewTask(e.target.value)}></input>
        <button className="add-btn" onClick={addtask}> Add a Task</button>
        <hr />
        <ul>
            {task.map((tasks) => (
            <li key={tasks.id}>
                {/* <input type="checkbox" checked={task.isdone} onChange={() => mark(task.id)}></input/v http://localhost:5175/> */}
                <span className={tasks.isdone ? "done" : "" } style={{textDecoration: tasks.isdone ? "line-through" : "none"}}>{tasks.ta}</span>
                <button className="delete btn-danger" onClick={() => deleteTask(tasks.id)}>Remove Task</button>
                <button className="add-btn" onClick={() => mark(tasks.id)}>Mark as Done</button>
            </li>
        ))}
        </ul>
        <button className="all-btn" onClick={markall}>
            Mark As all Done
        </button>
    </div>
}