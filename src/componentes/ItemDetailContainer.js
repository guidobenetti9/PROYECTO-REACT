import React from 'react'
import {useState,useEffect} from "react";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from "../firebase";
import { collection, getDocs, query,where} from "firebase/firestore";



const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const {idProducto} = useParams();


    useEffect(()=>{
        const productosCollection = collection(db,"productos");
        const filtro = query(productosCollection, where("id", "==", Number(idProducto)));
        const consulta = getDocs(filtro);

        consulta
        .then((resultado)=>{
          toast.dismiss()
          setProductos(resultado.docs[0].data())
    
        })
        .catch(()=>{toast.error("Error al cargar los productos");})
        
    },[idProducto]);

  return (
      <ItemDetail detail={productos}/>
      


  )
}

export default ItemDetailContainer