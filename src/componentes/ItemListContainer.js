import ItemList from "./ItemList";
import {useState,useEffect} from "react";

let Juegos = [
  {
      id:1,
      nombre: "Juego 1",
      precio: "100"

  },
  {
      id:2,
      nombre: "Juego 2",
      precio: "200"

  },
  {
      id:3,
      nombre: "Juego 3",
      precio: "300"

  }
]

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

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

    <> 
      <ItemList Items= {productos}/>
    </>

  )
}

export default ItemListContainer;