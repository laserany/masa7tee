import React from 'react'
import Masa7teeButton from '../components/common/Masa7teeButton'
import LanguageButton from '../components/home/LanguageButton'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import ControlledCarousel from '../components/home/ControlledCarousel'
import Who from '../components/home/Who'
import What from '../components/home/What'
import Connect from '../components/home/Connect'
import { LinkContainer } from 'react-router-bootstrap'
import { Switch, Route } from 'react-router-dom'
import logo from '../components/common/logo.png'
import { masa7teeColor } from '../components/common/constants'
import { useMediaQuery } from 'react-responsive'
import { useFirebaseAuth } from '../firebase/FirebaseAuthContext'

export const ImageWidthContext = React.createContext()
const HomePage = ({ match }) => {
  const isLaptop = useMediaQuery({ query: '(min-width: 768px)' })
  const imageWidth = isLaptop ? '80%' : '115%'
  const user = useFirebaseAuth()
  let signedButton, bookHallButton, registerHallButton
  if (!user) {
    signedButton = (
      <Link to='/sign-in'>
        <Masa7teeButton className='btn btn-primary mr-2 mb-2'>
          Sign in
        </Masa7teeButton>
      </Link>
    )
  } else {
    signedButton = (
      <Link to='/sign-out'>
        <Masa7teeButton className='btn btn-primary mr-2 mb-2'>
          Sign out
        </Masa7teeButton>
      </Link>
    )
    bookHallButton = (
      <Link to='/book-hall'>
        <Masa7teeButton className='btn btn-primary mr-2 mb-2' width='100px'>
          Book Hall
        </Masa7teeButton>
      </Link>
    )
    if (user.displayName === 'Institution') {
      registerHallButton = (
        <Link to='/register-hall'>
          <Masa7teeButton className='btn btn-primary mr-2 mb-2' width='100px'>
            Register Hall
          </Masa7teeButton>
        </Link>
      )
    }
  }

  return (
    <>
      <style type='text/css'>
        {`
.nav-link {
  border: 3px solid ${masa7teeColor};
}
.active {
background-color: ${masa7teeColor} !important;
}
    `}
      </style>
      <Row className='mt-5'>
        <Col md={4}>
          <Link to={`${match.url}`}>
            <Image
              src={logo}
              rounded
              style={{ width: '150px', height: '150px' }}
            />
          </Link>
        </Col>
        <Col md={6} className='mt-4'>
          <h1>Masa7tee | مساحتي</h1>
        </Col>
        <Col md={1} className='mt-4'>
          <div>
            {signedButton}

            <Link to='/sign-up'>
              <Masa7teeButton className='btn btn-primary mr-2 mb-2'>
                Sign up
              </Masa7teeButton>
            </Link>
            {bookHallButton}
            {registerHallButton}
          </div>
        </Col>
        <Col md={1} className='mt-5'>
          <LanguageButton variant='outline-dark'>Arabic</LanguageButton>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Navbar
            bg='light'
            variant='light'
            style={{ width: imageWidth, margin: 'auto' }}
          >
            <Nav className='mr-auto' activeKey='/'>
              <LinkContainer to={`${match.url}/who`}>
                <Nav.Link>
                  <span>من نحن؟</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav activeKey='/'>
              <LinkContainer to={`${match.url}/what`}>
                <Nav.Link>
                  <span>ماذا نقدم؟</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className='ml-auto' activeKey='/'>
              <LinkContainer to={`${match.url}/connect`}>
                <Nav.Link>
                  <span>تواصل معنا</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <ImageWidthContext.Provider value={imageWidth}>
            <Route
              path={`${match.url}`}
              render={({ match: { url } }) => (
                <Switch>
                  <Route
                    path={`${url}/`}
                    component={ControlledCarousel}
                    exact
                  />
                  <Route path={`${url}/who`} component={Who} />
                  <Route path={`${url}/what`} component={What} />
                  <Route path={`${url}/connect`} component={Connect} />
                </Switch>
              )}
            />
          </ImageWidthContext.Provider>
        </Col>
      </Row>
    </>
  )
}

export default HomePage
