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
          <div className='card-container' key={avatar.id}>
            <img 
              alt={`avatar ${avatar.name}`} 
              src={`https://avatars.dicebear.com/api/adventurer/${avatar.id}.svg?size=180`} 
            />
            <h2>{avatar.name}</h2>
            <p>{avatar.email}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default CardList;