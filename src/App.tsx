import React, { FormEvent, useState } from "react";
import { useGetPostsDataQuery, useNewPostMutation } from "./redux/api";
import PostsCards from "./component/PostsCards";
import './App.css'

const App: React.FC = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsDataQuery("");
  console.log(isLoading, isError, isSuccess, data, error)

  const [newPost] = useNewPostMutation()

  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

  const submitHandler = (e:FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const post:Post = {
      title,
      body,
      userID: Math.random() * 1000,
      id: Math.random() * 1000,
    }
    newPost(post);
    setTitle('');
    setBody("");
  }

  return (
    <div>
      <h1>API GET and POST from SERVER</h1>

      <form onSubmit={submitHandler} className="form">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Title" value={body} onChange={(e) => setBody(e.target.value)}/> 
        <button type="submit" className="bg-red-300 text-2xl">ADD</button>
      </form>

      { isLoading?(<div>LOADING...</div>) :
        (data?.map( (i) => (
          <PostsCards key={i.id} post={i} />
        )))
      }
    </div>
  )
}

export default App