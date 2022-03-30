import { Link } from "react-router-dom";
import React, { useState }from "react";
import pablo from '../assets/pablo-sign-in-1.svg';
import logo from '../assets/icon.svg';
import banner from '../assets/banner.svg';
import axios from "axios";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const email = { email, password };
      // send the username and password to the server
    const response = await axios.post(
    "http://blogservice.herokuapp.com/api/login",
    email
  );
  setEmail(response.data)
  localStorage.setItem('email', response.data)
  console.log(response.data)
  };

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (        
      <div id="loginPage">        
        <nav className="navbar bg-none">
          <div className="d-inline container pt-5">
            <img className="px-3" src={logo} alt="" />
            <img src={banner} alt="" />
          </div>
        </nav>
      <div className="container vh-90 d-flex align-items-center flex-row"> 
        <div className="col-6 d-none d-md-block">
          <img className="img-fluid" src={pablo} alt="" />
        </div>
        <div className="col-10 col-md-6 px-3">
            <h2 className="h2blue pb-1">Welcome!</h2>
            <p className="pb-4">Enter details to login.</p>
            <div className="w-100">
          <form id="loginForm" action="" onSubmit={handleSubmit} className="form-text">
            <input type="email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} className="my-3 py-2 pl-2"/>
            <div className="d-flex flex-row">
              <input id="password" type={passwordShow ? "text" : "password"} placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} className="w-100 position-relative my-2 py-2 pl-2" />
              <p onClick={togglePassword} className="pr-2 cursor-pointer pt-2 mt-2 position-absolute">SHOW</p>
            </div>
            <p className="py-2">FORGOT PASSWORD ?</p>
            <Link to="/Dashboard"><button type="submit" className="py-2 w-100">Login</button></Link>
          </form>
            </div>
        </div>
      </div>
      </div>

  )
}

export default LoginPage