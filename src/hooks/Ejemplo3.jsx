/**
 * Ejemplo Hooks 
 * useState()
 * useContext()
 */

import React, { useEffect, useContext, useState } from 'react';


/**
 * 
 * @returns Componente 1
 *  Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
*/
const miContexto = React.createContext(null)

const Componente1 = () => {
  
  const state = useContext(miContexto)

  return (
    <div>
      <h1>
        El token es: {state.token}
      </h1>
      {/*Pintamos aqui el componente 2*/}
      <Componente2 />
    </div>
  );
}

const Componente2 = () => {
  
  const state = useContext(miContexto);
  
  return (
    <div>
      <h2>
        La sesion es : {state.session}
      </h2>
    </div>
  );
}

export const MiComponenteConContexto = () => {
  
  const estadoInicial = {
    token: '123456',
    session: 1
  }

  // Crear estado del componente
  const [sessionData, setSessionData] = useState(estadoInicial);
  
  function actualizarSesion() {
    setSessionData({
      token: 'JWT123456789',
      session: sessionData.session + 1
    })
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esta aca adentro puede leer los datos de sessionData*/}
      {/* Si se actualizan los componentes de aqui tambien lo actualiza*/}
      <h1>*** Ejemplo de useState() y useContext() ***</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  );
}

export default MiComponenteConContexto;


