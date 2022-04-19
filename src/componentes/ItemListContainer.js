import ItemList from "./ItemList";
import {useState,useEffect} from "react";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect(()=>{
    

    const productosCollection = collection(db,"productos");
    
  
    if(!idCategoria){

      const consulta = getDocs(productosCollection);
    
      toast.info("Cargando productos....")

      consulta
    .then((resultado)=>{
      toast.dismiss()
      setProductos(resultado.docs.map((doc)=>doc.data()))

    })
    .catch(()=>{toast.error("Error al cargar los productos");})

  }else{
    const filtro = query(productosCollection, where("categoria", "==", idCategoria));
    const consulta = getDocs(filtro);

    consulta
    .then((resultado)=>{
      toast.dismiss()
      setProductos(resultado.docs.map((doc)=>doc.data()))
    })
    .catch(()=>{toast.error("Error al cargar los productos");})
  }
  },[idCategoria]);
    
  return (

      <ItemList Items= {productos}/>

  )
}

export default ItemListContainer;