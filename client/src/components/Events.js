import React from 'react'
import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'

const Event = () => (
   
    <div className="c6">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.event.imageURL}alt="Renaissance Festival" />
        </div>
        <div className="flip-card-back">
          <h3 className="first-txt">{props.event.title}</h3>
          <p className="second-txt glass alignT">{props.event.description}</p>
        </div>
      </div>
    </div>
  </div>
  
)

export default class Events extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {
      events: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/event/')
     .then(response => {
       this.setState({ events: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  EventsList() {
    return this.state.events.map(currentEvent => {
      return <Event event={currentEvent} key={currentEvent._id}/>;
    })
  }
  render() {
    return (

 
     
      
      <div className="bodyody">
           { this.EventsList()  }
                </div>
);
}
}



