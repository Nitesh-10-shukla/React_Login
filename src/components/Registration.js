import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/Nav.css'

const Registration = () => {
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [cpassword, setConfirmpassword] = useState("")
  const navigate = useNavigate()
  const submitform = () => {
    var emailField = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var passwordfield = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (fname == "") {
      alert("firstname is required")
      return false
    }
    else if (lname == "") {
      alert("last name is req")
      return false
    }
    else if (email == "" || email.match(!emailField)) {
      alert("Please provide valid email")
      return false
    }
    else if (password.trim() == "" || password.match(!passwordfield)) {
      alert("please provide valid password")
      return false
    }
    else if (cpassword != password) {
      alert("confirm password does't match")
      return false;
    }
    else {
      var data = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
      }
      localStorage.setItem("formvalue", JSON.stringify(data))
      navigate('/Login')
      window.location.reload(false);
    }
  }
  return (
    <div className='container'>
      <div className='reg shadow p-5 my-4 bg-white rounded'>
        <form>
          <div class="mb-3">
            <label for="firstname" class="form-label">First name</label>
            <input type="text" class="form-control" id="name" value={fname} onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="firstname" class="form-label">Last name</label>
            <input type="text" class="form-control" id="name" value={lname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="cpasword" class="form-label">Confarm pasword</label>
            <input type="password" class="form-control" id="pass" value={cpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
          </div>
          <button type="button" class="btn btn-primary" onClick={submitform}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registration