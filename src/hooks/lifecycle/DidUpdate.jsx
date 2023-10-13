/**
 * Ejemplo de uso del metodo componentDidUpdate del ciclo de vida en componente de clase
 * y el hook de ciclo de vida en componente funcional
 *  
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

  componentDidUpdate(){
    console.log('comportamiento cuando el componente recibe nuevos props o cambia en su estado de react')
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


export const DidUpdateHook = () => {

  useEffect(() => {
    console.log('comportamiento cuando el componente recibe nuevos props o cambia en su estado de react')
  });

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
}
