import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Masa7teeButton from '../components/common/Masa7teeButton'
import HallsSearchFilter from '../components/halls/HallsSearchFilter'
import { arabicTextStyling } from '../components/common/constants'
import { array_chunks } from '../components/common/utils'
import { useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { useFirestore } from '../firebase/FirestoreContext'
const BookHallPage = () => {
  let cards = []
  const db = useFirestore()
  const [location, setLocation] = useState()
  const [capacity, setCapacity] = useState()
  const [name, setName] = useState()
  const [allHalls, setAllHalls] = useState()
  const [cardGroups, setCardGroups] = useState([])
  React.useEffect(() => {
    async function fetchHalls() {
      const q = query(collection(db, 'halls'))
      const allHallsDocs = await getDocs(q)
      let temp = []
      allHallsDocs.forEach((doc) => temp.push(doc.data()))
      setAllHalls([...temp])
    }
    fetchHalls()
  }, [db])

  React.useEffect(() => {
    if (allHalls) {
      setCardGroups([])
      let filteredHallsSpec
      filteredHallsSpec =
        location === undefined || location === 'كل المحافظات'
          ? allHalls
          : allHalls.filter((hall) => hall.location === location)
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
            <Card.Img variant='top' src={hallSpec.photoUrl} />
            <Card.Body>
              <Card.Title>قاعة {hallSpec.name}</Card.Title>
              <Card.Text>السعر: 10 دينار أردني</Card.Text>
              <Card.Text>المحافظة: {hallSpec.location}</Card.Text>
              <Card.Text>السعة: {hallSpec.capacity} شخص</Card.Text>
              <Masa7teeButton>احجز</Masa7teeButton>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 55 mins ago</small>
            </Card.Footer>
          </Card>
        )
      }
      let card_chunks = array_chunks(cards, 3)
      for (let i = 0; i < card_chunks.length; i++) {
        setCardGroups([
          ...cardGroups,
          <CardGroup key={i}>{card_chunks[i]}</CardGroup>,
        ])
      }
    }
  }, [allHalls, capacity, location, name])

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

export default BookHallPage
