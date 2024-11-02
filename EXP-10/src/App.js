import React, { useState, useEffect } from 'react';
import './App.css';

function ItemForm() {
  // State for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [items, setItems] = useState([]);

  // Load items from local storage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && quantity) {
      // Create a new item and add it to the list
      const newItem = { name, description, quantity };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);

      // Save updated items to local storage
      localStorage.setItem('items', JSON.stringify(updatedItems));

      // Clear the form fields
      setName('');
      setDescription('');
      setQuantity('');
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      <h3>Items List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.description} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemForm;
