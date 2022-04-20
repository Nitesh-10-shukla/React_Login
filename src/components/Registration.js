import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const[fname,setFirstname]=useState("");
    const[lname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const[cpassword,setConfirmpassword]=useState("")
const navigate =useNavigate()
const submitform = ()=>{
     var emailField = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     var passwordfield=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(fname==""){
    alert("firstname is required")
}
else if(lname==""){
    alert("last name is req")
}
else if(email =="" || email.match(!emailField)){
    alert("Please provide valid email")
}
else if(password.trim()=="" || password.match(!passwordfield)){
    alert("please provide valid password")
}
else if(cpassword != password){
    alert("confirm password does't match")
    return false;
}
else{
    var data = {
        fname:fname,
        lname:lname,
        email:email,
        password:password
    }
    localStorage.setItem("formvalue",JSON.stringify(data))
    navigate('/')
    window.location.reload(false);
}
}
return(
    <div className='container'>
        <div>
        <form>
   <div class="mb-3">
    <label for="firstname" class="form-label">First name</label>
    <input type="text" class="form-control" id="name" value={fname} onChange={(e)=>setFirstname(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="firstname" class="form-label">Last name</label>
    <input type="text" class="form-control" id="name" value={lname} onChange={(e)=>setLastname(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="cpasword" class="form-label">Confarm pasword</label>
    <input type="password" class="form-control" id="pass" value={cpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={submitform}>Submit</button>
</form>
        </div>
    </div>
  )
}

export default Registration