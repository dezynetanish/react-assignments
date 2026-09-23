import {useState} from "react";
export default function Assi({addnewinfo}){
let[formdata, setformdata]= useState({username:"",email:"",mob:"",tech:"",text:""})
let handel =(event)=>{
    setformdata((data)=>{
        return{...data,[event.target.name]:event.target.value}
    })
}
let[isvalid,setvalid]=useState(true)
let isMobilevalid = /^\d{10}$/.test(formdata.mob)
let def=(event)=>{
    event.preventDefault()
    if(!formdata.username || !formdata.email || !formdata.mob.length !==10 || !formdata.text)
    if(!formdata.username){
        setvalid(false)
        return
    }
    addnewinfo(formdata)
    setvalid(true)
    console.log(formdata)
    setformdata({username:"",email:"",mob:"",tech:"",text:""})
}
return<> <form onSubmit={def}>
    <input type="text" placeholder="Enter your Name" value={formdata.username}  onChange={handel} name="username"></input>
    {!isvalid && <p style={{color:"red"}}>This field cannot be empty</p>}
    <br></br>
    <br></br>
    <input type="email:" placeholder="Enter Your email" value={formdata.email} onChange={handel} name="email"></input>
    {!isvalid && <p style={{color:"red"}}>This field cannot be empty</p>}
    <br></br>
    <br></br>
    <input type="tel" placeholder="enter your mobile no." name="mob" value={formdata.mob} onChange={handel}></input>
    {!isvalid && formdata.mob && !isMobilevalid && <p style={{color:"red"}}>This field cannot be empty</p>}
    {!isvalid && formdata.mob && !isMobilevalid && <p style={{color:"red"}}> Mobile number must be 10 digits </p> }
    <br></br>
    <br></br>
    <input id="mern" type="radio" name="tech"  value="Mern Stack" checked={formdata.tech==="Mern Stack"} onChange={handel}></input>
    <label htmlFor="mern">Mern Stack</label>
    <input id="da" type="radio" name="tech"  value="Data Analyst" checked={formdata.tech==="Data Analyst"} onChange={handel}></input>
    <label htmlFor="da">Data Analyst</label>
    <input id="aiml" type="radio" name="tech"  value="AI/ML" checked={formdata.tech==="AI/ML"} onChange={handel}></input>
    <label htmlFor="aiml">AI/ML</label>
    <br></br>
    <br></br>
    <textarea type="text" name="text" placeholder="Enter your text" value={formdata.text} onChange={handel} ></textarea>
    <br></br>
    <br></br>
    <button>Register</button>
</form>
</>
}