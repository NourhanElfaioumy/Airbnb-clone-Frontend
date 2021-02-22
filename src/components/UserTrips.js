import React from "react";
import "./HostedHomes.css";
import * as moment from 'moment';
import UserTripsHome from "./UserTripsHome";
class UserTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: "",
      homedetails: [],
      list: "",
    };
    this.gettripdetails = this.gettripdetails.bind(this);
  }
  async gettripdetails(id) {
    await fetch(`https://tranquil-sands-93018.herokuapp.com/user/trip/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) =>
      response.json().then((home) => {
        this.setState({ homedetails: home });
        console.log(home);
      })
    );
  }
  async componentDidMount() {
    await fetch(`https://tranquil-sands-93018.herokuapp.com/user/trips`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) =>
      response.json().then((body) => {
        this.setState({ trips: body });
        this.state.trips.map( (item) => {
           fetch(`https://tranquil-sands-93018.herokuapp.com/user/trip/${item.hostedHomeID}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
          }).then((response) =>
            response.json().then((home) => {
              this.setState({ 
                homedetails: this.state.homedetails.concat([home])
              })
            })
          );
        });
      })
    );
  }
  render() {
    var output= this.state.homedetails.reduce((acc,curr,i)=>{
      acc[i]={...acc[i],name:curr,link:this.state.trips[i]}
      return acc
     },[])
     console.log(output)
    if (this.state.trips) {
      if (this.state.trips.length > 0) {
        return (
          <div className="row">
            {output.map((item) =>(
              <UserTripsHome img={`https://tranquil-sands-93018.herokuapp.com/${item.name[0].images[0].filename}`} name={item.name[0].name} location={item.name[0].location} checkIn={item.link.checkIn} checkOut={item.link.checkOut} guests={item.link.no_Of_Guests} cost={item.link.cost}/>
                //   <div className="col-sm-4 ">
                //   <div className="card">
                //     <div className="image">
                //       <img
                //         src={`${process.env.PUBLIC_URL}/imgs/background.jpg`}
                //         alt=""
                //       />
                //     </div>
                //     <div className="card-inner">
                //       <div className="header">
                //         <h2>{item.name[0].name}</h2>
                //       </div>
                //       <div className="header">
                //         <h3>{item.name[0].location}</h3>
                //       </div>
                //       <div className="content">
                //         <p>CheckIn : {item.link.checkIn}</p>
                //         <p>CheckOut : {item.link.checkOut}</p>
                //         <p>Guests : {item.link.no_Of_Guests}</p>
                //         <p>Cost : {item.link.cost}</p>
                //       </div>
                //     </div>
                //     <div className="justify-content-center d-block text-center"></div>
                //   </div>
                // </div>
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
