import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import '../Style/Nav.css'

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const[suceess,setSuccess]=useState()
    const navigate =useNavigate()
    const lofinForm=()=>{
        const getval= localStorage.getItem("formvalue");
        const newd = JSON.parse(getval)
        if(localStorage.getItem('formvalue')==null){
            alert("Please regiter first");
            navigate('/Registration')
        }
         if(email =="" ){
            alert("email is req")
        }
         if(password == ""){
            alert("please provide valid password")
        }
         if(newd.email ==email && newd.password==password){
            localStorage.setItem("output","success")
            navigate('/')
            window.location.reload(false);
         }
         else{
             alert("failed")
         }
    }
     
  return (
    <div className='container'>
         <div className='reg shadow p-4 my-4 bg-white rounded'>
        <form>
        <div>
            <label for="email"  class="form-label" >Email</label>
            <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label for="pasword"  class="form-label">Pasword</label>
            <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div className='mt-3'>
            <button type='button' class="btn btn-primary" onClick={lofinForm}>Submit</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Login