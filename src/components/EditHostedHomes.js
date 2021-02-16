import React from "react";
import "./HostHome.css";
import { $ } from "react-jquery-plugin";
import Error from "./404found";
class EditHostedHomes extends React.Component {
  constructor(props,{history}) {
    super(props);
    if(!this.props.location.userData && !localStorage.getItem("token")){
      this.props.history.push("/error404")
    }
    else{
    this.state = {
      address: this.props.dataFromHomes.address,
      location: this.props.dataFromHomes.location,
      name: this.props.dataFromHomes.name,
      type: this.props.dataFromHomes.type,
      guests: this.props.dataFromHomes.no_Of_Guests,
      price: this.props.dataFromHomes.averagePricePerNight,
      bedrooms: this.props.dataFromHomes.no_Of_Bedrooms,
      bathrooms: this.props.dataFromHomes.no_Of_Bathrooms,
      proptype: this.props.dataFromHomes.propertyType,
      pool: this.props.dataFromHomes.pool,
      gym: this.props.dataFromHomes.Gym,
      bfront: this.props.dataFromHomes.BeachFront,
    };
    this.editData = this.editData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  }
  componentDidMount() {
    $(".form-control").each(function () {
      floatedLabel($(this));
    });

    $(".form-control").on("input", function () {
      floatedLabel($(this));
    });

    function floatedLabel(input) {
      var $field = input.closest(".form-group");
      if (input.val()) {
        $field.addClass("input-not-empty");
      } else {
        $field.removeClass("input-not-empty");
      }
    }
  }
  handleChange(evt) {
    if (
      evt.target.name === "pool" ||
      evt.target.name === "gym" ||
      evt.target.name === "bfront"
    ) {
      this.setState({ [evt.target.name]: evt.target.checked });
    } else {
      this.setState({ [evt.target.name]: evt.target.value });
    }
  }
  async editData(e) {
    e.preventDefault();
    await fetch(
      `https://tranquil-sands-93018.herokuapp.com/host/editHostedHome/${this.props.dataFromHomes._id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          address: this.state.address,
          location: this.state.location,
          name: this.state.name,
          type: this.state.type,
          no_Of_Guests: this.state.guests,
          averagePricePerNight: this.state.price,
          no_Of_Bedrooms: this.state.bedrooms,
          no_Of_Bathrooms: this.state.bathrooms,
          propertyType: this.state.proptype,
          pool: this.state.pool,
          Gym: this.state.gym,
          BeachFront: this.state.bfront,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) =>response.json().then(async(body) => {
      if(!localStorage.getItem('token')){
        this.props.history.push('/error404');
      }
      else{
        this.props.history.push('/host/hostedhomes');
      }
        })
      ).catch((err) => {
        console.log(err);
      });
  }
  render() {
    if(!localStorage.getItem("token" || JSON.parse(localStorage.getItem('user')).type !== true)){
      this.props.history.push("/error404")
      return <Error/>
    }
    else{
    return (
      <div
        id="booking"
        className="section"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/background.jpg')`,
        }}
      >
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="booking-cta">
                  <h1>Host Your home</h1>
                </div>
              </div>
              <div className="col-md-6 col-md-offset-1">
                <div className="booking-form">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="address"
                            required
                            value={this.state.address}
                            onChange={this.handleChange}
                          />
                          <span className="form-label">Address</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="location"
                            required
                            value={this.state.location}
                            onChange={this.handleChange}
                          />
                          <span className="form-label">Location</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                          />
                          <span className="form-label">Name</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <span className="form-label">Chooese Your Type</span>
                          <select
                            required
                            className="form-control"
                            name="type"
                            placeholder="Chooese Your Type"
                            defaultValue="Entire Place"
                            value={this.state.type}
                            onChange={this.handleChange}
                          >
                            <option value="" disabled selected>
                              Chooese Your Type
                            </option>
                            <option value="Entire Place">Entire Place</option>
                            <option value="Private Room">Private Room</option>
                            <option value="Shared Room">Shared Room</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Guests</span>
                          <input
                            className="form-control"
                            type="number"
                            name="guests"
                            required
                            value={this.state.guests}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Price</span>
                          <input
                            className="form-control"
                            type="number"
                            name="price"
                            required
                            value={this.state.price}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="number"
                            name="bedrooms"
                            required
                            value={this.state.bedrooms}
                            onChange={this.handleChange}
                          />
                          <span className="form-label">Bedrooms</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="number"
                            name="bathrooms"
                            required
                            value={this.state.bathrooms}
                            onChange={this.handleChange}
                          />
                          <span className="form-label">Bathrooms</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <span className="form-label">Property Type</span>
                          <select
                            required
                            className="form-control"
                            placeholder="Property Type"
                            name="proptype"
                            defaultValue="Apartment"
                            value={this.state.proptype}
                            onChange={this.handleChange}
                          >
                            <option value="" disabled selected>
                              Property Type
                            </option>
                            <option value="Apartment">Apartment</option>
                            <option value="Bed and breakfast">
                              Bed and breakfast
                            </option>
                            <option value="Boutique hotel">
                              Boutique hotel
                            </option>
                            <option value="House">House</option>
                            <option value="Secondary unit">
                              Secondary unit
                            </option>
                            <option value="Unique space">Unique space</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="checkbox"
                            id="pool"
                            name="pool"
                            value={this.state.pool}
                            onChange={this.handleChange}
                          />
                          <label htmlFor="pool">Pool</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="checkbox"
                            id="gym"
                            name="gym"
                            value={this.state.gym}
                            onChange={this.handleChange}
                          />
                          <label htmlFor="gym">Gym</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="checkbox"
                            id="beachfront"
                            name="beachfront"
                            value={this.state.bfront}
                            onChange={this.handleChange}
                          />
                          <label htmlFor="beachfront">Beach Front</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button className="submit-btn" onClick={this.editData}>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }
  }
}

export default EditHostedHomes;
