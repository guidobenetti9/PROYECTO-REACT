import React from 'react'
import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import {contexto} from "../context/CartContext"

const ItemDetail = ({detail}) => {
    
    const [Cantidad, setCantidad] = useState(0)
    const {addItem} = useContext(contexto)
  
    const onAdd = (cant)=> {
      setCantidad(cant)
      addItem(detail,cant)
    }
    
  return (

        <article className='itemDetail'>
            <img src= {"https://picsum.photos/500/350"} alt="imagen"/>
            <div> 
             <h3> NOMBRE: {detail.nombre}  </h3>
             <p> PRECIO: {detail.precio} </p>
             <p> DESCRIPCION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
           
            </div>
        {
          Cantidad === 0 ?  <ItemCount stock={5} initial={1} onAdd={onAdd} />  : 
            <Link to="/carrito"> Ir al carrito </Link>
        }
       
        </article>


  )
}

export default ItemDetail