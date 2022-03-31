import { createContext, useState, useEffect } from "react";


export const contexto = createContext();

const { Provider } = contexto;

const CartProvider = ({children}) => {
    const [cant, setCant] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      console.log(carrito)
    

    }, [carrito])
    

    const addItem = (producto,cantidad) => {
        const copiaCart = [...carrito];
        const itemAlCarrito = [...carrito,{id:producto.id, nombre:producto.nombre, precio:producto.precio, cantidad:cantidad}];
        copiaCart.push(itemAlCarrito);
        setCarrito(copiaCart);
        setCant(cant+1);
        
    }

    const eliminarItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    }
     
    const valorProvider = {
        carrito,
        cant,
        total,
        addItem,
        eliminarItem
    
    }

    return (

        <Provider value={valorProvider}>
            {children}
        </Provider>
    )
}
export default CartProvider;