import React from "react";
// import "./App.scss";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promiseMW from "redux-promise";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
const createStoreWithMW = applyMiddleware(promiseMW)(createStore);
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        data_type:'',
        token:""
    }

    this.username_Callback=this.username_Callback.bind(this)
    this.token_Callback=this.token_Callback.bind(this)

}

username_Callback(usernamecallback){
this.setState({data_type:usernamecallback});

}
token_Callback(token){
  this.setState({token:token});
  
  }
  render = () =>{
   return(
      <div className="app">
      <Router>
        <Header dataFromParent = {this.state.data_type} token ={this.state.token} location ={this.props.location}/>
        <Switch>
          <Route path="/search" component={SearchPage}/>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={Home}/>
          <Route path="/host" component={Home}/>
          <Route path="/login" render={props=><Login {...props} callbackFromParents= {this.username_Callback} callbackFromParentsfortoken= {this.token_Callback}/>}/>
          <Route path="/signup" render={props=><Register {...props} callbackFromParents= {this.username_Callback} callbackFromParentsfortoken= {this.token_Callback}/>}/>
        </Switch>
        <Footer />
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