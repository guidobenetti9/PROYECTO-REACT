import ItemList from "./ItemList";
import {useState,useEffect} from "react";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

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

  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect(()=>{

    toast.info("Cargando productos....")
    const pedido = new Promise ((res,rej)=>{
      setTimeout(()=>{
        res(Juegos)
       
    },2000)
    })
  
    pedido
    .then((resultado)=>{
        toast.dismiss()
        setProductos(resultado)
    })
    .catch((error)=>{
      toast.error("hubo un error")
    })

  },[idCategoria]);
    
  return (

      <ItemList Items= {productos}/>

  )
}

export default ItemListContainer;