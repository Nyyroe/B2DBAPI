import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import SearchFilter from './SearchFilter';
import axios from 'axios';

function InventoryList(){
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/bakeryList')
        .then(response => setInventory(response.data))
        .catch(error => console.error('Error loading inventory: ', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/bakeryList/${id}')
        .then(() => {
            setInventory(inventory.filter(item => item.id !== id));
        });
    };
    
    // Filter function passed to SearchFilter
    const handleFilter = (term) => {
    const filtered = bakedGoods.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.allergens.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredGoods(filtered);
  };
    return(
        <div>
            <h2>All Inventory</h2>
            
            {/* Search bar */}
            <SearchFilter onFilter={handleFilter} />
            
            <ul>
                {inventory.map(item => (
                    <li key={item.id}>
                        {item.name} - £{item.price} - Made: {item.date} - Allergens: {item.allergens} {' '}
                        <Link to= {'/inventory/edit/${item.id}'}>Edit</Link>
                        {' '}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InventoryList;