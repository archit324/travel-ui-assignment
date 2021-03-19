import React, { Component } from 'react';
import './App.css';
import Travel from './components/travel-component';
import Home from './components/home';
import {Route,Switch} from 'react-router-dom';
class App extends Component {
 
  render() {
    return (
      <div>
        <Switch>
         <Route path="/Travel" component={Travel}></Route>
         <Route path="/" component={Home}></Route> 
        </Switch>
      </div>
    );
  }
}

export default App;