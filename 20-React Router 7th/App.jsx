import { Link, Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { useState } from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGitHubUser } from "./ShowGitHubUser";
import { GitHubUserList } from "./GitHubUserList";

export function App() {
  const [username, setUsername] = useState("");

  return (
    <Container title={<h1>My Training React App</h1>}>
      <hr />
      <br />
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="/users/">GitHub Users List</Link>
      </div>
      <br />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <br />
      <hr />
      <Routes>
        <Route path="/" element={<Welcome name={username} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GitHubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGitHubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Page not found</p>
              <Link to="/">Go to Home</Link>
            </div>
          }
        />
      </Routes>
    </Container>
  );
}
