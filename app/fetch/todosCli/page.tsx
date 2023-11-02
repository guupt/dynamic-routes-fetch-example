"use client";

import { useEffect, useState } from "react";

type Todo = {
  useId: Number;
  id: Number;
  title: String;
  completed: boolean;
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      if (!res.ok) {
        throw new Error();
      }
      const data: Todo[] = await res.json();
      // return data;  <--- a diferença é essa, a gente não retorna nada.

      setTodos(data);
    }

    getData();
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={String(todo.id)}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
