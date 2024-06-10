import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";

export function App() {
  function handleLogin(data) {
    console.log("Dati nel Login Form: ", data);
  }
  return (
    <div>
      <div className="welcome">
        <InteractiveWelcome />
      </div>
      <Clock />
      <hr />
      <Counter initialValue={4} increment={3} decrement={2} />
      <hr />
      <Login onLogin={handleLogin} />
      <hr />
      <TodoList />
    </div>
  );
}
