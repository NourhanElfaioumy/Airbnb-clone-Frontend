import React from "react";
import "../../AdminDashboard.css";
export default class AdminHome extends React.Component {
  render = () => {
    return (
          <div classNameName="main__container">
            <div className="main__title">
              <img src="assets/hello.svg" alt="" />
              <div className="main__greeting">
                <p>Welcome to your admin dashboard</p>
              </div>
            </div>

            <div className="main__cards">
              <div className="card" id="cardad">
                <i
                  className="fa fa-user-o fa-2x text-lightblue"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">Number of followers</p>
                  <span className="font-bold text-title">578</span>
                </div>
              </div>

              <div className="card" id="cardad">
                <i
                  className="fa fa-calendar fa-2x text-red"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">Times of visiting</p>
                  <span className="font-bold text-title">2467</span>
                </div>
              </div>

              <div className="card" id="cardad">
                <i
                  className="fa fa-video-camera fa-2x text-yellow"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">Number of Videos</p>
                  <span className="font-bold text-title">340</span>
                </div>
              </div>

              <div className="card" id="cardad">
                <i
                  className="fa fa-thumbs-up fa-2x text-green"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">Number of Likes</p>
                  <span className="font-bold text-title">645</span>
                </div>
              </div>
            </div>
            <div className="charts col-12">
              <div className="charts__right ">
                <div className="charts__right__title">
                  <div>
                    <h1>Stats Reports</h1>
                  </div>
                  <i className="fa fa-usd" aria-hidden="true"></i>
                </div>

                <div className="charts__right__cards">
                  <div className="card1">
                    <h1>Income</h1>
                    <p>$75,300</p>
                  </div>

                  <div className="card2">
                    <h1>Sales</h1>
                    <p>$124,200</p>
                  </div>

                  <div className="card3">
                    <h1>Users</h1>
                    <p>3900</p>
                  </div>

                  <div className="card4">
                    <h1>Reservations</h1>
                    <p>1881</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  };
}
