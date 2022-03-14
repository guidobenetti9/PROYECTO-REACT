import React from 'react'

const ItemDetail = ({detail}) => {

  return (

        <ul>
            <li> NOMBRE: {detail.nombre} </li>
            <li> PRECIO: {detail.precio}   </li>

        </ul>


  )
}

export default ItemDetail