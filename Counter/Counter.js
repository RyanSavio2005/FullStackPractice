import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Simulate fetching initial data
  useEffect(() => {
    setTimeout(() => {
      setCount(5); // Simulate fetching initial count from API
    }, 1000);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
