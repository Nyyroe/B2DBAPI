import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditInventory() {
  const { id } = useParams(); // get item ID from URL
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    date_made: '',
    allergens: ''
  });

  // Load existing data
  useEffect(() => {
    axios.get(`http://localhost:4000/bakeryList/${id}`)
      .then(response => setFormData(response.data));
  }, [id]);

  // Handle changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit updated data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/bakeryList/${id}`, formData)
      .then(() => alert('Item updated successfully!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Baked Good</h2>
      <input name="name" value={formData.name} onChange={handleChange} required />
      <input name="price" value={formData.price} onChange={handleChange} required />
      <input name="date" value={formData.date} onChange={handleChange} required />
      <input name="allergens" value={formData.allergens} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditInventory;
