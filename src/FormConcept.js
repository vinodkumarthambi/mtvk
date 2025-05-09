import React from 'react'
import { useState } from 'react'

const FormConcept = () => {
    const [name,setName] = useState('')
    const handleSubmit  = (event)=>{
        event.preventDefault();
        alert(`Form data is ${name}`)
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>UserName</label>
        <input type='text' value={name} onChange={(event)=>{setName(event.target.value)}}></input>
    </div>
    <button type='submit'>submit</button>
    </form>
  )
}

export default FormConcept
