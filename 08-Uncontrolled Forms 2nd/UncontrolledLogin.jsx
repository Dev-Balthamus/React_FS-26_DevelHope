export function UncontrolledLogin() {
  function handleLogin(event) {
    event.preventDefault();

    const loginData = new FormData(event.target);

    const data = {
      username: loginData.get("username"),
      password: loginData.get("password"),
      remember: loginData.get("remember") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="username" />
      <input name="password" type="password" />
      <input name="remember" type="checkbox" />
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
