import { Component } from 'react';

// initialise CardList class
class CardList extends Component {
  render() {
    //destructuring from props
    const { avatars } = this.props

    return (
      // All component html elements must be contained in one parent level tag
      <div>
        {avatars.map(avatar => (
          //Use key id to prevent react warning that each child should have a unique key prop
          <h1 key={avatar.id}>{avatar.name}</h1>
        ))}
      </div>
    )
  }
}

export default CardList;