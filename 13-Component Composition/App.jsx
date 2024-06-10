import { Clock } from "./Clock";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";

export function App() {
  function handleLogin(data) {
    console.log("Dati nel Login Form: ", data);
  }
  return (
    <Container title={<h1>My Training React App</h1>}>
      <hr />
      <div className="welcome">
        <InteractiveWelcome />
      </div>
      <br />
      <Clock />
      <hr />
      <Counter initialValue={4} increment={3} decrement={2} />
      <hr />
      <br />
      <Login onLogin={handleLogin} />
      <br />
      <hr />
      <TodoList />
    </Container>
  );
}
