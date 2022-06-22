import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ avatars }) => (
  <div className='card-list'>
    {avatars.map((avatar) => {
      return(
        <Card avatar={avatar} />
      );
    })}
  </div>
);

export default CardList;