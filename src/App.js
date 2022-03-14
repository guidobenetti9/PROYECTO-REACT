
import Footer from "./componentes/Footer"
import Main from "./componentes/Main"
import Header from "./componentes/Header"
import ItemListContainer from "./componentes/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./componentes/ItemDetailContainer";

const App = () => {
  return (
      <>
      <Header/>
      <Main />
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Footer/>
      
      </>
  )
}

export default App

