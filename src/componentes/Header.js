import Navbar from "./Navbar"
import CarWidget from "./CarWidget"

import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Header = () => {
  return (
    <Container fluid as="header">

    <Row>
      <Col> {<h1> BM-Gamestore </h1>} </Col>
      <Col> 
      <CarWidget/>
      <Navbar/> 
      </Col>
    </Row>
    </Container>
  )
}

export default Header