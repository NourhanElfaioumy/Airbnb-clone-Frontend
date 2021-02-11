/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./Header.css";
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom'
// import LanguageIcon from "@material-ui/icons/Language";
// import MenuIcon from "@material-ui/icons/Menu";
import Dropdown from "react-bootstrap/Dropdown";
import "react-dropdown/style.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
const Header = ({ dataFromParent,token}) => {
  const location = useLocation();
  const handleHostProfile=()=>{

  }
  if (Cookies.get('token') && location.pathname ==='/host') {
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
          <Dropdown>
            <Dropdown.Toggle
              as={Avatar}
              style={{ width: "45px", borderRadius: "2px" }}
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={"/host/profile"}>Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/host/hosthome"}>Host a Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/logout"} onClick={()=>{
                    sessionStorage.clear()
                    localStorage.clear()
                    Cookies.remove('token')
                    window.location.replace('/')
                }}>Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  } else if (Cookies.get('token') && location.pathname === "/user") {
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
          <Dropdown>
            <Dropdown.Toggle
              as={Avatar}
              style={{ width: "45px", borderRadius: "2px" }}
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={"/user/profile"}>Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/user/trips"}>Trips</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/logout"} onClick={()=>{
                    localStorage.clear()
                    sessionStorage.clear()
                    Cookies.remove('token')
                    window.location.replace('/');
                }}>Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
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
          <Dropdown>
            <Dropdown.Toggle
              as={Avatar}
              style={{ width: "45px", borderRadius: "2px" }}
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={"/login"}>Login</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/signup"}>Register</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
};

export default Header;
