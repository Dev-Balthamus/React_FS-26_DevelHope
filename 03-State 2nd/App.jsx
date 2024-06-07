import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  function handleShowTime() {
    const timeNow = new Date();
    alert(`The current time is:   ${timeNow.toLocaleTimeString()}`);
  }

  return (
    <div>
      <Hello />
      <hr />
      <Welcome name={"Francesco"} age={12} />
      <hr />
      <AlertClock onClick={handleShowTime} />
      <hr />
      <Counter initialValue={4} increment={3} decrement={2} />
    </div>
  );
}
