import { Component } from 'react';
import './App.css';
import React from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      avatars: []    
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => { 
        return {avatars: users}
      },
      () => {console.log(this.state);}
      ));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.avatars.map((avatar) => {
            return (
              <div key={avatar.id}>
                <h1>{avatar.name}</h1>
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
