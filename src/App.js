import React from "react";
// import "./App.scss";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promiseMW from "redux-promise";
import Header from './components/Header';
import { LastLocationProvider } from 'react-router-last-location';
import Home from './components/Home';
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HostProfile from "./components/hostProfile";
import EditHostProfile from "./components/hostEdtProfile";
const createStoreWithMW = applyMiddleware(promiseMW)(createStore);
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        data_type:'',
        token:"",
        data:"",
        datafromEdit:""
    }
    this.username_Callback=this.username_Callback.bind(this)
    this.token_Callback=this.token_Callback.bind(this)
    this.handledata=this.handledata.bind(this)
    this.editProfile_Callback=this.editProfile_Callback.bind(this)
}
username_Callback(usernamecallback){
this.setState({data_type:usernamecallback});

}
token_Callback(token){
  this.setState({token:token});
  
  }
  editProfile_Callback(data){
    this.setState({datafromEdit:data});
    }
  handledata(dataa) {
    this.setState({data:dataa});
}
  render = () =>{
   return(
      <div className="app">
      <Router>
      <LastLocationProvider>
        <Header dataFromParent = { this.state.data_type} token ={this.state.token} location ={this.props.location} propss={this.handledata}/>
        <Switch>
          <Route exact path="/search" component={SearchPage}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/user" component={Home}/>
          <Route exact path="/host" component={Home}/>
          <Route exact path="/host/editProfile/:id" render={props=><EditHostProfile {...props} callbackFromEditProfile= {this.editProfile_Callback}/>}/>
          <Route exact path="/host/profile" render={props=><HostProfile datafrompare={this.state.data} datafromEdit={this.state.datafromEdit}/>}/>
          <Route exact path="/login" render={props=><Login {...props} callbackFromParents= {this.username_Callback} callbackFromParentsfortoken= {this.token_Callback}/>}/>
          <Route exact path="/signup" render={props=><Register {...props} callbackFromParents= {this.username_Callback} callbackFromParentsfortoken= {this.token_Callback}/>}/>
        </Switch>
        <Footer />
        </LastLocationProvider>
      </ Router>
    </div>
    )
  }
}
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLogginActive: true
  //   };
  // }

  // componentDidMount() {
  //   //Add .right by default
  //   this.rightSide.classList.add("right");
  // }

  // changeState() {
  //   const { isLogginActive } = this.state;

  //   if (isLogginActive) {
  //     this.rightSide.classList.remove("right");
  //     this.rightSide.classList.add("left");
  //   } else {
  //     this.rightSide.classList.remove("left");
  //     this.rightSide.classList.add("right");
  //   }
  //   this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  // }

  // render() {
  //   const { isLogginActive } = this.state;
  //   const current = isLogginActive ? "Register" : "Login";
  //   const currentActive = isLogginActive ? "login" : "register";
  //   return (
  //     <div className="App">
  //       <div className="login">
  //         <div className="container" ref={ref => (this.container = ref)}>
  //           {isLogginActive && (
  //             <Login containerRef={ref => (this.current = ref)} />
  //           )}
  //           {!isLogginActive && (
  //             <Register containerRef={ref => (this.current = ref)} />
  //           )}
  //         </div>
  //         <RightSide
  //           current={current}
  //           currentActive={currentActive}
  //           containerRef={ref => (this.rightSide = ref)}
  //           onClick={this.changeState.bind(this)}
  //         />
  //       </div>
  //     </div>
  //   );
  // }
// const RightSide = props => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
//  };

// export default App;