import React, { useState } from 'react'
import Card from '../components/Card'

import devR from '../assets/images/react-pic.png'
import devB from '../assets/images/bootstrap-pic.png'
import devE from '../assets/images/es6.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Carousel = props => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: 'Dev React',
      subTitle: 'React stack',
      imgSrc: devR,
      link: 'https://github.com/kribeau',
      selected: false
    },
    {
      id: 1,
      title: 'Dev Es6',
      subTitle: 'Mordern javascript',
      imgSrc: devE,
      link: 'https://github.com/kribeau',
      selected: false
    },
    {
      id: 2,
      title: 'Bootstrap',
      subTitle: 'The most popular UI framework',
      imgSrc: devB,
      link: 'https://github.com/kribeau',
      selected: false
    }
  ])

  const handleCardClick = (id, card) => {
    let newItems = [...items]
    newItems[id].selected = newItems[id].selected ? false : true
    newItems.forEach(item => {
      if (item.id !== id) {
        item.selected = false
      }
    })
    setItems(newItems)
  }

  const makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => handleCardClick(item.id, e)}
          key={item.id}
        />
      )
    })
  }

  return (
    <Container fluid={true} style={{ marginBottom: 120 }}>
      <Row className="justify-content-around">{makeItems(items)}</Row>
    </Container>
  )
}

export default Carousel
