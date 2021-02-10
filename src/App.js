import React from "react";
// import "./App.scss";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
// import { Login, Register } from "./components/Auth/index";
import Index from './components/Auth/Index'
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
export default class App extends React.Component {

 constructor(){
   super();
  }

  render = () =>{
   return(
      <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search" component={SearchPage}/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Register}/>

        </Switch>
        <Footer />
      </ Router>
    </div>
    )
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
}

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