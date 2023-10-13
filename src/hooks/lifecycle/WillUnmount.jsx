/**
 * Ejemplo de uso del metodo componentWillUnmount del ciclo de vida en componente de clase
 * y el hook de ciclo de vida en componente funcional
 *  
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

  componentWillUnmount(){
    console.log('comportamiento cuando el componente está por desmontarse')
  }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}


export const WillUnmountHook = () => {

  useEffect(() => {
    return () => {
      console.log('comportamiento cuando el componente está por desmontarse')
    };
  }, []);

  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  );
}
