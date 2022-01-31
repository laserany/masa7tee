import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ResetPasswordPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Row className='mt-5'>
        <Col>
          <h4>
            We will send a reset password link to your Email, Please check your
            Email and reset your password
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

export default ResetPasswordPage
