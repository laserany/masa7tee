import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Masa7teeButton from '../components/common/Masa7teeButton'
import HallsSearchFilter from '../components/halls/HallsSearchFilter'
import { hallsSpec } from '../components/common/constants'
import { array_chunks } from '../components/common/utils'
import { useState } from 'react'
const BookHallsPage = () => {
  const [location, setLocation] = useState()
  const [capacity, setCapacity] = useState()
  const [name, setName] = useState()
  let cardGroups = []
  let cards = []
  for (let i = 0; i < hallsSpec.length; i++) {
    let hallSpec = hallsSpec[i]
    cards.push(
      <Card>
        <Card.Img variant='top' src={hallSpec.image} />
        <Card.Body>
          <Card.Title>قاعة {hallSpec.name}</Card.Title>
          <Card.Text>السعر: {hallSpec.price} دينار أردني</Card.Text>
          <Card.Text>المحافظة: {hallSpec.location}</Card.Text>
          <Card.Text>السعة: {hallSpec.capacity} شخص</Card.Text>
          <Masa7teeButton>احجز</Masa7teeButton>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>
            Last updated {hallSpec.updated} mins ago
          </small>
        </Card.Footer>
      </Card>
    )
  }
  let card_chunks = array_chunks(cards, 3)
  for (let i = 0; i < card_chunks.length; i++) {
    cardGroups.push(<CardGroup>{card_chunks[i]}</CardGroup>)
  }

  return (
    <div style={{ textAlign: 'right' }}>
      <HallsSearchFilter
        setLocation={setLocation}
        setCapacity={setCapacity}
        setName={setName}
      />
      {cardGroups}
    </div>
  )
}

export default BookHallsPage
