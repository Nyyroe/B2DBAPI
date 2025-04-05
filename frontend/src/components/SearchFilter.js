import React, { useState } from 'react';

const SearchFilter = ({ onFilter }) => {
  // Create a state variable to store the user's input
  const [searchTerm, setSearchTerm] = useState('');

  // This function runs every time the user types in the search box
  const handleChange = (event) => {
    const value = event.target.value;

    // Update the state with the new value
    setSearchTerm(value);

    // Call the function provided by the parent, passing the new search term
    onFilter(value);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {/* Search input field */}
      <input
        type="text"
        placeholder="🔎 Search baked goods..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: '0.5rem',
          width: '100%',
          maxWidth: '300px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

// Export the component so it can be used in other files
export default SearchFilter;
