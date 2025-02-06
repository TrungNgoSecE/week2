import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
        {/* Button to increase the count by 1 when clicked */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {/* Button to decrease the count by 1 when clicked */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )};

