import React from 'react'

const MapConcept = () => {
    const names = ['vinod','kumar','thambi'];
  return (
    <div>
      {names.map((names) =>{
        return <p key={names}>{names}</p>
      })}
    </div>
  )
}

export default MapConcept
