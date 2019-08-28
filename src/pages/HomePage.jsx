import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const HomePage = props => (
  <>
    <Hero className="font-2" title={props.title} subTitle={props.subTitle} />
    <Carousel></Carousel>
  </>
)

export default HomePage
