import React from "react";
import Header from "./components/Header";
import { LastLocationProvider } from "react-router-last-location";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HostProfile from "./components/hostProfile";
import HostHome from "./components/HostHome";
import EditHostProfile from "./components/hostEdtProfile";
import EditUserProfile from "./components/EditUserProfile";
import HostedHomes from "./components/HostedHomes";
import EditHostedHomes from "./components/EditHostedHomes";
import UserProfile from "./components/UserProfile";
import UserTrips from "./components/UserTrips";
import Error from "./components/404found";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_type: "",
      token: "",
      data: "",
      datafromEdit: "",
      home: "",
      userData:"",
      datafromHome:"",
      searchData:""
    };
    this.username_Callback = this.username_Callback.bind(this);
    this.token_Callback = this.token_Callback.bind(this);
    this.handledata = this.handledata.bind(this);
    this.editProfile_Callback = this.editProfile_Callback.bind(this);
    this.editHostedHome_Callback = this.editHostedHome_Callback.bind(this);
    this.editUserData_Callback = this.editUserData_Callback.bind(this);
    this.dataa= this.dataa.bind(this);
    this.searchData= this.searchData.bind(this);
  }
  username_Callback(usernamecallback) {
    this.setState({ data_type: usernamecallback });
  }
  token_Callback(token) {
    this.setState({ token: token });
  }
  editProfile_Callback(data) {
    this.setState({ datafromEdit: data });
  }
  handledata(dataa) {
    this.setState({ data: dataa });
  }
  editHostedHome_Callback(home) {
    this.setState({ home: home });
  }
  editUserData_Callback(data){
    this.setState({userData:data})
  }
  dataa(data){
    this.setState({datafromHome:data})
  }
  searchData(data){
    this.setState({searchData:data})
  }
  render = () => {
    return (
      <div className="app">
        <Router>
          <LastLocationProvider>
            <Header dataFromParent={this.state.data_type} token={this.state.token} location={this.props.location} propss={this.handledata}/>
            <Switch>
              <Route exact path="/user/search" render={(props) => (<SearchPage data={this.state.datafromHome} search={this.state.searchData}/>)}/>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" render={(props) => (<Home {...props} data={this.dataa} searchData={this.searchData}/>)}/>
              <Route exact path="/host" component={Home} />
              <Route exact path="/host/editHostedHome/:id" render={(props) => (<EditHostedHomes {...props} dataFromHomes={this.state.home}/>)} />
              <Route exact path="/host/editProfile/:id" render={(props) => (<EditHostProfile {...props} callbackFromEditProfile={this.editProfile_Callback}/>)}/>
              <Route exact path="/user/editProfile/:id" render={(props) => (<EditUserProfile {...props} dataFromProfile={this.state.userData}/>)} />
              <Route exact path="/host/profile" render={(props) => (<HostProfile datafrompare={this.state.data} datafromEdit={this.state.datafromEdit}/>)}/>
              <Route exact path="/user/profile" render={(props) => (<UserProfile {...props} userData={this.editUserData_Callback}/>)}/>
              <Route exact path="/host/hosthome" component={HostHome} />
              <Route exact path="/user/trips" component={UserTrips} />
              <Route exact path="/host/hostedhomes" render={(props) => (<HostedHomes {...props} hostHome={this.editHostedHome_Callback}/>)}/>
              <Route exact path="/login" render={(props) => (<Login {...props} callbackFromParents={this.username_Callback} callbackFromParentsfortoken={this.token_Callback}/>)}/>
              <Route exact path="/signup" render={(props) => (<Register {...props} callbackFromParents={this.username_Callback} callbackFromParentsfortoken={this.token_Callback}/>)}/>
              <Route path="*" component={Error}/>
            </Switch>
            <Footer />
          </LastLocationProvider>
        </Router>
      </div>
    );
  };
}
