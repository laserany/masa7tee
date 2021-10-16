import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import Masa7teeButton from '../components/Masa7teeButton'
import Table from 'react-bootstrap/Table'
import { Link, useLocation } from 'react-router-dom'
import BlueArrowRight from '../components/BlueArrowRight'

const SafeSpaceSpecificationsMainPage = ({
  safeSpaceNames,
  setSafeSpaceNames,
}) => {
  const location = useLocation()
  const [safeSpaceName, setSafeSpaceName] = useState('')
  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={'auto'}>
          <h1
            style={{
              borderStyle: 'solid',
              borderRadius: '10px',
            }}
            className='pr-5 pl-5'
          >
            Safe Space Specifications
          </h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={3}>
          <FormControl
            placeholder='Safe Space Name'
            onChange={(e) => setSafeSpaceName(e.target.value)}
          />
        </Col>
        <Col md={1}>
          <Masa7teeButton
            onClick={() =>
              setSafeSpaceNames([...safeSpaceNames, safeSpaceName])
            }
          >
            Add
          </Masa7teeButton>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Safe Space Name</th>
              <th>Specifications</th>
              <th>Pictures</th>
            </tr>
          </thead>
          <tbody>
            {safeSpaceNames.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element}</td>
                <td contentEditable></td>
                <td>
                  <Link to={`${location.pathname}/${index + 1}`}>
                    <Masa7teeButton>Upload</Masa7teeButton>
                  </Link>
                  <Masa7teeButton
                    className='ml-4'
                    onClick={() =>
                      setSafeSpaceNames(
                        safeSpaceNames.filter((val, i) => i !== index)
                      )
                    }
                  >
                    Remove
                  </Masa7teeButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row className='mt-3'>
        <Col md={10}></Col>
        <Col>
          <Link to='/submitted'>
            <BlueArrowRight />
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default SafeSpaceSpecificationsMainPage
