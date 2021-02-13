import React from "react";
import "./HostedHomes.css";
class UserTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: "",
      homedetails: "",
    };
    this.gettripdetails = this.gettripdetails.bind(this)
  }
   gettripdetails(id) {
     fetch(`http://localhost:9000/user/trip/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json().then((home) => {
        this.setState({homedetails:home})
    }));
  }
  componentDidMount() {
    fetch(`http://localhost:9000/user/trips`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) =>
      response.json().then((body) => {
        this.setState({ trips: body });
      })
    );
  }
  render() {
    if (this.state.trips) {
      if (this.state.trips.length > 0) {
        return (
          <div className="row">
            {this.state.trips.map((item) =>(
                this.gettripdetails(item.hostedHomeID),
              <div className="col-sm-4 ">
                <div className="card">
                  <div className="image">
                    <img
                      src={`${process.env.PUBLIC_URL}/imgs/background.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="card-inner">
                    <div className="header">
                      <h2>{this.state.homedetails.name}</h2>
                    </div>
                    <div className="header">
                    <h3>{this.state.homedetails.location}</h3>
                    </div>
                    <div className="content">
                      <p>CheckIn : {item.checkIn}</p>
                      <p>CheckOut : {item.checkOut}</p>
                      <p>Guests : {item.no_Of_Guests}</p>
                      <p>Cost : {item.cost}</p>
                    </div>
                  </div>
                  <div className="justify-content-center d-block text-center"></div>
                </div>
              </div>
            ))}
          </div>
        );
      } else {
        return <h1>No Reservations</h1>;
      }
    } else {
      return <h1>No Reaservations Please reserve and check again</h1>;
    }
  }
}

export default UserTrips;
