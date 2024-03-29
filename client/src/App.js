import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BrewPage from './components/BrewPage';
import Home from './components/Home';
import FoodPage from './components/FoodPage';
import About from './components/About';
import Contact from './components/Contact';
// Page & Component Imports
import Navbar from './components/Navbar'
import Event from './components/Events'
import History from './components/Historical'







// styles
import './style.css';


export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar>
        <Switch>
        <Route exact path='/' component={Home}/>
         <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/food' component={FoodPage} />
        <Route path='/brew' component={BrewPage} />
        <Route path='/event' component={Event} />
        <Route path='/history' component={History} />
        </Switch>
       </Navbar>
      </Router>
    </div>
  );
}
}