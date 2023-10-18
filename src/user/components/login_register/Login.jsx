
import React, { useState } from 'react';
import './login.css';
import 'boxicons';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai"
import google from '../../../img/google.png';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavsior
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          localStorage.setItem("token", res.data.Token)
          console.log("login token: " + res.data.Token);
          navigate("/humascot-taca/");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>

      <form className="box_container_login">
        <div className="cover">
          <h2 className="box_container_login_text">Login</h2>
          <h1>{error && error}</h1>
          <input
            className="input_form"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            className="input_form"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={handlePassword}
          />

          <Link to="#" className="forgot_pass">
            Forgot Password?
          </Link>

          <div className="loginbtn_login">
            <button type="button" className="login_btn" onClick={handleSubmit}>
              Login
            </button>
          </div>

          <p>
            Don't have an account?{" "}
            <Link to="/humascot-taca/register">Signup</Link>
          </p>

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
  );
};

export default Login;
