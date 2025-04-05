import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
    
    return(
        <div>
            <h2>All Inventory</h2>
            <ul>
                {inventory.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} - Made: {item.date} - Allergens: {item.allergens} {' '}
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