import React from "react";
import Error from "./404found";
import "./HostedHomes.css";
class HostedHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  render() {
    if(!localStorage.getItem("token") || JSON.parse(localStorage.getItem('user')).type === false){
      this.props.history.push("/error404")
      return <Error/>
    }
    else{
    if (this.state.data) {
      if (this.state.data.length > 0) {
        return (
          <div className="row">
            {this.state.data.map((item) => (
              <div className="col-sm-4 ">
                <div className="card">
                  <div className="image">
                    <img
                    src={`https://tranquil-sands-93018.herokuapp.com/${item.images[0].filename}`} alt="" style={{width:"431.66px",height:"242.8px"}}/>
                  </div>
                  <div className="card-inner">
                    <div className="header">
                      <h2>{item.name}</h2>
                      <h3>{item.location}</h3>
                    </div>
                    <div className="content">
                      <p>Guests : {item.no_Of_Guests}</p>
                      <p>Price/Night : {item.averagePricePerNight} EGP</p>
                    </div>
                  </div>
                  <div className="justify-content-center d-block text-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.hostHome(item);
                        this.props.history.push(
                          `/host/editHostedHome/${item._id}`
                        );
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={async () => {
                        await fetch(
                          `https://tranquil-sands-93018.herokuapp.com/host/deleteHostedHome/${item._id}`,
                          {
                            method: "DELETE",
                          }
                        ).then(() => {
                          window.location.reload();
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      } else {
        return <h1>No Hosted Houses</h1>;
      }
    } else {
      return <h1>No Hosted Houses Please add and check again</h1>;
    }
  }
  }
  async componentDidMount() {
    await fetch("https://tranquil-sands-93018.herokuapp.com/host/hostedhomes", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) =>
      response.json().then((body) => {
        //console.log(body);
        this.setState({ data: body });
      })
    );
  }
}
export default HostedHomes;
