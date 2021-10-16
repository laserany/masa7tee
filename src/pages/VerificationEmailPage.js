import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const VerificationEmailPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Row className='mt-5'>
        <Col>
          <h4>
            We will send a verification E-mail to your Email, Please check your
            Email and Active your account
          </h4>
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

export default VerificationEmailPage
