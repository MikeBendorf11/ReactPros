import React from 'react';
import ReactDOM from 'react-dom';
import car from './cars';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   brand: "",
    //   make: "",
    //   year: 2018,
    //   imageUrl: "",
    //   price: 50000,
    //   new: false
    // }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.props.onFormChange(event);

  }
  handleSubmit(event){
    this.props.onFormSubmit(event);
    
    // console.log(car);
    // ReactDOM.render(<CarsObjs />, document.getElementById('root'));
  }
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        Brand:&nbsp; 
        <input
          type="text"
          name="brand"
          value={this.props.brand}
          onChange={this.handleChange} /><br></br>
        Make:&nbsp;
        <input
          type="text"
          name="make"
          value={this.props.make}
          onChange={this.handleChange} /><br></br>
        Year: &nbsp;
        <input
          type="number"
          min="2000"
          max="2018"
          name="year"
          value={this.props.year}
          onChange={this.handleChange} /><br></br>          
        Image Url: &nbsp;
        <input
          type="url"
          name="imageUrl"
          value={this.props.imageUrl}
          onChange={this.handleChange} /><br></br>  
         Price: &nbsp;
        <input
          type="number"
          min="0"
          max="1000000"
          name="price"
          value={this.props.price}
          onChange={this.handleChange} /><br></br>            
         Year: &nbsp;
        <input
          type="checkbox"
          name="new"
          value={this.props.new}
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