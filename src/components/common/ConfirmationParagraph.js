import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ConfirmationParagraph = ({ children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Row className='mt-5'>
        <Col>
          <h4>{children}</h4>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <h4>Thank you</h4>
        </Col>
      </Row>
    </div>
  )
}

export default ConfirmationParagraph
