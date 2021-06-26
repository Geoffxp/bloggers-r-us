import React, { useState, useEffect } from "react";
import ListUsers from "./ListUsers";
import Header from "./Header";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users"
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([]);
  const abortController = new AbortController();
  const signal = abortController.signal;
  useEffect(() => {
    async function getUsers(){
      const response = await fetch(url, signal)
      setUsers(await response.json())
    }
    getUsers();

    return () => {
      abortController.abort();
    }
  }, [])


  
  return (
    <>
      <Header />
      <ListUsers users={users} url={url} posts={posts} setPosts={setPosts} />
    </>
  )
}

export default App;
