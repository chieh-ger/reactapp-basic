import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

import './User/User.css';
import './App.css';

class App extends Component {
  state = {
    username: 'chieh-ger'
  }

  updateUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This is a basic application</h1>
        <UserOutput username={this.state.username} password="P@$$w0rd"/>
        <UserOutput username="chieh_ger" password="12345"/>
        <UserInput changeUsername={this.updateUsernameHandler} username={this.state.username}/>

      </div>
    )
  }
}
export default App;
