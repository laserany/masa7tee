import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BorderedListGroupItemWithBlueRadioButton from '../components/signup/BorderedListGroupItemWithBlueRadioButton'
import BlueArrowRight from '../components/common/BlueArrowRight'
import { Link, useLocation } from 'react-router-dom'
import logo from '../components/common/logo.png'
import { masa7teeColor } from '../components/common/constants'
import ListGroup from 'react-bootstrap/ListGroup'
import person from '../components/common/person.jpg'
import organization from '../components/common/organization.jpg'
const SignUpMainPage = () => {
  const location = useLocation()
  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={'auto'}>
          <img src={logo} style={{ paddingLeft: '47px' }} alt=''></img>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={4}></Col>
        <Col md={'auto'}>
          <h1
            style={{ borderStyle: 'solid', borderColor: `${masa7teeColor}` }}
            className='pr-5 pl-5'
          >
            New User
          </h1>
        </Col>
      </Row>
      <ListGroup>
        <Row className='mt-5'>
          <Col md={2} />
          <Col md={4}>
            <img
              src={organization}
              style={{ width: '50px', height: '60px', marginLeft: '55px' }}
              alt=''
            ></img>
            <br />
            <br />
            <BorderedListGroupItemWithBlueRadioButton href='#i-need-safe-space'>
              i need safe space
            </BorderedListGroupItemWithBlueRadioButton>
            <br />

            <BorderedListGroupItemWithBlueRadioButton href='#safe-space-provider'>
              safe space provider
            </BorderedListGroupItemWithBlueRadioButton>
          </Col>
          <Col md={2} />
          <Col md={4}>
            <img
              src={person}
              style={{ width: '50px', height: '60px', marginLeft: '25px' }}
              alt=''
            ></img>
            <br />
            <br />
            <BorderedListGroupItemWithBlueRadioButton href='#person'>
              Person
            </BorderedListGroupItemWithBlueRadioButton>
          </Col>
        </Row>
      </ListGroup>
      <Row className='mt-3'>
        <Col md={10}></Col>
        <Col>
          <Link
            to={`${location.pathname}/${location.hash.substring(
              1,
              location.hash.length
            )}`}
          >
            <BlueArrowRight />
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default SignUpMainPage
