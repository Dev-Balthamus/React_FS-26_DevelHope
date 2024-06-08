import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login() {
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

  return (
    <div>
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
    </div>
  );
}
