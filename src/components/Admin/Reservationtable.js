import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ReservationData from "./reservationdata";

export default class Reservationtable extends React.Component {
  constructor(props){
    super(props);
    this.state={
      reservationsdata:null
    }
  }
 componentDidMount(){
   fetch("https://tranquil-sands-93018.herokuapp.com/admin/reservations",{
      method:"GET",
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      }
    }).then(response=>response.json().then(body=>{
      this.setState({reservationsdata:body})
    }))
  }
  render(){
    if (this.state.reservationsdata) {
      if (this.state.reservationsdata.length > 0) {
    return (
      <div className="container-fluid">
        <h2>Reservation</h2>
        <table class="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">Check in</th>
              <th scope="col">Check out</th>
              <th scope="col">Cost</th>
              <th scope="col">Guests</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {(this.state.reservationsdata).map((reservation)=>(
            <ReservationData reservation={reservation}/>
            ))}
          </tbody>
        </table>
      </div>
    );
          }else{
            return <h2>No reservation</h2>
          }
        }else{
          return <h2>loading ...</h2>
        }
  };
}
