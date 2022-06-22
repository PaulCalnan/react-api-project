import './card.styles.css';

const Card = ({ avatar }) => {  
  const { id, name, email } = avatar;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className='card-container' key={id}>
      <img 
        alt={`avatar ${name}`} 
        src={`https://avatars.dicebear.com/api/adventurer/${id}.svg?size=180`} 
      />
      <h2 className='card-name'>{firstName}</h2>
      <h2 className='card-name'>{lastName}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;