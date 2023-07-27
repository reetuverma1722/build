import React from 'react';
import Head from '../Components/Head';
import "../css/Forget.css"
const Forget = () => {
  return (
    <>
        
<div>
<Head/>
 <div className='container'>
  <h1>Forget Password ? </h1>
  <div className='container1'>
   Enter Your e-mail or phone associated with the account to receive a verification code.
  </div>
 
  <input  className="inp" type='text' placeholder='Email or Phone'/>
 <button className='btn1'> Send</button>
 </div>
</div>
        
    </>
  )
}

export default Forget