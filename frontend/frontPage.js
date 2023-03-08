import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./frontpage.css";
// import axios from 'axios';
function LoginForm() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [mail, setMail] = useState('');

  const save = (e) => {
    e.preventDefault();
    const obj = {username,mail,password,cpassword};
    fetch("http://localhost:8080/post",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
    }).then(window.alert("Details added"))
    .then(window.location.reload());

      }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleCpasswordChange = (event) => {
    setCpassword(event.target.value);
  };
  const handlEmailChange = (event) => {
    setMail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <>
 <div style={
            {display : 'flex'
            }
        }>
        <Link to={'/'}><h1>Home</h1></Link>
        <Link to={'/signin'}><h1>Sign In</h1></Link>
        <Link to={'/signup'}><h1>Sign Up</h1></Link>
        <Link to={'/temp'}><h1>Datas</h1></Link>
        </div>   
         <form onSubmit={handleSubmit}>
      <div id ='cont'>
      <div>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="mail">Mail :</label>
        <input
          type="mail"
          id="mail"
          value={mail}
          onChange={handlEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="cpassword">Confirm password :</label>
        <input
          type="password"
          id="dob"
          value={cpassword}
          onChange={handleCpasswordChange}
        />
      </div>
      </div>
      <div id='buttons'>

      <button type="submit" onClick={save}>SIGN UP</button>

      </div>
      <div id='ls'>

      <p id='tr'>already have an account ? <Link to={"/signin"}> Sign in</Link> </p>
      <p id='tr'>By clicking "Sign up" button above you agree to our </p>
      <a href='/'>terms of use</a>
      </div>
    </form>
    </>
  );
}

export default LoginForm;
