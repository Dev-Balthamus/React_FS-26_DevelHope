import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GitHubUserList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch("https://api.github.com/users")
      .then((r) => r.json())
      .then((j) => {
        setUsers(j);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There has been an error.</h2>}
      {users && (
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link to={`${user.login}`}>{user.login}</Link>
              </li>
            ))}
          </ul>
          <hr />
          <Outlet />
        </div>
      )}
    </div>
  );
}
