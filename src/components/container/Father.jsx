import React, { useState } from 'react'
import Child from '../pure/Child'

function Father() {

  const [name, setName] = useState('Martín')

  function showMessage (text) {
    alert(`Message received: ${text}`)
  }
  
  function updateName (newName) {
    setName(newName)
  }

  return (
    <div style={{background: 'tomato', padding: '10px'}}>
        <Child name={name} update={updateName} send={showMessage}></Child>
    </div>
  )
}

export default Father