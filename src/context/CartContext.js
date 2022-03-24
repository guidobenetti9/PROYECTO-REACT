import { createContext, useState} from "react";


export const contexto = createContext();

const { Provider } = contexto;

const CartProvider = ({children}) => {
    const [cant, setCant] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);


    const addItem = (producto,Cantidad) => {
        const copiaCart = [...carrito];
        const itemAlCarrito = {...producto,Cantidad};
        copiaCart.push(itemAlCarrito);
        setCarrito(copiaCart);
        setCant(cant+1);
        
    }
     
    const valorProvider = {
        carrito,
        cant,
        total,
        addItem
    
    }
    return (

        <Provider value={valorProvider}>
            {children}
        </Provider>
    )
}
export default CartProvider;