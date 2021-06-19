import './App.css';
import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import {Provider} from "react-redux";
import store from './store';
import Landing from './components/layout/Landing';
import Register from './components/userManagement/Register';
import Login from './components/userManagement/Login';
import jwt_decode from 'jwt-decode';
import { setJWTToken } from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from './actions/types';
import SecureRoute from './securityUtils/SecureRoute';

// const jwtToken = localStorage.jwtToken;
// if(jwtToken){
//   setJWTToken(jwtToken);
//   const decoded = jwt_decode(jwtToken);
//   store.dispatch({
//     type: SET_CURRENT_USER,
//     payload: decoded
//   });

// }

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              // Public Routes
            }
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {
              // Private Routes
            }
            <Switch>
              <SecureRoute exact path="/dashboard" component={Dashboard} />
              <SecureRoute exact path="/addProject" component={AddProject} />
              <SecureRoute exact path="/updateProject/:id" component={UpdateProject} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
