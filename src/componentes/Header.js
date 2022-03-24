import Navbar from "./Navbar"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import {contexto} from "../context/CartContext"
import CarWidget from "./CarWidget"
import { useContext } from "react"


const Header = () => {
  const {cant} = useContext(contexto)
  
  return (
    <Container fluid as="header">

    <Row>
      <Col> 
      <Link to="/">{<h1> BM-Gamestore </h1>}  </Link>
      </Col>
      <Col>
      <Link to="carrito"> 
      <CarWidget/> 
      </Link> 
      {cant}
      <Navbar/> 
      </Col>
    </Row>

    </Container>
  )
}

export default Header