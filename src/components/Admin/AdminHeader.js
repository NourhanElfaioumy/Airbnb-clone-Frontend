import "../../AdminDashboard.css";
import React from "react";

class AdminHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav className="navbar">
              <div className="nav_icon" onclick="toggleSidebar()">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
              <div className="navbar__left">
                  Admin
              </div>
            </nav>
        );
    }
}
 
export default AdminHeader;