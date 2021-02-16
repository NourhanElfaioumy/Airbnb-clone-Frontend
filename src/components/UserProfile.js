import React from "react";
import "./hostProfile.css";
import { withLastLocation } from 'react-router-last-location';
import { Link } from "react-router-dom";
import Error from "./404found"
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  async componentDidMount(){
      await fetch("https://tranquil-sands-93018.herokuapp.com/user/profile",{
          method:"GET",
          headers:{
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token":localStorage.getItem('token')
          },
      }).then(response=>response.json().then((body)=>{
          this.setState({data:body})
      }))
  }
  render() {
    if(!localStorage.getItem('token')){
      this.props.history.push("/error404");
      return <Error/>
    }
    else{
      return (
        <div classNameName="main-profile" style={{ paddingBottom: "50px" }}>
          <div className="main-content">
            <div className="container-fluid mt--7">
              <div className="row">
                <div className="col-xl-12 order-xl-1">
                  <div className="card shadow" style={{ marginTop: "100px" }}>
                    <div className="card-body">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnt6T0yd57zcsFiLX9B0Ig7pzcnyazEeAtg&usqp=CAUD"
                        alt=""
                        style={{
                          width: "200px",
                          height: "200px",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginBottom: "50px",
                        }}
                      />
                      <form>
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Username
                                </label>
                                <input
                                  type="text"
                                  id="input-username"
                                  className="form-control form-control-alternative"
                                  value={
                                    this.state.data.firstName +
                                    " " +
                                    this.state.data.lastName
                                  }
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  id="input-email"
                                  className="form-control form-control-alternative"
                                  value={this.state.data.email}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  First name
                                </label>
                                <input
                                  type="text"
                                  id="input-first-name"
                                  className="form-control form-control-alternative"
                                  value={this.state.data.firstName}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  id="input-last-name"
                                  className="form-control form-control-alternative"
                                  value={this.state.data.lastName}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <h6 className="heading-small text-muted mb-4">
                          Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Phone number
                                </label>
                                <input
                                  id="input-address"
                                  className="form-control form-control-alternative"
                                  type="text"
                                  value={this.state.data.phoneNumber}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="region"
                                >
                                  Region
                                </label>
                                <input
                                  id="input-address"
                                  className="form-control form-control-alternative"
                                  type="text"
                                  value={this.state.data.region}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row"></div>
                        </div>
                      </form>
                      <Link
                        to={{pathname:"/user/editProfile/" + this.state.data._id,userData: this.state.data}}>
                        <button type="button" className="btn btn-danger" style={{ marginLeft: "570px", marginTop: "20px" }}>
                          Edit Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer></footer>
        </div>
      );
                                }
    }

 }
export default withLastLocation(UserProfile);
