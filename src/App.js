
import Footer from "./componentes/Footer"
import Main from "./componentes/Main"
import Header from "./componentes/Header"
import Item_List_Container from "./componentes/Item_List_Container";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <>
      <Header/>
      <Main />
      <Item_List_Container nombre="Guido"/>
      <Footer/>
      
      </>
  )
}

export default App

