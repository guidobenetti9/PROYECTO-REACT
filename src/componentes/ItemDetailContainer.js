import React from 'react'
import {useState,useEffect} from "react";
import ItemDetail from './ItemDetail';

let Juegos = 
    {
        id:1,
        nombre: "Juego A",
        precio: "100"
  
    }

  
const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})

    useEffect(()=>{
      console.log("esta andando")
  
      const pedido = new Promise ((res,rej)=>{
        setTimeout(()=>{
          res(Juegos)   
      },2000)
      })
    
      pedido
      .then((resultado)=>{
          console.log("esta bien")
          setProductos(resultado)
      })
      .catch((error)=>{
        console.log("mal")
      })
  
    },[]);
  return (
      <ItemDetail detail={productos}/>


  )
}

export default ItemDetailContainer