import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div>
      <p>
        Welcome, <strong>{props.name}</strong>!
      </p>
      {/*props.age > 18 && <Age {...props} />}
      {props.age && <Age {...props} />}
      {props.age > 18 && props.age < 65 && <Age {...props} />*/}
      {props.name === "John" && props.age > 18 && props.age < 65 && <Age {...props} />}
    </div>
  );
}
