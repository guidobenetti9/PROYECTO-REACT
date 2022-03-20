import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {

    useState();
    const [estado, setEstado] = useState(initial);
    const [stockInicial, stockFinal] = useState(stock);
    const [stockVacio, stockIncremento]= useState(0)

    const sumar = () =>{
        if (estado<stock) {
        setEstado(estado+1);
        }
        
    }
    const AgregarCarro = () => {
      onAdd(estado)
    }
    const restar = () =>{
        if (estado>initial) {
            setEstado(estado-1);
            }
    }
    const stockRestante = () =>{
       stockFinal(stock-1)
    }

  return (
    
    <Container>
      <div> Cantidad de productos: {estado} </div>
        <button onClick={()=>{
           const sumar = () =>{
            if (estado<stock) {
            setEstado(estado+1);
            }
            
        }
        const stockRestante = () =>{
          stockFinal(stock-estado);
       }
       sumar();
       stockRestante();
        }}> + </button>
        <button onClick={AgregarCarro}> AGREGAR AL CARRITO</button>
        <button onClick={()=>{
          const restar = () =>{
            if (estado>initial) {
                setEstado(estado-1);
                }
        }
        const stockSuma = () =>{
          if(stock>stockVacio){
             stockFinal(stock-estado);
          }
         
       }
       restar();
       stockSuma();
        }}> - </button>
      
        

      <div> STOCK : {stockInicial} </div>
    </Container> 


  )
}

export default ItemCount