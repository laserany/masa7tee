import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BorderlessListGroupItemWithBlueRadioButton from '../components/signup/BorderlessListGroupItemWithBlueRadioButton'
import BlueArrowRight from '../components/common/BlueArrowRight'
import { Link, useLocation } from 'react-router-dom'
import logo from '../components/common/logo.png'
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
            style={{ borderStyle: 'solid', borderColor: 'blue' }}
            className='pr-5 pl-5'
          >
            New User
          </h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={2} />
        <Col md={4}>
          <img
            src='organization-icon.jpg'
            style={{ width: '50px', height: '60px', marginLeft: '55px' }}
            alt=''
          ></img>
          <BorderlessListGroupItemWithBlueRadioButton href='#i-need-safe-space'>
            i need safe space
          </BorderlessListGroupItemWithBlueRadioButton>
          <BorderlessListGroupItemWithBlueRadioButton href='#safe-space-provider'>
            safe space provider
          </BorderlessListGroupItemWithBlueRadioButton>
        </Col>
        <Col md={2} />
        <Col md={4}>
          <img
            src='user-icon.jpg'
            style={{ width: '50px', height: '60px', marginLeft: '25px' }}
            alt=''
          ></img>
          <BorderlessListGroupItemWithBlueRadioButton href='#person'>
            Person
          </BorderlessListGroupItemWithBlueRadioButton>
        </Col>
      </Row>
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
