import Footer from "./componentes/Footer"
import Main from "./componentes/Main"
import Header from "./componentes/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";



const App = () => {
  return (
      <BrowserRouter> 
          <CartProvider>
                <Header/>
                <Main />
          </CartProvider>
        <Footer/>
        <ToastContainer/>
      </BrowserRouter>

      
  )
}

export default App

