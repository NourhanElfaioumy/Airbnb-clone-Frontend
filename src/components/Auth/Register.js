import React from "react";
import loginImg from "../../login.svg";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg}  alt=""/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="Enter your first name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="lastname">First Name</label>
              <input type="text" name="lastname" placeholder="Enter your last name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password"  required/>
            </div>
            {/* <div className="form-group">
              <label htmlFor="password">Password-Confirmation</label>
              <input type="text" name="password" placeholder="confirm your password" />
            </div> */}
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="number" name="phone" placeholder="Enter your number" required/>
            </div>
            <div className="form-group">
              <label htmlFor="date">Birth date</label>
              <input type="date" name="date" placeholder="Enter your birth date" required/>
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input type="text" name="region" placeholder="Enter your region" required/>
            </div>
            <div className="form-group">
            <label for="p-type">Choose your type</label>
              <select name="p-type" id="p-type">
              <option value={0}>User</option>
              <option value={1}>Host</option>
              </select>
            </div>

          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}