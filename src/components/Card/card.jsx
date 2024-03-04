
import './card.css';

function Card({ item }) {


  return (
    <div className="card">
        <p className='card__id'> {item.id}  </p>
        <p className='card__title'> {item.product} </p> 
        <div className='card__footer'>
          <p className='card__brand'> brand: {item.brand ? item.brand : 'Handmade'} </p>
          <p className='card__price'> price: {item.price} р </p>
        </div>    
    </div>
  );
}

export default Card;
