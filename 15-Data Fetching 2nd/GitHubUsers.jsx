import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  async function fetchGitHubUsers() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${searchTerm}`);
      const json = await response.json();
      setUsers([...users, json]);
      console.log(users);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  
  }
  
  function handleSearch(event) {
    event.preventDefault();
    fetchGitHubUsers();
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="write here one GitHub username" />
        <button type="submit">Display GitHub user data!</button>
      </form>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There has been an error.</h2>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <GitHubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  )
}