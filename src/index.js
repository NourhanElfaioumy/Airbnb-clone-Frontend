import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from './admin';

//Bootstrap Imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/popper.js/dist/popper.min.js'
import '../node_modules/jquery/dist/jquery.min.js'

if(window.location.pathname.includes("/admin")){
  ReactDOM.render(
    <React.StrictMode>
      <Admin />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
else{
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
