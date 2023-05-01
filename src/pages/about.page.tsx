import { useEffect, useState } from "react";
import { navigate } from "vite-plugin-ssr/client/router";
import { PageProps } from "../types";

export { Page };

function Page({ comments = null }: PageProps) {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function getTodo() {
      const _todo = await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json();
      setTodo(_todo);
    }
    getTodo();
  }, []);

  return (
    <>
      <div>About Page Test</div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>++</button>
      <div>{JSON.stringify(todo)}</div>
      <div>{comments !== null ? JSON.stringify(comments) : ""}</div>

      <div>
        <button onClick={() => navigate("/")}>index</button>
        <button onClick={() => navigate("/about")}>About</button>
      </div>
    </>
  );
}
