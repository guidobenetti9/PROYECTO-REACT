import React from 'react'
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Footer = () => {
  return (
  
  <Container fluid as ="footer">
    <Row>
    <section className='footer'>
        <Col><a href="*"> NOSOTROS </a>  </Col>
        <Col><a href="*"> CATALOGO </a>  </Col>
        <Col><a href="*"> UBICACION </a>  </Col>
    </section>
    </Row>

  </Container>

  )
}

export default Footer