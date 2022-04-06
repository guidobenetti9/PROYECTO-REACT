import { createContext, useState, useEffect } from "react";


export const contexto = createContext();

const { Provider } = contexto;


const CartProvider = ({children}) => {
    const [cant, setCant] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log(carrito);
        
    }, [carrito])
    

    const addItem = (producto,cantidad) => {
         console.log(producto);
         console.log(cantidad);
        const copiaCart = [...carrito];
        const itemAlCarrito = {...producto, cantidad};

        if(isInCart(producto.id)) {
            const index = copiaCart.findIndex(item => item.id === producto.id);
            copiaCart[index].cantidad += cantidad;
            setTotal(total+producto.precio*cantidad);
        } 
        else {
        copiaCart.push(itemAlCarrito);
        setCarrito(copiaCart);
        setCant(cant+1);
        setTotal(total+producto.precio*cantidad);
        console.log(itemAlCarrito);
        }
       
    }
    const isInCart = (id) => {
        return carrito.some(item => item.id === id);  
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