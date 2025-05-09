import  React from 'react'
import { useState } from 'react'

const MessageText = () => {
    const [message,setMessage] = useState('welcome to react')
  return (
    <div>
        <p>{message}</p>
         <button onClick={()=>setMessage('start the react')}>please change</button>
    </div>
  )
}

export default MessageText
