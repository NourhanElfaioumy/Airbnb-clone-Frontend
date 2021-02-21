import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminHeader from "./components/Admin/AdminHeader";
import AdminSidebar from "./components/Admin/AdminSidebar";
import AdminHome from "./components/Admin/AdminDashboard";
import Usertable from "./components/Admin/Usertable";
import Reservationtable from "./components/Admin/Reservationtable";
import Hosttable from "./components/Admin/Hosttable";
import "./AdminDashboard.css";
import Cookies from "js-cookie"
import AdminLogin from "./components/Admin/AdminLogin";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        if(!Cookies.get("token")){
            return(
                <AdminLogin/>
            )
        }
        else{
        return (
        <div className="container-fluid" style={{display:"grid",height: "100vh",gridTemplateColumns:"0.8fr 1fr 1fr 1fr",gridTemplateRows:"0.2fr 3fr",gridTemplateAreas:"'sidebar nav nav nav' 'sidebar main main main'"}}>
            <Router>
                <AdminHeader/>
                <main>
                <Switch>
                    <Route exact path="/admin" component={AdminHome}/>
                    <Route exact path="/admin/users" component={Usertable}/>
                    <Route exact path="/admin/homes" component={Hosttable}/>
                    <Route exact path="/admin/reservations" component={Reservationtable}/>
                </Switch>
                </main>
                <AdminSidebar/>
            </Router>
        </div>
        );
        }
    }
}
 
export default Admin;