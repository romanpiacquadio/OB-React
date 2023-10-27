import React, { useState } from 'react'

const OptionalRender = () => {

  const [access, setAccess] = useState(true);

  const updateAccess = () => {
    setAccess(!access)
  }

  let optionalButton

  if(access) {
    optionalButton = <button onClick={updateAccess}>LogOut</button>
  } else {
    optionalButton = <button onClick={updateAccess}>LogIn</button>
  }
  

  return (
    <div>
      { optionalButton }
    </div>
  )
}

export default OptionalRender