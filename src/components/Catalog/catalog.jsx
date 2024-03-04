
import Card from '../Card/card';
import './catalog.css';

function Catalog({ items }) {



  return (
    <section className="catalog">
      {items?.map((item, index) => (
        <Card item={item} key={index}/>
      ))}
      
    </section>
  );
}

export default Catalog;
