import React from 'react'
import { useState,useEffect } from 'react'

const PostConcept = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data)=>setData(data))
        .catch((err)=>{console.log(err)})
    },[])
  return (
    <div>
      <ul>
        {data.map((data)=>{
          return <li key={data.id}>{data.title}</li>
        })}
      </ul>
    </div>
  )
}

export default PostConcept
