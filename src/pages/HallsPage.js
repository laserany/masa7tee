import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import hall1 from '../components/halls/hall1.png'
import hall2 from '../components/halls/hall2.png'
import hall3 from '../components/halls/hall3.png'
import hall4 from '../components/halls/hall4.png'
import Masa7teeButton from '../components/common/Masa7teeButton'
import HallsSearchFilter from '../components/halls/HallsSearchFilter'
const HallsPage = () => {
  return (
    <div style={{ textAlign: 'right' }}>
      <HallsSearchFilter />
      <CardGroup>
        <Card>
          <Card.Img variant='top' src={hall1} />
          <Card.Body>
            <Card.Title>قاعة سارة</Card.Title>
            <Card.Text>السعر: 100 دينار أردني</Card.Text>
            <Card.Text> المحافظة: عمان</Card.Text>
            <Card.Text> السعة: 50 شخص</Card.Text>
            <Masa7teeButton>احجز</Masa7teeButton>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 10 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={hall2} />
          <Card.Body>
            <Card.Title>قاعة تسنيم</Card.Title>
            <Card.Text>السعر: 80 دينار أردني</Card.Text>
            <Card.Text> المحافظة: الزرقاء</Card.Text>
            <Card.Text> السعة: 35 شخص</Card.Text>
            <Masa7teeButton>احجز</Masa7teeButton>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 20 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={hall3} />
          <Card.Body>
            <Card.Title>قاعة بلقيس</Card.Title>
            <Card.Text>السعر: 500 دينار أردني</Card.Text>
            <Card.Text> المحافظة: اربد</Card.Text>
            <Card.Text> السعة: 200 شخص</Card.Text>
            <Masa7teeButton>احجز</Masa7teeButton>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 25 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src={hall4} />
          <Card.Body>
            <Card.Title>قاعة مصطفى</Card.Title>
            <Card.Text>السعر: 999 دينار أردني</Card.Text>
            <Card.Text> المحافظة: البلقاء</Card.Text>
            <Card.Text> السعة: 500 شخص</Card.Text>
            <Masa7teeButton>احجز</Masa7teeButton>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 13 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={hall2} />
          <Card.Body>
            <Card.Title>قاعة يوسف</Card.Title>
            <Card.Text>السعر: 10 دينار أردني</Card.Text>
            <Card.Text> المحافظة: عجلون</Card.Text>
            <Card.Text> السعة:30 شخص</Card.Text>
            <Masa7teeButton>احجز</Masa7teeButton>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 49 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={hall3} />
          <Card.Body>
            <Card.Title>قاعة أبو السعيد</Card.Title>
            <Card.Text>السعر: 10000 دينار أردني</Card.Text>
            <Card.Text> المحافظة: الكرك</Card.Text>
            <Card.Text> السعة: 1000 شخص</Card.Text>
            <Masa7teeButton>احجز</Masa7teeButton>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 51 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  )
}

export default HallsPage
