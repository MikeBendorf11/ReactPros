import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as data from './users.json'



class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    }
    this.LoginHandler = this.LoginHandler.bind(this);
    this.LogoutHandler = this.LogoutHandler.bind(this);
  }
  LoginHandler() {
    this.setState({ logged: true })

  }
  LogoutHandler() {
    this.setState({ logged: false })
  }

  render() {
    //console.log('rerendering');
    if (this.state.logged) {
      return (
        <div>
          <button onClick={this.LogoutHandler}>
            Logout
            </button><br></br>
          {Profile(this.state)}
        </div>
      )
    } else
      return (
        <div>
          <button onClick={this.LoginHandler}>
            Login
            </button>
        </div>
      )
  }
}
//console.log(data.default.results);
function Profile(props) {
  //console.log(props.logged);
  if (props.logged) {
    return (
      data.default.results.map((d) =>
        <tr>
          <td>
            <img src={d.picture.medium} alt={d.login.username} />
          </td>
          <td>
            <ul>
              <li>Name: {d.name.first} {d.name.last}</li>
              <li>Location: {d.location.street}, {d.location.city}</li>
              <li>Phone: {d.phone}</li>           
              {d.nat=="CA"?<img src="https://image.flaticon.com/icons/png/128/580/580843.png" width="50px"/>:null}
              {d.nat=="US"?<img src="http://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png" width="50px"/>:null}   
            </ul>
          </td>
        </tr>
      )
    )
  } else {
    return (
      ''
    )
  }
}

function Page(props) {

  return (
    <div>
      <Status />

    </div>
  )
}


ReactDOM.render(<Page />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();