import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var a = 1;

//can't be called within class purpose??
function AnotherTag(props){
  return <h1>{props.num}</h1>
}


class Atag extends React.Component{
  //same as function Atag(){} but can set state and constructor
  constructor(props){
    super(props)
    this.state = {
      b:0,
      c: ''
    }
  }
  componentDidMount(){
    this.itv = setInterval(()=>{
      if((this.state.b)%2 == 0){
        this.setState({c: 'asd'+this.state.b})
      }
      //setState can be self assignment
      this.setState({b: this.state.b+1})
    },1000);
   
  }
  
  render(){
    return(
      <div>
        <AnotherTag num={this.state.c}/>
        <p>HI! {this.state.b}</p>
      </div>
      
    )
  }
}

ReactDOM.render(<Atag />, document.getElementById('root'))



//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//https://reactjs.org/docs/state-and-lifecycle.html