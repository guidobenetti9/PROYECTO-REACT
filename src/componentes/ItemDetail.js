import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {

  const onAdd = (CantidadSeleccionada)=> {
    console.log("añadir al carrito", CantidadSeleccionada)
  }

  return (

        <article className='itemDetail'>
            <img src= {"https://picsum.photos/500/350"} alt="imagen"/>
            <div> 
             <h3> NOMBRE: {detail.nombre}  </h3>
             <p> PRECIO: {detail.precio} </p>
             <p> DESCRIPCION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
           
            </div>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </article>


  )
}

export default ItemDetail