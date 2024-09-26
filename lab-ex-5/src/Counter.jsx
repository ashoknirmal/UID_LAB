import React, { useState } from 'react';

function Counter() {
  // Define a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      {/* Button to increment the count */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Increment
      </button>

      {/* Button to decrement the count */}
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
