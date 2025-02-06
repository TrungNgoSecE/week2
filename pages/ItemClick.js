import { useState } from 'react';
import React from 'react';

function ItemList() {
     // State to store the selected item, initially set to null
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)} style={{margin:'8px',
            backgroundColor:'lightgray'
          }}>
            {item}
          </li>
        ))}
      </ul>
      {/* render the selected item message */}
      {selectedItem && <p>You selected: {selectedItem}</p>}
    </div>
  );
}
export default function App() {
    return (
      <div>
        <h2>Handle Item Click</h2>
        <ItemList />
      </div>
    );
  }