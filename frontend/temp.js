import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './temp.css'
class Temp extends Component{
    state = {  } 
    render() { 
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
            <div>
            </div>
            </>
        );
    }
}
 
export default Temp;