import './App.css';
import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './components/project/AddProject';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
        </div>
      </Router>
    );
  }
}

export default App;
