import React, { useState } from 'react'

const ItemCount = () => {

    useState();
    const [estado, setEstado] = useState(1);
    const stock = 5
    const initial = 1

    const sumar = () =>{
        if (estado<stock) {
        setEstado(estado+1);
        }
        
    }
    const restar = () =>{
        if (estado>initial) {
            setEstado(estado-1);
            }
    }



  return (
    <> 
        <div> Cantidad de productos {estado} </div>
        
        <button onClick={sumar}> + </button>
        <button> AGREGAR AL CARRITO</button>
        <button onClick={restar}> - </button>
        <div> STOCK : {stock} </div>
    </>

  )
}

export default ItemCount