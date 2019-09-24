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
              <em>
                <strong> .</strong>
              </em>
              From{' '}
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
              Studying the{' '}
              <em>
                <strong>IOT(Internet of Things)</strong>
              </em>{' '}
              profession.
            </p>
            <p>
              I learned about web front-end develop by chance. Front-end
              development is the closest to the user level. It make user
              experience from 90% to 100% even more. I like it.
            </p>
            <p>
              I learned front-end develop from{' '}
              <strong>
                <em>Youtube</em>
              </strong>{' '}
              and{' '}
              <strong>
                <em>Medium</em>
              </strong>
              . Dev Ed was my favourate youtube channel. And Simo Edwin who's a
              dude in youtube teached me more about React and Sass.
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
                <a href="https://dev-chunmu.netlify.com/">
                  dev-chunmu.netlify.com
                </a>
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
