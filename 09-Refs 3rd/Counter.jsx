import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue, increment, decrement }) {
  const [counter, setCounter] = useState(initialValue);

  const previousCounter = useRef(initialValue);
  const directionCounter = useRef("The counter has been set to the initial value!");

  useEffect(() => {
    console.log(`The value of the counter is: ${counter}`);
    if (previousCounter.current !== counter) {
      console.log(`The previous value of the counter was: ${previousCounter.current}`);
      console.log(directionCounter.current);
    } else {
      console.log("The counter value has not changed!");
    }
  }, [counter]);

  function handleCounterIncrement() {
    previousCounter.current = counter;
    setCounter((c) => c + increment);
    directionCounter.current = "The counter has gone UP by 3!";
  }

  function handleCounterDecrement() {
    previousCounter.current = counter;
    setCounter((c) => c - decrement);
    directionCounter.current = "The counter has gone DOWN by 2!";
  }

  function handleCounterReset() {
    previousCounter.current = counter;
    setCounter((c) => (c = initialValue));
    directionCounter.current = "The counter has been set to the initial value!";
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
