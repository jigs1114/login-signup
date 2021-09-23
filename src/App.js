import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import reactDom from 'react-dom';
import './App.css';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      isLogin:true, 
      isRegister:false,
    }
    
  }

  render() {
    return (
      
      <Router>
      
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      
      </Router>
    );

}

}



reactDom.render(<App />,document.getElementById("root"));
