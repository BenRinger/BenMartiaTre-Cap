import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'
const Brew = props => (
<div className="card ramen" style={{width: '18rem'}}>
  <img src={props.brew.imageURL} className='card-img-top'  alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.brew.title}</h5>
    <p className="card-text">{props.brew.description}</p>
    <a href="#" className="btn btn-primary">{props.brew.title}</a>
  </div>
</div>

  
)

export default class Brews extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {
      brews: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/brew/')
     .then(response => {
       this.setState({ brews: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  BrewsList() {
    return this.state.brews.map(currentBrew => {
      return <Brew brew={currentBrew} key={currentBrew._id}/>;
    })
  }
  render() {
    return (

 
     
      
      <div className="bodyody">
           { this.BrewsList()  }
                </div>
);
}
}