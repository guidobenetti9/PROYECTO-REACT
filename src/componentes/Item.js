import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    
  console.log(item.precio)
  return (
     
    <article>
      <h2> {item.nombre}  </h2>
      <img src={item.image} alt='elden ring'/>
      <p> PRECIO : ${item.precio}</p>
      <Link to= {`/producto/${item.id}`}> <button> Ver más </button> </Link>
    </article>
  )
}

export default Item