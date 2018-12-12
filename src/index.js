import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import car from './cars';
import Form from './form';



function CarList(props){
  
  var fasterList = (
    props.car.map(x=>
      <li key={x.brand}>{x.brand} {x.make}</li>
    )
  )

  var arr = []
  props.car.forEach((l) => {
    console.log(l.brand);
    arr.push(l.brand + ' ' + l.make)  
  })
  
  const aList = arr.map(c=> 
  <li key={c}>
    {c}
  </li>
  )
  
  return(
    <div>
      <p>Normal List</p>
      <ul>
        {aList}
      </ul>
      <p>Faster List</p>
      <ul>
        {fasterList}
      </ul>
    </div>
  )
}

const cars = car;
//console.log(cars);
ReactDOM.render(<CarList car={cars}/>, document.getElementById('root'));
ReactDOM.render(<Form />, document.getElementById('root2'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
