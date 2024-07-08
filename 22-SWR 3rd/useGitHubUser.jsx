import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGitHubUser(username) {
  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  function fetchGitHubUser() {
    mutate();
  }

  return {
    loading: !data && !error,
    error,
    user: data,
    onFetchUser: fetchGitHubUser,
  };
}
