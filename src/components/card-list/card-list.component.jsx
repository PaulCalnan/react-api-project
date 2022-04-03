import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

// initialise CardList class
class CardList extends Component {
  render() {
    //destructuring from props
    const { avatars } = this.props;

    return (
      // All component html elements must be contained in one parent level tag
      <div className='card-list'>
        {avatars.map((avatar) => {
          return(
            <Card avatar={avatar}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;