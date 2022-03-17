import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import Carrito from "./Carrito"
import ItemDetailContainer from "./ItemDetailContainer"


const Main = () => {
  return (
    <Container as="main" fluid>  
       <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/cat/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
    </Container>
    
  )
}

export default Main