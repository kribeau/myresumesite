import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

const AboutPage = props => (
  <div>
    <Hero title={props.title} />
    <Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
        commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
        commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
        commodi.
      </p>
    </Content>
  </div>
)

export default AboutPage
