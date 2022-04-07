import React from "react";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Gender: "",
      Email: "",
      Phone: "",
      Password: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };
  handleGenderChange = (event) => {
    this.setState({
      Gender: event.target.value,
    });
  };
  handleEmailChange = () => {};

  render() {
    return (
      <section className="main-container">
        <div className="ui container">
          <div style={{ textAlign: "center" }}>
            <h1>First Step To Forever!</h1>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Sign up to meet the one.</h3>
          </div>
          <form onSubmit={this.onFormSubmit} className="ui mini form">
            <div className=" required field">
              <label>Full Name</label>
              <input
                value={this.state.Name}
                onChange={this.handleNameChange}
                type="text"
                name="full name"
                placeholder="Full Name"
              />
            </div>
            <div className=" required field">
              <label>Gender</label>
              <select
                value={this.state.Gender}
                onChange={this.handleGenderChange}
                className="ui dropdown"
              >
                <option value="">Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            <div className=" required field">
              <label>Email</label>
              <input
                value={this.state.Email}
                onChange={this.handleEmailChange}
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="required field">
              <label>Phone Number</label>
              <input
                value={this.state.Phone}
                onChange={this.handlePhoneChange}
                type="text"
                name="phone number"
                placeholder="Phone Number"
              />
            </div>
            <div className="required field">
              <label>Password</label>
              <input
                value={this.state.Password}
                onChange={this.handlePasswordChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className=" required field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="required field">
              <div className="ui toggle checkbox">
                <input type="checkbox" tabIndex="0" />
                <label style={{ color: "white" }}>
                  I would like to recieve your newsletter and other promotional
                  information
                </label>
              </div>
            </div>
            <div className="container">
              <div className="ui center aligned container">
                <button className=" big ui primary button" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div>
            <h4 className="text-color">
              Already have account? <a href="/">Login</a>
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

export default CreateAccount;
