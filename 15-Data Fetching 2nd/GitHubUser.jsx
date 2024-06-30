import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGitHubUser(username) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There has been an error.</h2>}
      {data && (
        <div>
          <img src={data.avatar_url} alt="GitHub's User avatar" />
          <h2>{data.login}</h2>
          <h2>{data.name}</h2>
        </div>
      )}
    </div>
  );
}