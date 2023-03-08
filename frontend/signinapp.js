import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./frontpage.css";
function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
        <Link to={'/db'}><h1>Datas</h1></Link>
        </div>    <form onSubmit={handleSubmit}>
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
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      </div>
      <div id='buttons'>

      {/* <button type="submit" id='up'>Update</button> */}
      <button type="submit">SIGN IN</button>
      {/* <button type="submit" id='del'>Delete</button> */}
      </div>
      <p>create new account  <Link to='/signup' style={{color:'gray'}}> Sign up</Link></p>
    </form>
    </>
  );
}

export default Login;
