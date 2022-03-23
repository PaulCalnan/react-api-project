import { Component } from 'react';
import './App.css';
import React from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      avatars: [],
      searchField: ''    
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

    const filteredAvatarNames = this.state.avatars.filter((avatarName) => {
      return avatarName.name.toLowerCase().includes(this.state.searchField);
    });


    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Find Friends' 
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredAvatarNames.map((avatar) => {
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
