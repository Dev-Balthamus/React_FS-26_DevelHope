import { AlertClock } from "./AlertClock";
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
    </div>
  );
}
