
import React from 'react';

import { BrowserRouter, Link } from 'react-router-dom'
const Home = () => {
    const getval = localStorage.getItem("formvalue");
    // console.log(getval)
    // getval.map((item)=>{
    //     console.log(item)
    // })
    const logout = ()=>{
        localStorage.clear();
        window.location.reload(false);
    }
  return (

    <div className='container'>
        <div className='d-flex justify-content-between py-4'>
            <div>
                {
                    (!getval)?
                    <>
                <h3>UserName</h3></>:<>{getval.fname}</>
                }
            </div>
            {
                (!getval)?
               
            <div className='d-flex gap-4'>
                <Link className='btn bg-primary' style={{width:"150px",color:"white"}} to="/Login">Login</Link>
                      <Link  className='btn bg-primary' style={{width:"150px",color:"white"}} to="/Registration">Register</Link>
            </div>
            :
            <Link className='btn bg-primary' style={{width:"150px",color:"white"}} to="/" onClick={logout}>Logout</Link>
}
        </div>
        
    </div>

  )
}

export default Home