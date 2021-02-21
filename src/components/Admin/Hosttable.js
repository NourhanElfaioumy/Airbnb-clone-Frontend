import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import HostData from "./hostdata";

export default class Hosttable extends React.Component {
  constructor(props){
    super(props);
    this.state={
      homesdata:null
    }
  }
 componentDidMount(){
   fetch("https://tranquil-sands-93018.herokuapp.com/admin/homes",{
      method:"GET",
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      }
    }).then(response=>response.json().then(body=>{
      this.setState({homesdata:body})
    }))
  }
  render(){
    if (this.state.homesdata) {
      if (this.state.homesdata.length > 0) {
    return (
      <div className="container-fluid">
        <h2>Hosts</h2>
        <table class="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">Address</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Guests</th>
              <th scope="col">Price/Night</th>
              <th scope="col">Beadrooms</th>
              <th scope="col">Bathrooms</th>
              <th scope="col">Property Type</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {(this.state.homesdata).map((home)=>(
            <HostData home={home}/>
            ))}
          </tbody>
        </table>
      </div>
    );
      }else{
        return <h2>No Homes</h2>
      }
    }else{
      return <h2>Loading ...</h2>
    }
  };
}
