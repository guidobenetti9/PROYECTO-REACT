import React from 'react'
import { useContext } from 'react'
import { contexto } from '../context/CartContext'
import { db } from '../firebase'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'


const Carrito = () => {
  const { carrito, eliminarItem, total} = useContext(contexto)

  const TerminarCompra = () => {
    const orden = {
        buyer : {
            nombre : 'messi',
            email : 'aguante.messi@gmail',
            telefono : '5794532'
        },
        items : carrito,
        fecha: serverTimestamp(),
        total : total
    }
    const ordenesCollection = collection(db, 'ordenes')
    const pedido = addDoc(ordenesCollection, orden)

    pedido
    .then(() => {
        toast.success("Pedido realizado con exito!")
    })
    .catch(() => {
        toast.error("Error al realizar el pedido")
    })
  }


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
      <button onClick={TerminarCompra}> Terminar compra </button>
    </div>
  )
}

export default Carrito