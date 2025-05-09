import React from 'react'

const ConditionBasedRender = () => {
    const isUser = true;
  return (
    <div>
      <p>welcome to {isUser ? 'vinod' : 'user'}</p>
    </div>
  )
}

export default ConditionBasedRender
