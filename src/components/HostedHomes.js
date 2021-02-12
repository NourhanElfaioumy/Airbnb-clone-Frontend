import React from "react";
import "./HostedHomes.css";
class HostedHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  async deleteData(id) {
    debugger;
    await fetch(`http://localhost:9000/host/deleteHostedHome/${id}`, {
      method: "DELETE",
    }).then(console.log("ok"));
  }
  render() {
    if (this.state.data) {
      if (this.state.data.length > 0) {
        return (
          <div className="row">
            {this.state.data.map((item) => (
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
                      <h2>{item.name}</h2>
                      <h3>{item.location}</h3>
                    </div>
                    <div className="content">
                      <p>Guests : {item.no_Of_Guests}</p>
                      <p>Price/Night : {item.averagePricePerNight}</p>
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
                          `http://localhost:9000/host/deleteHostedHome/${item._id}`,
                          {
                            method: "DELETE",
                          }
                        ).then(() => {
                          console.log("ok");
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
  async componentDidMount() {
    await fetch("http://localhost:9000/host/hostedhomes", {
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
