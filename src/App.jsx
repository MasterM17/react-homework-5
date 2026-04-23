import Reac, { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";

export function App() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div id="app">
      <Nav></Nav>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/posts" element={<Posts postList={posts}></Posts>}></Route>
        <Route path="/todos" element={<Todos></Todos>}></Route>
      </Routes>
    </div>
  );
}
