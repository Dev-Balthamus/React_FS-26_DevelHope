import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name={"John"} age={31} />
    </div>
  );
}
