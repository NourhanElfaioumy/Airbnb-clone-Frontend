import React from "react";
import "./style.scss";
import loginImg from "../../login.svg";
import Cookie from "js-cookie";
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  sendData = (body) => {
    this.props.parentCallback(body);
  };
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  async handleLogin(ev) {
    var email = this.state.email;
    var password = this.state.password;
    ev.preventDefault();
    const data = { email: email, password: password };
    await fetch("http://localhost:9000/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
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
          Cookie.set("token", body.token);
          this.props.callbackFromParents(body.userinfo.type)
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
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
