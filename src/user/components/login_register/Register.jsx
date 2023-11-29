import React, { useState, useEffect } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import google from "../../../img/google.png";
import { AiOutlineClose } from "react-icons/ai";
import { MdPattern } from "react-icons/md";
// ... (your existing imports)

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  // Kongchan
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  console.log("1" + successMsg);
  console.log("2" + errorMsg);
  console.log("3" + message);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  // ... (your existing event handler functions)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};

    if (!firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "email is required";
    }

    if (!phoneNumber.trim()) {
      validationErrors.phoneNumber = "Phone number is required";
    }

    if (!password.trim()) {
      validationErrors.password = "password is required";
    } else if (password.length < 5) {
      validationErrors.password = "password should be at least 6 char";
    }

    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "password not matched";
    }
    // ... (your existing validation logic)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowSuccess(false);
      return;
    }

    // Proceed with form submission
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      fname: firstName,
      lname: lastName,
      tel: phoneNumber,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setShowSuccess(true);
          // setErrors({});
          setSuccessMsg(result.Status);
          navigate("/register");
        } else {
          setErrorMsg(result.Error);
          setShowSuccess(false);
          navigate("/register");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(true);

    // Set timers to remove classes after a certain time
    const timer1 = setTimeout(() => {
      setIsActive(false);
    }, 5000);

    const timer2 = setTimeout(() => {
      // Additional cleanup or actions after 300 milliseconds
    }, 5300);

    // Clear timers on component unmount or when needed
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  const handleToastClose = () => {
    setIsActive(false);

    // Additional cleanup or actions after 300 milliseconds
    setTimeout(() => {
      // Additional cleanup or actions after 300 milliseconds
    }, 300);
  };

  return (
    <div className="box_container">
      <div className="container_register">
        <div className="box_cancel_register">
          <h2 className="text_register">Register</h2>
          <Link to="/">
            <AiOutlineClose id="icon_cancel_register" />
          </Link>
        </div>
        {/* {if(setSuccessMsg === "Success") : success ? error} */}
        
        {/* Display success message */}
        <form className="box_form_register">
          {/* Display validation errors */}
          <div className="box_form1">
            <div>
              <input
                className="input_form1"
                type="name"
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                className="input_form1"
                type="name"
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <input
              className="input_form1"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <input
              className="input_form1"
              type="phonenumber"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {errors.phoneNumber && (
              <p className="error-message">{errors.phoneNumber}</p>
            )}
          </div>
          <div>
            <input
              className="input_form1"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              className="input_form1"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>

          <button onClick={handleSubmit} type="submit" className="signup_btn">
            Signup
          </button>
        </form>

        <div className="box_already">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="loginmoreLink">
              Login
            </Link>
          </p>
          <p>Or</p>
          <Link to="#" className="google_btn">
            <img src={google} alt="img" />
            <p>Login with Google</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
