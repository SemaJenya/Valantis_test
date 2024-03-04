

import { useEffect, useState } from 'react';
import { getIds, getItems } from '../../utils/api';
import Header from '../Header/header';
import './App.css';
import Catalog from '../Catalog/catalog';

function App() {

  const [ids, setIds] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getIds()
      .then(res => {setIds(res.result); return res.result})
      .then(res => getItems(res))
      .then(data => setItems(data.result))
      .catch(err => console.log(err))
      
  }, [])

  console.log('это items', items);

  // getItems()

  return (
    <div className="App">
      <Header />
      <Catalog items={items}/>
      
    </div>
  );
}

export default App;
