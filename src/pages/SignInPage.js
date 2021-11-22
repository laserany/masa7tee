import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Masa7teeButton from '../components/common/Masa7teeButton'
import { Link } from 'react-router-dom'
import { masa7teeColor } from '../components/common/constants'

const SignInPage = () => {
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
          <Form>
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
              <Form.Label column sm={2}>
                Username:
              </Form.Label>
              <Col sm={7}>
                <Form.Control type='text' />
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
              <Form.Label column sm={2}>
                Password:
              </Form.Label>
              <Col sm={7}>
                <Form.Control type='password' />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Col sm={{ span: 10, offset: 2 }}>
                <Link to='/'>
                  <Masa7teeButton>Sign in</Masa7teeButton>
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
