import {useState} from 'react';
import axios from 'axios';

//function to add to the inventory list (CREATE segment of CRUD functionality)
export default function addInventory() {
    const [form, setForm] = useState({name: '', allergens: '', price: '', date: ''});

    const handleChange = e => {
        setForm ({ ...form, [e.target.name]: e.target.value});
    };
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/inventory', form)
            .then(() => alert('Item added!'))
            //error handling
            .catch(console.error);
    };
    //actual form part (yay HTML!)
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required/>
            <input name="allergens" placeholder="Allergens" onChange={handleChange} required />
            <input name="price" placeholder="Price" onChange={handleChange} required />
            <input name="date" placeholder="Date Made" onChange={handleChange} required />
            <button type="submit">Add to Inventory List</button>
        </form>
    );
}