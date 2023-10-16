import React, { useState } from 'react';
import './login.css';
import 'boxicons';
import { Link } from 'react-router-dom';




const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value); 
  };

  const handlePass = (e) => {
    const value = e.target.value;
    setPass(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavsior
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('Email:', email);
    console.log('Password:', pass);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="box_container_login">
        <div className='cover'>
          <h2 className='box_container_login_text'>Login</h2>
          <input className="input_form" type="email" placeholder='Enter Your Email' value={email} onChange={handleEmail} />
          <input className="input_form" type="password" placeholder='Enter Your Password' value={pass} onChange={handlePass} />

          <Link to="/" className="forgot_pass" >Forgot Password?</Link>

          <div className='loginbtn_login'>
            <Link to="/" type="submit" className="login_btn" >Login</Link>
          </div>

          <p>Don't have an account? <Link to="/components/login_register/Register">Signup</Link></p>

          <p>Or</p>
          <div className='googlebtn_btn'>
            <Link to="/" className="google_btn" >
              <img src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="Google Logo" />
              <p>Login with Google</p>
            </Link>
          </div>

        </div>
      </form>
    </section>
  )
}

export default Login;