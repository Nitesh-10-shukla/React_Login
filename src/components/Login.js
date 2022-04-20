import React,{useState} from 'react'

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")

    const lofinForm=()=>{
        var getdata =  localStorage.getItem("formvalue");
        console.log(getdata)
         if(email =="" ){
            alert("email is req")
        }
         if(password == ""){
            alert("please provide valid password")
        }
         if(localStorage.email ==email && localStorage.password==password){
             alert("login suceess")
         }
    }
     
  return (
    <div className='container'>
        <div>
            <label for="email"  class="form-label" >Email</label>
            <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label for="pasword"  class="form-label">Pasword</label>
            <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div className='my-4'>
            <button type='submit' class="btn btn-primary" onClick={lofinForm}>Submit</button>
        </div>
    </div>
  )
}

export default Login