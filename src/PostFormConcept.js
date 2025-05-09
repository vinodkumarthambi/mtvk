import React from 'react'
import { useState } from 'react'

const PostFormConcept = () => {
    const [userID,setUserID] = useState('')
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const handleSubmit = (event)=>{
               event.preventDefault();
               fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title: title,
                  body: body,
                  userId: userID,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <input type='text' placeholder='User Id' value={userID} onChange={(e)=>setUserID(e.target.value)}></input>
        <input type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <input type='text' placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)}></input>
    </div>
    <button type='submit'>submit</button>
    </form>
  )
}

export default PostFormConcept
