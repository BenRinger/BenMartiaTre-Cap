//import React from 'react'
import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'

const History = (props) => (


<div className="c6">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.historical.imageURL}alt="Renaissance Festival" />
        </div>
        <div className="flip-card-back">
          <h3 className="first-txt">{props.historical.title}</h3>
          <p className="second-txt glass alignT">{props.historical.description}</p>
        </div>
      </div>
    </div>
  </div>  
)

export default class Histories extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {
      historicals: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/historical/')
     .then(response => {
       this.setState({ historicals: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  historicalList() {
    return this.state.historicals.map(currentHistory => {
      return <History historical={currentHistory} key={currentHistory._id}/>;
    })
  }
  render() {
    return (

 
     
      
      <div className="bodyody">
           { this.historicalList()  }
                </div>
);
}
}