import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Masa7teeButton from '../components/common/Masa7teeButton'
import HallsSearchFilter from '../components/halls/HallsSearchFilter'
import { arabicTextStyling, hallsSpec } from '../components/common/constants'
import { array_chunks } from '../components/common/utils'
import { useState } from 'react'
const BookHallsPage = () => {
  const [location, setLocation] = useState()
  const [capacity, setCapacity] = useState()
  const [name, setName] = useState()
  let cardGroups = []
  let cards = []
  let filteredHallsSpec
  filteredHallsSpec =
    location === undefined || location === 'كل المحافظات'
      ? hallsSpec
      : hallsSpec.filter((hallSpec) => hallSpec.location === location)

  filteredHallsSpec =
    capacity === undefined || capacity === 'كل السعات'
      ? filteredHallsSpec
      : filteredHallsSpec.filter((hallSpec) => {
          switch (capacity) {
            case '0':
              return (
                Number(hallSpec.capacity) <= 50 ||
                isNaN(Number(hallSpec.capacity))
              )
            case '1':
              return (
                Number(hallSpec.capacity) > 50 &&
                Number(hallSpec.capacity < 100)
              )
            case '2':
              return Number(hallSpec.capacity >= 100)
            default:
              return hallSpec
          }
        })
  filteredHallsSpec =
    name === undefined
      ? filteredHallsSpec
      : filteredHallsSpec.filter((hallSpec) => hallSpec.name.includes(name))
  for (let i = 0; i < filteredHallsSpec.length; i++) {
    let hallSpec = filteredHallsSpec[i]
    cards.push(
      <Card key={i}>
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
    cardGroups.push(<CardGroup key={i}>{card_chunks[i]}</CardGroup>)
  }

  return (
    <div style={arabicTextStyling}>
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
