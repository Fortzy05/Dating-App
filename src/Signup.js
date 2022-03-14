import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div style={{ textAlign: "center" }}>
          <h1>First Step To Forever!</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Sign up to meet the one.</h3>
        </div>
        <form className="ui form">
          <div className="field">
            <label>Full Name</label>
            <input type="text" name="first-name" placeholder="Full Name" />
          </div>
          <div className="field">
            <label>Gender</label>
            <select class="ui dropdown">
              <option value="">Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="last-name" placeholder="Email" />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="text" name="first-name" placeholder="Phone Number" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="text" name="first-name" placeholder="Password" />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="text"
              name="first-name"
              placeholder="Confirm Password"
            />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <div className="container">
            <div className="vertical centered">
              <button className="ui large green button" type="submit">
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
