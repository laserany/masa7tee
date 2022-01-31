import React, { useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SignOutPage = () => {
  const history = useHistory()
  useEffect(() => {
    async function signUserOut() {
      const auth = getAuth()
      await signOut(auth)
      setTimeout(function () {
        history.push('/')
      }, 3000)
    }
    signUserOut()
  }, [history])
  return (
    <div style={{ textAlign: 'center' }}>
      <Row className='mt-5'>
        <Col>
          <h4>
            You have been successfully signed out. You will be redirected to
            home page shortly
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

export default SignOutPage
