import React from "react";
import * as moment from 'moment';

function UserTripsHome({img,name,location,guests,checkIn,checkOut,cost}){
    var checkin = moment(checkIn).format('MM/DD/YYYY');
    var checkout = moment(checkOut).format('MM/DD/YYYY');
        return (
            <div className="col-sm-4 ">
            <div className="card">
              <div className="image">
                <img
                  src={img}
                  alt=""
                  style={{height:"242.8px"}}
                />
              </div>
              <div className="card-inner">
                <div className="header">
                  <h2>{name}</h2>
                </div>
                <div className="header">
                  <h3>{location}</h3>
                </div>
                <div className="content">
                  <p>CheckIn : {checkin}</p>
                  <p>CheckOut : {checkout}</p>
                  <p>Guests : {guests}</p>
                  <p>Cost : {cost} EGP</p>
                </div>
              </div>
              <div className="justify-content-center d-block text-center"></div>
            </div>
          </div>

        );
    }
 
export default UserTripsHome;