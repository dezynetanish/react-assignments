import Assi from "./assi3";
import { useState } from "react";
import "./form.css"
export default function Render(){
    let [info,setinfo] = useState([{username:"Tanish",email:"abc@gmail.com",mob:"90XXXXXXXX",tech:"MERN Stack",text:"This is Amazing Tech Stack"}])
    let newinfo = (data) =>{
        setinfo((currdata)=>[...currdata,data])
    }
    return<>
    <h1>Workshop Registration</h1>
    <div className="container">
        <div className="left">
            <Assi addnewinfo={newinfo}/>
        </div>
        <div className="right">
            {info.map((infos,idx) =>(
                <div key={idx} className="card">
                    <h3>Name:{infos.username}</h3>
                    <h3>Mob. No.:{infos.mob}</h3>
                    <h3>Tech Stack :{infos.tech}</h3>
                    <p>Reason to join:{infos.text}</p>
                </div>
            ))}
        </div>
    </div>
    </>
}