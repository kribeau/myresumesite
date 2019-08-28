import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Hero = props => (
  <Jumbotron className="bg-transparent jumbotron-fluid mt-5 p-0 font-2">
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          {props.title && (
            <h1 className="display-2 font-weight-bolder">{props.title}</h1>
          )}
          {props.subTitle && (
            <h1 className="lead font-weight-light">{props.subTitle}</h1>
          )}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default Hero
