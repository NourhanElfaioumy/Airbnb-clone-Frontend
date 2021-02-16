import React from "react";
import Error from "./404found";
//import {Link, useHistory} from "react-router-dom";
class EditUserProfile extends React.Component {
    constructor(props) {
        super(props);
        if(!this.props.location.userData && !localStorage.getItem("token")){
          this.props.history.push("/error404")
        }
        else{
        this.state = {
            email:this.props.location.userData.email,
            firstname:this.props.location.userData.firstName,
            lastname:this.props.location.userData.lastName,
            phone:this.props.location.userData.phoneNumber,
            region:this.props.location.userData.region
        }
        this.handleEditProfile = this.handleEditProfile.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    async handleEditProfile(e){
        e.preventDefault();
        await fetch(`https://tranquil-sands-93018.herokuapp.com/user/editProfile/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                email: this.state.email,
                firstName:this.state.firstname,
                lastName: this.state.lastname,
                phoneNumber:this.state.phone,
                region:this.state.region
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
          }).then(response => response.json()).then(result => {
            if(!localStorage.getItem('token')){
              this.props.history.push('/error404');
            }
            else{
              this.props.history.push('/user/profile')
            }
          }).catch(error => {
            console.error('Error:', error);
          });
    }
    render() {
      if(!localStorage.getItem("token") || JSON.parse(localStorage.getItem('user')).type !== false){
        this.props.history.push("/error404")
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
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-control-label" htmlFor="input-email">
                                Email address
                              </label>
                              <input type="email" id="input-email" className="form-control form-control-alternative" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-first-name">
                                First name
                              </label>
                              <input type="text" id="input-first-name" className="form-control form-control-alternative" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-last-name">
                                Last name
                              </label>
                              <input type="text" id="input-last-name" className="form-control form-control-alternative" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
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
                              <label className="form-control-label" htmlFor="input-address">
                                Phone number
                              </label>
                              <input id="input-address" className="form-control form-control-alternative" type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="region">
                                Region
                              </label>
                              <input id="input-address" className="form-control form-control-alternative" type="text" name="region" value={this.state.region} onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row"></div>
                      </div>
                    </form>
                    <button type="button" onClick={this.handleEditProfile} className="btn btn-danger" style={{ marginLeft: "570px", marginTop: "20px" }}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>);
    }}
}
 
export default EditUserProfile;