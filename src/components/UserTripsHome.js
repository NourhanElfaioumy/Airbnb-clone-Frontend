import React from "react";
class UserTripsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            homedetails:""
         };
    }
    //  componentDidMount() {
    //       fetch(`https://tranquil-sands-93018.herokuapp.com/user/trip/${this.props.item.hostedHomeID}`, {
    //       method: "GET",
    //       headers:{
    //         "Content-type": "application/json; charset=UTF-8",
    //       }
    //     }).then(response =>
    //         response.json().then((home) => {
    //         this.setState({homedetails:home})
    //       })
    //     );
    //   }
    render() { 
        console.log(this.props.homes)
        return (
            this.props.homes.map((i)=>(
                <div>
                <div className="header" style={{height:"60px"}}>
                  <h2>{i.name}</h2>
                </div>
                <div className="header">
                  <h3>{i.location}</h3>
                </div>
                </div>
            ))

        );
    }
}
 
export default UserTripsHome;