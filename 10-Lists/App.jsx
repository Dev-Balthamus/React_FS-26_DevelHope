import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { Colors } from "./Colors";

export function App() {
  function handleLogin(data) {
    console.log("Dati nel Login Form: ", data);
  }
  return (
    <div>
      <Hello />
      <hr />
      <Colors
        colors={[
          { id: 1, name: "Blue" },
          { id: 2, name: "Green" },
          { id: 3, name: "Yellow" },
          { id: 4, name: "Orange" },
          { id: 5, name: "Red" },
        ]}
      />
      <hr />
      <Clock />
      <hr />
      <Counter initialValue={4} increment={3} decrement={2} />
      <hr />
      <MouseClicker />
      <hr />
      <Login onLogin={handleLogin} />
    </div>
  );
}
