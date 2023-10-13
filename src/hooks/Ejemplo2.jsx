/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
  
  // Vamos a crear 2 contadores distintos
  // Cada uno en un estado diferente

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1 () {
    setContador1(contador1 + 1)  
  }

  function incrementar2 () {
    setContador2(contador2 + 1)
  }

  /**
   * Trabajando con el useEffect()
   */

  /**
   * Caso 1: Ejecutar SIEMPRE un snippet de código
   */

  useEffect(() => {
    console.log('cambio en el estado del componente')
    console.log('mostrando referencia a elemento del dom')
    console.log(miRef)
  }, [contador1, contador2]);


  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>

      <button onClick={incrementar1}>Incrementar 1</button>
      <button onClick={incrementar2}>Incrementar 2</button>
    </div>
  );
}

export default Ejemplo2;
