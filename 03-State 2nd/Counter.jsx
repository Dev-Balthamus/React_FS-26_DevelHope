import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue, increment, decrement }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + increment);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - decrement);
  }

  function handleCounterReset() {
    setCounter((c) => (c = initialValue));
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleCounterIncrement}>Increment Count</button>
      <button onClick={handleCounterDecrement}>Decrement Count</button>
      <button onClick={handleCounterReset}>Reset Count</button>
    </div>
  );
}
