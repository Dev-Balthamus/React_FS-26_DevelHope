import { Link, useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGitHubUser() {
  const { username } = useParams();

  return (
    <div>
      <br />
      <GitHubUser username={username} />
      <Link to="/users">Back</Link>
    </div>
  );
}
