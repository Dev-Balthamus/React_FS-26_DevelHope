import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(createData());

  function handleUserDataChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLogin() {
    console.log(data);
    onLogin(data);
  }

  function handleDataReset() {
    setData(createData());
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin();
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Username: </span>
      <input name="username" value={data.username} onChange={handleUserDataChange} />
      <span>Password: </span>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleUserDataChange}
      />
      <span>Remember me: </span>
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleUserDataChange}
      />
      <button disabled={!data.username || !data.password} type="submit">
        Login
      </button>
      <button onClick={handleDataReset}>Reset</button>
    </form>
  );
}
