import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var a = 1;
var b = <button id="bttn">Button</button>

class Atag extends React.Component{
  //same as function Atag(){} but can set state and constructor
  constructor(props){
    super(props)
    this.state = {b:0}
  }
  componentDidMount(){
    this.itv = setInterval(()=>{
      this.setState({b: a=a+1})
      //state (b) should not set itself
      //the changing value of (a) sets state if (b)
    },1000)
  }
  componentWillUnmount(){
    //
    b.onclick = ()=>clearInterval(this.itv)
  }
  render(){
    return(
      <div>
        {b}
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
