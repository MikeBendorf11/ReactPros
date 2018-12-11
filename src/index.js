import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import car from './cars';

function CarList(props){
  const list = props.car;
  const aList = (
    list.forEach(l => 
      <li key={l.brand}>
      {l.brand}
    </li>
  ));
       
  return(
    <ul>
      {aList}
    </ul>
  )
}
const cars = car;
ReactDOM.render(<CarList car={cars}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
