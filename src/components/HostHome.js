import React from "react";
import "./HostHome.css";
import { $ }  from 'react-jquery-plugin';
import Error from "./404found";
class HostHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      location: "",
      name: "",
      type: "",
      guests: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      proptype: "",
      pool: false,
      gym: false,
      bfront: false,
      images:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleHostHome = this.handleHostHome.bind(this);
    this.onFileChange= this.onFileChange.bind(this)
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
  onFileChange(e) {
    this.setState({ images: e.target.files })
  }
  async handleHostHome(e) {
    e.preventDefault();
    const data = new FormData();
    for (const key of Object.keys(this.state.images)) {
      data.append('images', this.state.images[key])
    }
   // data.append('images', this.state.images);
    data.append('name', this.state.name);
    data.append('address', this.state.address);
    data.append('location', this.state.location);
    data.append('type', this.state.type);
    data.append('no_Of_Guests', this.state.guests);
    data.append('averagePricePerNight', this.state.price);
    data.append('no_Of_Bedrooms', this.state.bedrooms);
    data.append('no_Of_Bathrooms', this.state.bathrooms);
    data.append('propertyType', this.state.proptype);
    data.append('pool', this.state.pool);
    data.append('Gym', this.state.gym);
    data.append('BeachFront', this.state.bfront);
    await fetch("https://tranquil-sands-93018.herokuapp.com/host/hostHome", {
      method: "POST",
      body: data,
      // JSON.stringify({
      //   address: this.state.address,
      //   location: this.state.location,
      //   name: this.state.name,
      //   type: this.state.type,
      //   no_Of_Guests: this.state.guests,
      //   averagePricePerNight: this.state.price,
      //   no_Of_Bedrooms: this.state.bedrooms,
      //   no_Of_Bathrooms: this.state.bathrooms,
      //   propertyType: this.state.proptype,
      //   pool: this.state.pool,
      //   Gym: this.state.gym,
      //   BeachFront: this.state.bfront,
      //   images:this.state.images
      // }),
      headers: {
        // "Content-type": "application/json; charset=UTF-8",
        'Accept': 'application/json',
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((response) =>
        response.json().then(async (body) => {
          if(body.message === "No token provided."){
            this.props.history.push('/error404');
          }
            this.props.history.push('/host/hostedhomes');
        })
      ).catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.images)
    if(!localStorage.getItem("token") || JSON.parse(localStorage.getItem('user')).type !== true){
      this.props.history.push('/error404')
      return <Error/>
    }
    else{
    return (
      <div id="booking" className="section" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/background.jpg')`,}}>
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
                  <form encType="multipart/form-data" method="POST">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="address"
                            onChange={this.handleChange}
                            required
                            value={this.state.address}
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
                            onChange={this.handleChange}
                            required
                            value={this.state.location}
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
                            onChange={this.handleChange}
                            required
                            value={this.state.name}
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
                            onChange={this.handleChange}
                            placeholder="Chooese Your Type"
                            defaultValue="Entire Place"
                            value={this.state.type}
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
                            onChange={this.handleChange}
                            required
                            value={this.state.guests}
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
                            onChange={this.handleChange}
                            required
                            value={this.state.price}
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
                            onChange={this.handleChange}
                            required
                            value={this.state.bedrooms}
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
                            onChange={this.handleChange}
                            required
                            value={this.state.bathrooms}
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
                            onChange={this.handleChange}
                            defaultValue="Apartment"
                            value={this.state.proptype}
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
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="file" name="images" className="form-control" onChange={this.onFileChange} multiple/>
                          <span className="form-label">Images</span>
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
                            onChange={this.handleChange}
                            value={this.state.pool}
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
                            onChange={this.handleChange}
                            value={this.state.gym}
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
                            onChange={this.handleChange}
                            value={this.state.bfront}
                          />
                          <label htmlFor="beachfront">Beach Front</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button
                        className="submit-btn"
                        onClick={this.handleHostHome}
                      >
                        Host
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
  componentDidMount(){
    $('.form-control').each(function () {
			floatedLabel($(this));
		});

		$('.form-control').on('input', function () {
			floatedLabel($(this));
		});

		function floatedLabel(input) {
			var $field = input.closest('.form-group');
			if (input.val()) {
				$field.addClass('input-not-empty');
			} else {
				$field.removeClass('input-not-empty');
			}
		}
  }
}

export default HostHome;
