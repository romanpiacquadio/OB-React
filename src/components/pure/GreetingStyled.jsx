import React, { useState } from 'react';

// Definiendo estilos en constantes

// estilos cuando el usuario esta loggeado
const loggedStyles = {
  color: 'white'
};


// estilos cuando el usuario  no esta loggeado
const unloggedStyles = {
  color: 'tomato',
  fontWeight: 'bold'
};


const GreetingStyled = (props) => {
  // generamos un estado para saber si el usuario esta loggeado
  const [logged, setLogged] = useState(false);

  const greetingUser = (<p>Hola, { props.name }</p>)
  const pleaseLogin = (<p>Please Login</p>)
  
  return (
    <div style={logged ? loggedStyles : unloggedStyles}>
      { logged ? 
        greetingUser
        :
        pleaseLogin
      }
      <button onClick={ () => setLogged(!logged) }>
        { logged ? 'Logout' : 'Login' }
      </button>
    </div>
  );
}

export default GreetingStyled;
