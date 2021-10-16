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
import {LinkContainer} from 'react-router-bootstrap'
import { Switch, Route } from 'react-router-dom'

const HomePage = ({match}) => {
  return (
    <>
      <Row className='mt-5'>
        <Col md={4}>
          <Image
            src='logo.png'
            rounded
            style={{ width: '150px', height: '150px' }}
          />
        </Col>
        <Col md={6} className='mt-4'>
          <h1>Masa7tee | مساحتي</h1>
        </Col>
        <Col md={1} className='mt-4'>
          <div class='btn-toolbar'>
            <Link to='/sign-in'>
              <Masa7teeButton className='btn btn-primary mr-2 mb-2'>
                Sign in
              </Masa7teeButton>
            </Link>
            <Link to='/sign-up'>
              <Masa7teeButton className='btn btn-primary mr-2 mb-2'>
                Sign up
              </Masa7teeButton>
            </Link>
          </div>
        </Col>
        <Col md={1} className='mt-5'>
          <LanguageButton variant='outline-dark'>Arabic</LanguageButton>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Navbar bg='light' variant='light'>
            <Nav className='mr-auto'>
            <LinkContainer to={`${match.url}/who`}>
              <Nav.Link>
                <span>
                  من نحن؟
                  <br />
                  Who are we?
                </span>
              </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
            <LinkContainer to={`${match.url}/what`}>
              <Nav.Link>
                <span>
                  ماذا نقدم؟
                  <br />
                  What we do?
                </span>
              </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className='ml-auto'>
              <LinkContainer to={`${match.url}/connect`}>
              <Nav.Link>
                <span>
                  تواصل معنا
                  <br />
                  Connect us
                </span>
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
        <Route
    path={`${match.url}`}
    render={({ match: { url } }) => (
      <Switch>
        <Route path={`${url}/`} component={ControlledCarousel} exact />
        <Route path = {`${url}/who`} component={Who} />
          <Route path = {`${url}/what`} component={What} />
          <Route path = {`${url}/connect`} component={Connect} />
          </Switch>
    )}
  />
        </Col>
      </Row>
    </>
  )
}

export default HomePage
