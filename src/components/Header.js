import React from "react";
import "./Header.css";
import Cookies from "js-cookie";
import { useLocation, useHistory } from "react-router-dom";
import "react-dropdown/style.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
const Header = ({ dataFromParent, token, propss }) => {
  const location = useLocation();
  const history = useHistory();
  const handleHostProfile = async (ev) => {
    ev.preventDefault();
    await fetch("https://tranquil-sands-93018.herokuapp.com/host/profile", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      response.json().then((body) => {
        var data = body;
        propss(data);
        history.push("/host/profile");
      });
    });
  };

  if (
    Cookies.get("token") &&
    JSON.parse(localStorage.getItem("user")).type === true &&
    location.pathname.includes("/host")
  ) {
    return (
      <div className="header">
        <Link to="/host">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="logo"
          />
        </Link>
        <div className="header__right">
          <p>Become a host</p>
          {/* <LanguageIcon/> */}
          <div class="dropdown open">
            <button
              type="button"
              className="btn dropdown"
              data-toggle="dropdown"
            >
              <Avatar />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <Link
                className="dropdown-item"
                to={"/host/profile"}
                onClick={handleHostProfile}
              >
                Profile
              </Link>
              <Link className="dropdown-item" to={"/host/hostedhomes"}>
                Homes
              </Link>
              <Link className="dropdown-item" to={"/host/hosthome"}>
                Host a Home
              </Link>
              <Link
                className="dropdown-item"
                to={"/logout"}
                onClick={() => {
                  sessionStorage.clear();
                  localStorage.clear();
                  Cookies.remove("token");
                  window.location.replace("/");
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (
    Cookies.get("token") &&
    JSON.parse(localStorage.getItem("user")).type === false &&
    location.pathname.includes("/user")
  ) {
    return (
      <div className="header">
        <Link to="/user">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="logo"
          />
        </Link>
        <div className="header__right">
          <p>Become a host</p>
          {/* <LanguageIcon/> */}
          <div class="dropdown open">
            <button
              type="button"
              className="btn dropdown"
              data-toggle="dropdown"
            >
              <Avatar />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <Link className="dropdown-item" to={"/user/profile"}>
                Profile
              </Link>
              <Link className="dropdown-item" to={"/user/trips"}>
                Trips
              </Link>
              <Link
                className="dropdown-item"
                to={"/logout"}
                onClick={() => {
                  localStorage.clear();
                  sessionStorage.clear();
                  Cookies.remove("token");
                  window.location.replace("/");
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname.includes("/error404")) {
    return null;
  } else {
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="logo"
          />
        </Link>
        <div className="header__right">
          <p>Become a host</p>
          {/* <LanguageIcon/> */}
          <div class="dropdown open">
            <button
              type="button"
              className="btn dropdown"
              data-toggle="dropdown"
            >
              <Avatar />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <Link class="dropdown-item" to={"/login"}>
                Login
              </Link>
              <Link class="dropdown-item" to={"/signup"}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
