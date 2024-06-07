export function AlertClock({ onClick }) {
  return (
    <div>
      <p>Click the button below to:</p>
      <button onClick={onClick}>See the Current Time!</button>
    </div>
  );
}
