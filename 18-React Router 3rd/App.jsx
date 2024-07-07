import { Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { useState } from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGitHubUser } from "./ShowGitHubUser";

export function App() {
  const [username, setUsername] = useState("");

  return (
    <Container title={<h1>My Training React App</h1>}>
      <br />
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      <hr />
      <Routes>
        <Route path="/" element={<Welcome name={username} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGitHubUser />} />
      </Routes>
    </Container>
  );
}
