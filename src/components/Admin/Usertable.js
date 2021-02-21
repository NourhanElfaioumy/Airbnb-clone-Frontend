import React from "react";
import UserData from "./userdata"
export default class Usertable extends React.Component {
  constructor(props){
    super(props);
    this.state={
      usersdata:null
    }
  }

 componentDidMount(){
   fetch("https://tranquil-sands-93018.herokuapp.com/admin/users",{
      method:"GET",
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      }
    }).then(response=>response.json().then(body=>{
      this.setState({usersdata:body})
    }))
  }
  render(){
    console.log(this.state.usersdata)
    if (this.state.usersdata) {
      if (this.state.usersdata.length > 0) {
    return (
    
      <div className="container-fluid">
        <h2>Users</h2>
        <table className="table table-hover mt-5 col-12">
          <thead>
            <tr>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">Region</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {(this.state.usersdata).map((user)=>(
              <UserData user={user}/>
            ))}
          </tbody>
        </table>
      </div>
    );
          }
          else{
            return <h2>No users</h2>
          }
        }else{
          return <h2>Loading ...</h2>
        }
  };
}
