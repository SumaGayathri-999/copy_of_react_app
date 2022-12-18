import React from 'react'
import './loginpage.css';


function CreateAccount() {
  return (
    <>
  <h1 className="text-center login_head  mb-5">CREATE ACCOUNT</h1>
  <div className="login_container">
    <h6 className="my-3">FIRST NAME</h6>
    <input type="text" name="first_name" />
    <h6 className="my-3">LAST NAME</h6>
    <input type="text" name="last_name" />
    <h6 className="my-3">EMAIL</h6>
    <input type="email" name="email" />
    <h6 className="my-3">PASSWORD</h6>
    <input type="password" name="email" />
    <button className="sign_In_Button col-12 mt-5">CREATE</button>
  </div>
</>

  )
}

export default CreateAccount