type Todo = {
  useId: Number;
  id: Number;
  title: String;
  completed: boolean;
};

async function getData(): Promise<Todo[]> {
  //cache: 'force-cache'
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    cache: "force-cache", // para sempre ter uma nova requisição, use o no-store
    next: {
      revalidate: 120, // 2 minutos
    },
  });
  if (!res.ok) {
    throw new Error();
  }
  const data = await res.json();
  return data;
}

export default async function Todos() {
  const todos = await getData();
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
