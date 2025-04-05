import React, { useState } from 'react';
import axios from 'axios';

function AddInventory() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    date_made: '',
    allergens: ''
  });

  // code to handle form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/bakeryList', formData)
      .then(() => alert('Item added successfully!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Baked Good</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
      <input name="date" placeholder="YYYY-MM-DD" onChange={handleChange} required />
      <input name="allergens" placeholder="Allergens" onChange={handleChange} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddInventory;
