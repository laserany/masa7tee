import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Masa7teeButton from '../components/common/Masa7teeButton'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
  arabicTextStyling,
  masa7teeColor,
} from '../components/common/constants'
import { useHistory, Link } from 'react-router-dom'

const SignInPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()
  const auth = getAuth()
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
              try {
                await signInWithEmailAndPassword(auth, email, password)
                if (auth.currentUser.emailVerified) {
                  history.push('/home')
                } else {
                  setErrorMessage(
                    'email is not verified. Please verify email before signing in'
                  )
                }
              } catch (err) {
                setErrorMessage('email or password is incorrect')
              }
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

            <Form.Group
              as={Row}
              className='mb-3'
              controlId='formHorizontalPassword'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col sm={7}>
                <Form.Control
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='كلمة السر'
                  style={arabicTextStyling}
                />
              </Col>
            </Form.Group>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <br></br>
            <Form.Group as={Row} className='mb-3'>
              <Col sm={4}></Col>
              <Col sm={2}>
                <Masa7teeButton type='submit'>Sign in</Masa7teeButton>
              </Col>
              <Col sm={2}>
                <Link to='/forgot-password'>
                  <Masa7teeButton type='submit'>
                    Forgot your password?
                  </Masa7teeButton>
                </Link>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default SignInPage
