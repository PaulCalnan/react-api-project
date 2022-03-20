import { Component } from 'react';
import './App.css';
import React from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      avatars:[
        {
          name: 'Paul',
          id: 1
        },
        {
          name: 'Mack',
          id: 2
        },
        {
          name: 'Tiff',
          id: 3
        }
      ]    
    };
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
