import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
function EditUser() {
    const navigate =useNavigate();

    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[mail,setMail]=useState("");
    const[cpassword,setCpassword]=useState("");
    
    const [user,setUser]=useState([]);
    async function validateUser(e){
        e.preventDefault();
       await axios.post("http://localhost:8080/post",{
        username:location.state.username,
        password:password,
        cpassword:cpassword,
        mail:mail,
        }
        )
        alert("success");
        setUserName();
        setMail();
        setPassword();
        setCpassword();
    
    }
    const location=useLocation();
    return ( 
        <>
            {user&&
                <>
                <form>
        <h3>Editing {location.state.username}</h3>

       <div>

        <div className="mb-3">
          <label>Mail</label>
          <input type="text" className="form-control" placeholder="Mail" 
           value={mail}
           onChange={(e)=>setMail(e.target.value)}
           />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>

        <div className="mb-3">
          <label>Confirm password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={cpassword}
            onChange={(e)=>setCpassword(e.target.value)}
            />
        </div>

            </div>
        <div className="d-grid">
          <button style={{float:'right'}} type="submit" className="btn btn-primary" onClick={validateUser}>
            Change
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered ? <a href="/sign-in">sign in</a>
        </p>
      </form>
                </>
            }
        </>
     );
}

export default EditUser;