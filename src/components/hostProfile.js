import React from "react";
import "./hostProfile.css";
import { withLastLocation } from 'react-router-last-location';
import { Link } from "react-router-dom";
import Error from "./404found";
class HostProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datatoEdit: "",
    };
  }
  render() {
    if(!localStorage.getItem("token") || JSON.parse(localStorage.getItem('user')).type !== true){
      this.props.history.push("/error404")
      return <Error/>
    }
    else{
    if(this.props.lastLocation.pathname ==="/host/editProfile/"+this.props.datafromEdit._id){
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
                                    this.props.datafromEdit.firstName +
                                    " " +
                                    this.props.datafromEdit.lastName
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
                                  value={this.props.datafromEdit.email}
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
                                  value={this.props.datafromEdit.firstName}
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
                                  value={this.props.datafromEdit.lastName}
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
                                  value={this.props.datafromEdit.phoneNumber}
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
                                  value={this.props.datafromEdit.region}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row"></div>
                        </div>
                      </form>
                      <Link
                        to={{pathname:"/host/editProfile/" + this.props.datafrompare._id,myCustomProps: this.props.datafromEdit}}>
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
                                    this.props.datafrompare.firstName +
                                    " " +
                                    this.props.datafrompare.lastName
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
                                  value={this.props.datafrompare.email}
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
                                  value={this.props.datafrompare.firstName}
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
                                  value={this.props.datafrompare.lastName}
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
                                  value={this.props.datafrompare.phoneNumber}
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
                                  value={this.props.datafrompare.region}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row"></div>
                        </div>
                      </form>
                      <Link
                        to={{pathname:"/host/editProfile/" + this.props.datafrompare._id,myCustomProps: this.props.datafrompare}}>
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
}

export default withLastLocation(HostProfile);
