import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import './App.css';

class LoginView extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      token: ""
    }
  }
  handleChange(event){
    var target = event.target;
    this.setState({
      [target.name]:target.value
    })
  }
  handleSubmit(event){
    //event.preventDefault();
    var data = new URLSearchParams();
    data.append('username', this.state.username);
    data.append('password',this.state.password);
    console.log(data.toString());
    fetch('https://damp-fortress-54104.herokuapp.com/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString()
    })
    .then(res => {
      ReactDOM.render( <img src={logo} className="App-logo" alt="logo" />, document.getElementById('root2'));
      return res.json()
    })
    .then(response => {
      console.log(response);
      if(response.error) throw new Error(response.error);
      else{
        this.setState({token: response.token})
        console.log(this.state.token);
        setTimeout(function(){
          ReactDOM.render('Welcome to the Matrix', document.getElementById('root2'))
        }, 2000)
      }
      //console.log('Success:', JSON.stringify(response))
    })
    .catch(error => {
      console.log(error);
      setTimeout(function(){
        ReactDOM.render(error.message, document.getElementById('root2'))
      }, 2000)
    });
  }
  render(){
    return (
      <form method="post" action="https://damp-fortress-54104.herokuapp.com/login">
      username: 
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
      password: 
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="button" value="submit" onClick={this.handleSubmit}/>
      </form>
    )
  }
}

ReactDOM.render(<LoginView />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
