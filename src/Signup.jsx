import React from "react";
import { useState } from "react";
import Axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      email: email,
      tel: tel,
      fname: fname,
      lname: lname,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("Account Created successfully");
      }
    });
  };

  return (
    <div>
        <h1>{registerStatus}</h1>
      <form>
        <label>
          Enter email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Enter tel:
          <input
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <label>
          Enter first name:
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </label>
        <label>
          Enter last name:
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>
        <label>
          Enter password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Conferm password:
          <input
            type="text"
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
          />
        </label>
        <input type="submit" onClick={register} />
      </form>
    </div>
  );
}

export default Signup;
