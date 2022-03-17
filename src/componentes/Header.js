import Navbar from "./Navbar"
import CarWidget from "./CarWidget"

import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <Container fluid as="header">

    <Row>
      <Col> <Link to="/">{<h1> BM-Gamestore </h1>}  </Link></Col>
      <Col> 
      <Link to="carrito"> <CarWidget/> </Link>
     
      <Navbar/> 
      </Col>
    </Row>

    </Container>
  )
}

export default Header