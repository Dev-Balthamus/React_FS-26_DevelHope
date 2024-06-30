import { useState } from "react";

export function useGitHubUser(username) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  async function fetchGitHubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      setUser(json);

    } catch (error) {
      setError(error);
      setUser(null);

    } finally {
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return {
    loading,
    error,
    user,
  };
};