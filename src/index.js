import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as data from './users.json'

//console.log(data.default.results);

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logged: false
    }
    this.LoginHandler = this.LoginHandler.bind(this);
    this.LogoutHandler = this.LogoutHandler.bind(this);
  }
  LoginHandler(){
    this.setState(state=>({logged: false}))
    
  }
  LogoutHandler(){
    this.setState(state=>({logged: true}))
  }


  render(){
    console.log(this.state.logged);
    if(!this.state.logged){
        return(
          <button onClick={this.state.LoginHandler}>
            Login
          </button>
        )
    } else 
        return(
          <button onClick={this.state.LogoutHandler}>
          Logout
        </button>
    )
  }
}




ReactDOM.render(<User />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();