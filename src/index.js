import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      name: 'Start'
    }
  }
  ButtonClick = ()=>{
    console.log(this.timer);
    if(this.timer == null){
      this.timer = setInterval(()=>{
        this.setState({
          count: this.state.count+1,
          name: 'Pause'
        })
      },1000)
    }else if(this.state.name =='Pause'){
      clearInterval(this.timer)
      this.timer =null;
      this.setState({
        name: 'Start'
      })
    
    } else {
      console.log('untracked state');
    }
  }
  componentDidMount(){
      
    }
  
  render(){
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.ButtonClick}>{this.state.name}</button>

      </div>
      
    )
  }
}
ReactDOM.render(<Clock />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
