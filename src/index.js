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
    
    this.state = {
      anotherNumb: 0,
      b:0,
      c: '',
      w: 'a'
    }
    //add a function to an event
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  //second way
  handleMouseOver(str){
    this.setState({
      anotherNumb: this.state.anotherNumb+1,
      w: this.state.w + str + 'a' 
    })
    
  }
  //this is why we would use state, to track var with events
  componentDidMount(){
    this.itv = setInterval(()=>{
      if((this.state.b)%2 == 0){
        this.setState(state => ({c: 'asd'+ state.b}))
      }
      this.setState(state =>({b: state.b+1}))
    },1000);
  }
  
  render(){
    return(
      <div >
        <p onMouseOver={this.handleMouseOver.bind(this,'asd')}>{this.state.anotherNumb} 
        </p>
        <p>{this.state.w}</p>
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