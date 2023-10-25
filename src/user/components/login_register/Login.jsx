
import React, { useState } from 'react';
import './login.css';
import 'boxicons';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai"
import google from '../../../img/google.png';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value); 
  };

  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavsior
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="box_container_login2">
        <div className='box_cancel_login'>
          <Link to="/humascot-taca"><AiOutlineClose id="icon_cancel_login"/></Link>
        </div>
        <div className='cover'>
          <h2 className='box_container_login_text'>Login</h2>
          <input className="input_form" type="email" placeholder='Enter Your Email' value={email} onChange={handleEmail} />
          <input className="input_form" type="password" placeholder='Enter Your Password' value={password} onChange={handlePassword} />

          <Link to="#" className="forgot_password" >Forgot Password?</Link>

          <div className='loginbtn_login'>
            <Link to="#" type="submit" className="login_btn" >Login</Link>
          </div>

          <p>Don't have an account? <Link to="/humascot-taca/register">Signup</Link></p>

          <p>Or</p>
          <div className='googlebtn_btn'>
            <Link to="#" className="google_btn" >
              <img src={google} alt="img" />
              <p>Login with Google</p>
            </Link>
          </div>

        </div>
      </form>
    </section>
  )
}

export default Login;