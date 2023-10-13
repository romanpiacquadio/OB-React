import React, { useState, useEffect } from 'react';


const Ejemplo1 = () => {

  // Valor inicial para un contador
  const valorInicial = 0;

  //Valor inicial para una persona
  const personaInicial = {
    nombre: 'Martin',
    email: 'martin@mail.com'
  }

  // Queremos que el valorInicial y personaInicial sean parte del estado del componente
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial)

  /**
   * Funcion para actulizar el estado privado que contiene el contador
   */
  
  const incrementarContador = () => {
    setContador(contador + 1)
  }
  
  /**
   * Funcion para actualizar el estado de persona
   */
  const actualizarPersona = () => {
    if(persona.nombre === 'Martin') {
      setPersona(
        {
          nombre: 'Pepe',
          email: 'pepe@mail.com'
        }
      )
    } else {
      setPersona(personaInicial)
    }
  }

  return (
    <div>
      <h1>Ejemplo de useState</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona: </h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h4>Email: {persona.email}</h4>

      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  );
};




export default Ejemplo1;
