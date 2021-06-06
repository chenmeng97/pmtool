import './App.css';
import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import {Provider} from "react-redux";
import store from './store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
