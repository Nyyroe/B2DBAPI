import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CheapList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/bakeryList')
      .then(response => {
        const sorted = response.data.sort((a, b) => a.price - b.price);
        setItems(sorted);
      });
  }, []);

  return (
    <div>
      <h2>Cheapest Baked Goods</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - £{item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheapList;
