/**
 * Ejemplo de uso del metodo del ciclo de vida en componente de clase
 * y el hook de ciclo de vida en componente funcional
 *  
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

  componentDidMount(){
    console.log('comportamiento antes e que el componente sea añadido al DOM (renderice)')
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}


export const DidMountHook = () => {

  useEffect(() => {
    console.log('comportamiento antes e que el componente sea añadido al DOM (renderice)')
  }, []);

  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
}
