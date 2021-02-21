import React from "react";
import loginImg from "../../login.svg";
import "./style.scss";
import Cookie from "js-cookie";
import Home from "../Home";
export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname:"",
      lastname:"",
      email: "",
      password: "",
      phonenumber:"",
      region:"",
      birthdate:"",
      type:false
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  async handleRegister(ev) {
    var email = this.state.email;
    var password = this.state.password;
    var firstname = this.state.firstname;
    var lastname = this.state.lastname;    
    var phonenumber = this.state.phonenumber;
    var region = this.state.region;   
    var birthdate = this.state.birthdate;
    var type = this.state.type;
    ev.preventDefault();
    await fetch("https://tranquil-sands-93018.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        firstName:firstname,
        lastName:lastname,
        phoneNumber:phonenumber,
        region:region,
        birthDate:birthdate,
        type:type
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      response.json().then((body) => {
        if (body.error) {
          console.log("there is an error you cannot redirect");
        } else {
          localStorage.setItem("token", body.token);
          localStorage.setItem("user", JSON.stringify(body.userinfo));
          Cookie.set("token", body.token);
          sessionStorage.setItem("token",body.token);
          this.props.callbackFromParents(body.userinfo.type)
          this.props.callbackFromParentsfortoken(body.token)
          if (body.userinfo.type === false) {
            this.props.history.push("/user");
          } else {
            this.props.history.push("/host");
          }
        }
      });
    });
  }
  render() {
    if(Cookie.get("token") && JSON.parse(localStorage.getItem("user")).type === false){
      this.props.history.push("/user")
      return <Home/>
    }
    else if(Cookie.get("token") && JSON.parse(localStorage.getItem("user")).type === true){
      this.props.history.push("/host")
      return <Home/>
    }
    else {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg}  alt=""/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="Enter your first name" value={this.state.firstname}
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="Enter your last name" value={this.state.lastname}
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" value={this.state.email}
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password}
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="number" name="phonenumber" placeholder="Enter your number" maxLength="11" value={this.state.phonenumber}
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="date">Birth date</label>
              <input type="date" name="birthdate" placeholder="Enter your birth date" min="1970-01-01" max="2017-01-01"  value={this.state.birthdate}
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input type="text" name="region" placeholder="Enter your region" value={this.state.region}
                onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
            <label htmlFor="p-type">Choose your type</label>
              <select name="type" id="p-type" value={this.state.type}
                onChange={this.handleChange}>
              <option value="0">User</option>
              <option value="1">Host</option>
              </select>
            </div>

          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleRegister}>
            Register
          </button>
        </div>
      </div>
    );
    }
  }
}