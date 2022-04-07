import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <div className="ui attached stackable menu">
      <div className="ui container">
        <Link to="/">
          <a href="/" className="item">
            <i className="home icon"></i> Home
          </a>
        </Link>

        <a href="/Login" className="item">
          <i className="mail icon"></i> Messages
        </a>
        <div className="ui simple dropdown item">
          More
          <i className="dropdown icon"></i>
          <div className="menu">
            <a href="/" className="item">
              <i className="edit icon"></i> Edit Profile
            </a>
            <a href="/" className="item">
              <i className="globe icon"></i> Choose Language
            </a>
            <a href="/" className="item">
              <i className="settings icon"></i> Account Settings
            </a>
          </div>
        </div>
        <div className="right item">
          <div className="ui input">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
