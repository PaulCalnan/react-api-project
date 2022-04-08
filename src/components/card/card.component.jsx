import { Component } from 'react';

import './card.styles.css';

// initialise CardList class
class Card extends Component {
  render() {
    //destructuring from props
    const { id, name, email } = this.props.avatar;
    const [firstName, lastName] = name.split(' ');
    
    return (
     
      //Use key id to prevent react warning that each child should have a unique key prop
      <div className='card-container' key={id}>
        <img 
          alt={`avatar ${name}`} 
          src={`https://avatars.dicebear.com/api/adventurer/${id}.svg?size=180`} 
        />
        <h2 className='card-name'>{firstName}</h2>
        <h2 className='card-name'>{lastName}</h2>
        <p>{email}</p>
      </div>
    )}}

export default Card;