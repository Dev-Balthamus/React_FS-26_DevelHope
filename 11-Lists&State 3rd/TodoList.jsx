import { useEffect, useRef, useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  const mountedRef = useRef(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Component mounted for the first time");
    }

    inputRef.current?.focus();
  }, []);

  function readInputAddTodo(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((todos) => [...todos, todo]);
    event.target.elements.todo.value = null;
  }

  function resetTodos() {
    setTodos([]);
  }

  function removeTodo(indexToRemove) {
    setTodos(
      todos.filter((_, index) => {
        return index !== indexToRemove;
      })
    );
  }

  return (
    <div>
      <h2>My ToDos List</h2>
      <form onSubmit={readInputAddTodo}>
        <input ref={inputRef} placeholder="write here your next ToDo" name="todo" />
        <button type="submit">Add ToDo</button>
        <button type="reset" onClick={resetTodos}>
          Reset ToDos
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            <button onClick={() => removeTodo(index)}>Remove ToDo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
