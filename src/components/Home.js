import React from "react";
import "./Home.css";
import { Cards } from "./Cards";
import Error from "./404found";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      fromDate: "",
      toDate: "",
      guests: "",
      type: "text",
      data: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  async onSearch(e) {
    e.preventDefault();
    await fetch("https://tranquil-sands-93018.herokuapp.com/search", {
      method: "POST",
      body: JSON.stringify({
        location: this.state.location,
        no_Of_Guests:Number(this.state.guests),
        fromDate: this.state.fromDate,
        toDate: this.state.toDate,
      }),
      headers: {
        'Accept': 'application/json',
        "Content-type": "application/json",
      },
    }).then(
      (response) =>
        {response.json().then((body) => {
          this.setState({ data: body });
          this.props.data(this.state.data)
          this.props.searchData({location: this.state.location,guests:Number(this.state.guests),fromDate: this.state.fromDate,toDate: this.state.toDate})
          this.props.history.push("/user/search");
        })
        }).catch(err=>console.log(err));
  }
  render() {
    
    if(!localStorage.getItem("token") && (window.location.pathname === '/user' || window.location.pathname === '/host')){
      this.props.history.push('/error404');
      return(<Error/>)
    }
    else if((localStorage.getItem("user") && JSON.parse(localStorage.getItem('user')).type === true) || (!localStorage.getItem("token") && !localStorage.getItem("user"))){
      return (
        <div className="home">
        <div className="input-group row  justify-content-center pt-5" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/background.jpg')`,backgroundSize: "100%",height: "300px",}}>
        </div>
        <Cards />
        {/* <Footer/> */}
      </div>
      )
    }
    else{
    return (
      <div className="home">
        <div
          className="input-group row  justify-content-center pt-5"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/imgs/background.jpg')`,
            backgroundSize: "100%",
            height: "300px",
          }}
        >
          <div className="form-outline mr-2">
            <input
              id="search-input1"
              type="text"
              className="form-control"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-outline mr-2">
            <input
              id="search-input2"
              type="date"
              className="form-control"
              placeholder="From Date"
              name="fromDate"
              value={this.state.fromDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-outline mr-2">
            <input
              id="search-input3"
              type="date"
              className="form-control"
              placeholder="To Date"
              name="toDate"
              value={this.state.toDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-outline mr-2">
            <input
              id="search-input4"
              type="number"
              className="form-control"
              placeholder="Guests"
              name="guests"
              value={this.state.guests}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            id="search-button"
            type="button"
            className="btn btn-primary"
            style={{ height: "38px" }}
            onClick={this.onSearch}
          >
            Search
          </button>
        </div>
        <Cards />
        {/* <Footer/> */}
      </div>
    );
  }
  }
}

export default Home;
