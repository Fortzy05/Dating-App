import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <div className="myBackground">
      <div className="ui container">
        <div className="ui form ">
          <div className="field">
            <label style={{ color: "white" }}>E-mail</label>
            <input type="email" placeholder="joe@schmoe.com" />
          </div>
          <div className="field">
            <label style={{ color: "white" }}>Password</label>
            <input type="password" />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabindex="0" />
              <label style={{ color: "white" }}>Remember Me</label>
            </div>
            <div className=" ui center aligned container">
              <div className="ui large submit button">Login</div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="ui center aligned container">
          <Link to="/CreateAccount">
            <button onClick={clickHandler} className="ui green button">
              Create Account
            </button>
          </Link>
        </div>
        <div className="ui center aligned container">
          <button className="ui facebook button">
            <i className="facebook icon"></i>Login with facebook
          </button>
        </div>
        <div className="ui center aligned container">
          <div className="">
            <button className="ui instagram button">
              <i className="instagram icon"></i>Login with instagram
            </button>
          </div>
        </div>
        <div className="ui center aligned container">
          <div className="">
            <button className="ui twitter button">
              <i className="twitter icon"></i>Login with twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
