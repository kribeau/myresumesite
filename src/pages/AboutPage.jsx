import React from 'react'
import devMe from '../assets/images/devMe.jpg'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutPage = props => (
  <div className="margin-5">
    <Hero title={props.title} />
    <Container>
      <Row>
        <Col sm={8}>
          <Content>
            <p>
              I'm{' '}
              <em>
                <strong>Chunmu Tiao</strong>
              </em>{' '}
              , my friends called me{' '}
              <em>
                <strong>mumu .</strong>
              </em>
              I'm from{' '}
              <em>
                <strong>Guang'an</strong>
              </em>
              , and studying in{' '}
              <em>
                <strong>Chengdu University</strong>
              </em>
              .
            </p>
            <p>
              I'm studying the{' '}
              <em>
                <strong>IOT(Internet of Things)</strong>
              </em>{' '}
              profession.
            </p>

            <h2>
              <strong>
                <em>Skills: </em>
              </strong>
            </h2>

            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>ES6</li>
              <li>Git</li>
            </ul>
            <h2>
              <strong>
                <em>Hobbys: </em>
              </strong>
            </h2>
            <ul>
              <li>Basketball</li>
              <li>Guitar</li>
              <li>Sing</li>
            </ul>
            <h2>
              <strong>
                <em>Blog address: </em>
              </strong>
            </h2>
            <ul>
              <li>
                <a href="https://dev-chunmu.netlify.com/">chunmu.netlify.com</a>
              </li>
            </ul>
          </Content>
        </Col>
        <Col sm={4}>
          <div className="d-inline-block g-card">
            <img className="g-card-image my-info" src={devMe} alt="me" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default AboutPage
