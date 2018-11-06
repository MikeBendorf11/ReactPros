import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var a = 1;

function AnotherTag(props){
  return <h1>{props.num}</h1>
}
//one way
function Abutton(props){
  return <button onClick={()=>clearInterval(props.itv)}>A Button</button>

}

class Atag extends React.Component{
  constructor(props){
    super(props)
    this.anotherNumb = 0;
    this.state = {
      b:0,
      c: '',
    }
    //add a function to an event
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  //second way
  handleMouseOver(){
    this.anotherNumb = this.anotherNumb + 1;
  }
  //this is why we would use state, to track var with events
  componentDidMount(){
    this.itv = setInterval(()=>{
      if((this.state.b)%2 == 0){
        this.setState({c: 'asd'+this.state.b})
      }
      this.setState({b: this.state.b+1})
    },1000);
  }
  
  render(){
    return(
      <div>
        <p onMouseOver={this.handleMouseOver}>{this.anotherNumb}</p>
        <AnotherTag num={this.state.c}/>
        <p>HI! {this.state.b}</p>
        <Abutton itv={this.itv}/>
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