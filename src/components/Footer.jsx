import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = props => (
  <footer className="mt-5 font-1 sticky-bottom bg-transparent">
    <Container fluid={true}>
      <Row className="border-top justify-content-between p-3">
        <Col className="p-0" md={3} sm={12}>
          {props.name}
        </Col>
        <Col className="p-0 d-flex justify-content-end" md={3}>
          This site was made by Chunmu Tiao &nbsp;
          <span role="img" aria-label="heart">
            💘
          </span>
          .
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
