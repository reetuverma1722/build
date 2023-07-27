import React from 'react'
import "../css/Login.css";
import Head from '../Components/Head';
import { Link } from 'react-router-dom';
// import {user} from "../image/user-large-solid.svg"
const Login = () => {
  return (<>
    <Head/>
    
   {/* <img src={user} alt='user'/>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path class="fa-primary" d="M0 481.3C0 392.2 72.2 320 161.3 320H350.7C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3z"/><path class="fa-secondary" d="M112 144a144 144 0 1 1 288 0 144 144 0 1 1 -288 0z"/></svg>
    */}
    <div className="container">
    <h1 style={{float:"left" }} ><span> Login</span></h1>
    <i className="fa-light fa-envelope"></i>
        <input className="inp " type="text" placeholder="Email" name="email"/>
        <input  className="inp" type="password" placeholder="Password" name="password"/>
        <button  className="btn" type="submit" value="Login">
   Log In
        </button>
        <Link to="/forget" className="forget">Forget Password?</Link>

    </div>
    <div  className='remember'>

    <input 
     type="checkbox" />
  <label >Remember Me</label><br/>
    </div>
    <p>By using the service ,you agree  to our   <u>  Terms  Of  Services  and  Privacy  Policy</u> </p>
</>
  )
}

export default Login