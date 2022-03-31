import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {

    
    const [estado, setEstado] = useState(initial);
  
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

  return (
    
    <Container>
      <div> Cantidad de productos: {estado} </div>
        <button onClick={sumar}> + </button>
        <button onClick={AgregarCarro}> AGREGAR AL CARRITO</button>
        <button onClick={restar}> - </button>
      
        

      <div> STOCK : {stock} </div>
    </Container> 


  )
}

export default ItemCount