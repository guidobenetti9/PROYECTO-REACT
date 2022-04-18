import { createContext, useState} from "react";


export const contexto = createContext();

const { Provider } = contexto;


const CartProvider = ({children}) => {
    const [cant, setCant] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    
    const addItem = (producto,cantidad) => {

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
        }
       
    }

    const isInCart = (id) => {
        return carrito.some(item => item.id === id);  
    }

    const eliminarItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
        setCant(cant-1);
        setTotal(total-carrito.find(item => item.id === id).precio);
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