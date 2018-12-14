import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import carJson from './cars';
import Form from './form';


class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand: "",
      make: "",
      year: 2018,
      imageUrl: "",
      price: 50000,
      new: false
    }
    this.default = {...this.state}
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
    this.props.cars.push(this.state);
    this.setState({...this.default})
    console.log(this.props);
  }
  render(){
    return(
      <div>
        <CarList cars={this.props.cars}/>
        <Form {...this.state} onFormChange={this.handleChange} onFormSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

Container.defaultProps = {
  cars: carJson
}

function CarList(props){
  
  var fasterList = (
    props.cars.map(x=>
      <li key={x.brand}>{x.brand} {x.make}</li>
    )
  )

  return(
    <div>
      <ul>
        {fasterList}
      </ul>
    </div>
  )
}

ReactDOM.render(<Container/>, document.getElementById('root'));
;



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
