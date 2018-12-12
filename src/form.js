import React from 'react';
import ReactDOM from 'react-dom';
import car from './cars';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      make: "",
      year: 2018,
      imageUrl: "",
      price: 50000,
      new: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let target = event.target;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    var newCar = this.state;
    car.push(newCar)
    console.log(car);
    ReactDOM.render(<CarsObjs />, document.getElementById('root'));
  }
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        Brand:&nbsp; 
        <input
          type="text"
          name="brand"
          value={this.state.brand}
          onChange={this.handleChange} /><br></br>
        Make:&nbsp;
        <input
          type="text"
          name="make"
          value={this.state.make}
          onChange={this.handleChange} /><br></br>
        Year: &nbsp;
        <input
          type="number"
          min="2000"
          max="2018"
          name="year"
          value={this.state.year}
          onChange={this.handleChange} /><br></br>          
        Image Url: &nbsp;
        <input
          type="url"
          name="imageUrl"
          value={this.state.imageUrl}
          onChange={this.handleChange} /><br></br>  
         Price: &nbsp;
        <input
          type="number"
          min="0"
          max="1000000"
          name="price"
          value={this.state.price}
          onChange={this.handleChange} /><br></br>            
         Year: &nbsp;
        <input
          type="checkbox"
          name="new"
          value={this.state.new}
          onChange={this.handleChange} /><br></br>    
        <input type="submit" value="submit"/>
      </form>

    )
  }
}

class CarsObjs extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    this.theList = (
      car.map(x=>
        <li key={x.brand}>{x.brand} {x.make}</li>
      )
    )
    return this.theList
  }
}


export default Form;