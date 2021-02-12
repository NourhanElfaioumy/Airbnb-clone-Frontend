import React from "react";
import "./hostProfile.css"
class HostProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.datafrompare);
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
                                value={this.props.datafrompare.firstName+" "+this.props.datafrompare.lastName}
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
                              disabled/>
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
                              disabled/>
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
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "570px", marginTop: "20px" }}
                    >
                      Edit Profile
                    </button>
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

export default HostProfile;
