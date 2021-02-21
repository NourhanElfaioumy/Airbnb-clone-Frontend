import React from "react";
import "../../AdminDashboard.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          usersdata:""
        }
        this.allusers= this.allusers.bind(this);
    }
    async allusers(){
      await fetch("https://tranquil-sands-93018.herokuapp.com/admin/users",{
        method:"GET",
        headers:{
          "Content-type": "application/json; charset=UTF-8",
        }
      }).then(response=>response.json().then(body=>{
        this.setState({usersdata:body})
      }))
    }
    render() { 
        return ( 
            <div id="sidebar">
            <div className="sidebar__title">
              <i
                onclick="closeSidebar()"
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
              ></i>
            </div>
            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-home"></i>
                <Link to="/admin">Dashboard</Link>
              </div>
              <h2>Manages</h2>
              <div className="sidebar__link">
                <i className="fa fa-user-secret" aria-hidden="true"></i>
                <Link to='/admin/users'>Users</Link>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-user-secret" aria-hidden="true"></i>
                <Link to="/admin/homes">Homes</Link>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-building-o"></i>
                <Link to="/admin/reservations">Reservations</Link>
              </div>
              <div className="sidebar__logout">
                <i className="fa fa-power-off"></i>
                <Link to={"/logout"} onClick={()=>{
                  localStorage.clear();
                  sessionStorage.clear();
                  Cookies.remove("token")
                  window.location.replace("/admin");
                }} >Log out</Link>
              </div>
            </div>
          </div>
        );
    }
}
 
export default AdminSidebar;