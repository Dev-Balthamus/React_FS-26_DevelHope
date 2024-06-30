import { useState } from "react";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { GitHubUsers } from "./GitHubUsers";

export function App() {
  const [language, setLanguage] = useState("it");

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }

  function handleLogin(data) {
    console.log("Dati nel Login Form: ", data);
  }
  return (
    <Container title={<h1>My Training React App</h1>}>
      <br />
      <select name="languages" onChange={handleSetLanguage} value={language}>
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>
      <LanguageContext.Provider value={language}>
        <hr />
        <div className="welcome">
          <InteractiveWelcome />
        </div>
        <br />
        <hr />
        <GitHubUsers />
        <hr />
        <Clock />
        <hr />
        <Counter initialValue={4} increment={3} decrement={2} />
        <hr />
        <br />
        <Login onLogin={handleLogin} />
        <br />
        <hr />
        <TodoList />
      </LanguageContext.Provider>
    </Container>
  );
}
