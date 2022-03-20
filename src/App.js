import { Component } from 'react';
import './App.css';
import React from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      avatar1: {
        name: 'Paul'
      },
      avatar2: {
        name: 'Mack'
      },
      avatar3: {
        name: 'Tiff'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.avatar1.name}</h1>
        <h1>{this.state.avatar2.name}</h1>
        <h1>{this.state.avatar3.name}</h1>
      </div>
    );
  }
}

export default App;
