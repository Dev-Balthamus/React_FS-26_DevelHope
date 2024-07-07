import { useState } from "react";

export function Counter({ initialValue = 0, variation = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((c) => c + variation)}>Increment Count</button>
      <button onClick={() => setCounter((c) => c - variation)}>Decrement Count</button>
      <button onClick={() => setCounter((c) => (c = initialValue))}>Reset Count</button>
    </div>
  );
}
