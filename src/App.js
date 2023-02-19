import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeComponent from './EmployeeList';
import EmployeeForm from './EmployeeForm';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/employees' exact={true} component={EmployeeComponent}/>
            <Route path='/employees/:id' component={EmployeeForm}/>
            <Route path='/employees/:email' component={EmployeeComponent}/>
            
          </Switch>
        </Router>
    )
  }



}

export default App;