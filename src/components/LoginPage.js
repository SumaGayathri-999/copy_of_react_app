import React from 'react';
import { Link } from 'react-router-dom'
import './loginpage.css';

function LoginPage() {
  return (
    <>
  <h1 className="text-center login_head mb-5">LOGIN</h1>
  <div className="login_container">
    <h6 className="my-3">EMAIL</h6>
    <input type="email" name="email" />
    <h6 className="my-3">PASSWORD</h6>
    <input type="password" name="email" />
    <button className="sign_In_Button col-12 mt-5">SIGN IN</button>
    <Link to="/createAccount" className="ca">
      <h5 className="text-center mt-2 ">Create Account</h5>
    </Link>
  </div>
</>

  )
}

export default LoginPage