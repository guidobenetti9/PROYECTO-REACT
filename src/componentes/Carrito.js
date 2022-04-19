import React from 'react'
import { useContext } from 'react'
import { contexto } from '../context/CartContext'
import { Link } from "react-router-dom"


const Carrito = () => {
  const { carrito, eliminarItem, total} = useContext(contexto)



  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map(item => (
        <div key={item.id}>
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>PRECIO: {item.precio}</p>
          <p>Total Parcial : {item.cantidad * item.precio}</p>
          <button onClick={()=> eliminarItem(item.id)}>Eliminar producto </button>
        </div>
      ))}
      <p>Total: ${total}</p>
      <button> <Link to={`/formulario`} className="link">  Terminar compra </Link> </button>
    </div>
  )
}

export default Carrito