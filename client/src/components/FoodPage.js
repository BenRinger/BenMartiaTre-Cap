import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
// import {BACKEND_URL} from '../config'


const Food = props => (
<div className="card" style={{width: '18rem'}}>
  <img src={props.food.imageURL} className='card-img-top'  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.food.title}</h5>
    <p className="card-text">{props.food.description}</p>
    <a href="#" className="btn btn-primary">{props.food.title}</a>
  </div>
</div>


 

  
)

export default class Foods extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {
      foods: []
    };  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/food/')
     .then(response => {
       this.setState({ foods: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  FoodsList() {
    return this.state.foods.map(currentFood => {
      return <Food food={currentFood} key={currentFood._id}/>;
    })
  }
  render() {
    return (

 
     
      
      <div className="bodyody">
           { this.FoodsList()  }
                </div>
);
}
}