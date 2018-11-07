import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function Scores(props) {
  return (

    <table border='2'>
      <tbody>
        <tr>
          <td>Player</td>
          <td>You</td>
          <td>Pc</td>
        </tr>
        <tr>
          <td>Score</td>
          <td>{props.you}</td>
          <td>{props.pc}</td>
        </tr>
      </tbody>

    </table>


  )
}
const map = new Map([
  [0,'rock'],[1,'paper'],[2,'scissors']
])

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yourScr: 0,
      pcScr: 0,
    }
    this.Toolvalue = this.ToolValue.bind(this)
  }
  ToolValue(val){
    this.UserVal = val;
    this.PcVal = Math.floor(Math.random() * 3);
    var winner = this.PickWinner(this.UserVal, this.PcVal);
     
    if (this.UserVal == winner) {
      console.log('User scores, pc chose: '+ map.get(this.PcVal));
      this.setState({ yourScr: this.state.yourScr + 1 }, 
        ()=>{
          if (this.state.yourScr == 5) {
            console.log("!!!!!!!!!!!!!!User wins!!!!!!!!!!!!!!!!!!");
            console.log('pc chose: '+ map.get(this.PcVal));
            this.setState({
              pcScr: 0,
              yourScr: 0
            });
          }
        })
    } 

    else if (this.PcVal == winner) {
      console.log('Pc scores, pc chose: '+map.get(this.PcVal));
      this.setState({ pcScr: this.state.pcScr + 1 }, 
        ()=>{
          if (this.state.pcScr == 5) {
            console.log('!!!!!!!!!!!!!!!!Pc wins!!!!!!!!!!!!!!!!!!');
            console.log('pc chose: '+ map.get(this.PcVal));
            this.setState({
              pcScr: 0,
              yourScr: 0
            })
          }
      })
    } 
    else if (winner == 4){
      console.log('match');
    }
    else {
      console.log('unknown state');
    }
  }
  PickWinner(prop1, prop2) {
    let as = new Set([prop1, prop2])
    if (as.size == 1) return 4;
    else if (as.has(0) && as.has(1)) {
      return 1;
    } else if (as.has(0) && as.has(2)) {
      return 0;
    } else if (as.has(1) && as.has(2)) {
      return 2;
    }
  }
  render() {
    return (
      <div>
        <img width="100px" onClick={() => this.ToolValue(0)} src="http://hyperphysics.phy-astr.gsu.edu/hbase/Geophys/geopic/gneiss99.jpg" /> ,
        <img width="100px" onClick={() => this.ToolValue(1)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/ManilaPaper.jpg/220px-ManilaPaper.jpg" /> ,
        <img width="100px" onClick={() => this.ToolValue(2)} src="https://upload.wikimedia.org/wikipedia/commons/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg" />
        <Scores you={this.state.yourScr} pc={this.state.pcScr} />
      </div>

    )
  }
}
ReactDOM.render(<Game />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
