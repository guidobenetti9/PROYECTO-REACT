import React, { useEffect } from 'react'
import { useContext } from 'react'
import { contexto } from '../context/CartContext'


const Carrito = () => {
  const { carrito } = useContext(contexto)


  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map(item => (
        <div key={item.id}>
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cant}</p>
          <p>PRECIO: {item.precio}</p>
          <p>Total Parcial : {item.cant * item.precio}</p>
        </div>
      ))}
    </div>
  )
}

export default Carrito