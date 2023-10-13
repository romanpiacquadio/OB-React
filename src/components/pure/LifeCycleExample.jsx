/**
 * Ejemplo de componente de clase que dispone
 * de los metodos del ciclo de vida
 */

import React, { Component } from 'react'

export default class LifeCycleExample extends Component {

  constructor(props) {
    super(props)
    console.log('cuando se instancia el componente')
  }

  componentWillMount() {
    console.log('componentWillMount: Antes del montaje del componente')
  }

  componentDidMount() {
    console.log('componentDidMount: Just al acabar el montaje, antes de renderiarlo')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: Si va a recibir nuevas props')
  }

  shouldComponentUpdate(nextProps,nextState) {
    /**
     * Controlar si el compoenten debe o no actualizarse
     */
    
    // return true / false
  }

  componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate: Justo antes de actualizarse')
  }

  componentDidUpdate(nextProps,nextState){
    console.log('componentDidUpdate: Justo despues de actualizarse')
  }

  componentWillUnmount(nextProps,nextState){
    console.log('componentWillUnmount: Justo antes de desaparecer')
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

