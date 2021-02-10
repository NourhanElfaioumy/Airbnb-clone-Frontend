/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import './Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from 'react-bootstrap/Dropdown';
import 'react-dropdown/style.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">

            <img className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="logo"/>

          

            <div className="header__right">
                <p>Become a host</p>
                {/* <LanguageIcon/> */}
                {/* <MenuIcon/> */}
                <Dropdown>
                    <Dropdown.Toggle as={Avatar}>
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item><Link to={"/login"}>Login</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={"/signup"}>Register</Link></Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </div>
           
        </div>
    )
}

export default Header
