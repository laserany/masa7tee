import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Masa7teeButton from '../components/common/Masa7teeButton'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import {
  arabicTextStyling,
  masa7teeColor,
} from '../components/common/constants'
import { useHistory } from 'react-router-dom'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState()
  const auth = getAuth()
  const history = useHistory()
  return (
    <div
      style={{
        textAlign: 'center',
        borderStyle: 'solid',
        borderColor: `${masa7teeColor}`,
      }}
    >
      <Row className='mt-5'>
        <Col>
          <h1
            style={{
              backgroundColor: `${masa7teeColor}`,
              display: 'inline',
            }}
          >
            Masa7tee | مساحتي
          </h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Form
            noValidate
            onSubmit={async (e) => {
              e.preventDefault()
              await sendPasswordResetEmail(auth, email)
              history.push('/reset-password')
            }}
          >
            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formHorizontalUsername'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col sm={7}>
                <Form.Control
                  type='text'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='البريد الالكتروني للشخص أو المؤسسة'
                  style={arabicTextStyling}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Col>
                <Masa7teeButton type='submit'>Reset Password</Masa7teeButton>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPasswordPage
