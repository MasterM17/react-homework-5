import React, { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => alert(err));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div id="todos">
      <h1>Todos</h1>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.title}</span>
                <input
                  type="checkbox"
                  value={todo.completed}
                  checked={todo.completed}
                  onChange={() => {
                    toggleTodo(todo.id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <h2> Loading...</h2>
      )}
    </div>
  );
};
