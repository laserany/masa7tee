import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useLocation } from 'react-router-dom'
import BlueArrowRight from '../components/common/BlueArrowRight'

const SaraQuestionsPage = () => {
  const location = useLocation()
  let decodedLocationHash = decodeURI(
    location.hash.substring(1, location.hash.length)
  )

  return (
    <div style={{ textAlign: 'center' }}>
      <Row className='mt-5'>
        <Col>
          <h1>{`${decodedLocationHash} questions`}</h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={10}></Col>
        <Col>
          <Link
            to={
              decodedLocationHash === 'safe space provider'
                ? '/safe-space-specifications'
                : '/submitted'
            }
          >
            <BlueArrowRight />
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default SaraQuestionsPage
