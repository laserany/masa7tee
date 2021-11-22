import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import SafeSpaceSpecificationsMainPage from './SafeSpaceSpecificationsMainPage'
import SafeSpaceSpecificationsPicturesPage from './SafeSpaceSpecificationsPicturesPage'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { masa7teeColor } from '../components/common/constants'

const SafeSpaceSpecificationsPage = () => {
  let match = useRouteMatch({ path: '/safe-space-specifications', exact: true })
  const [safeSpaceNames, setSafeSpaceNames] = useState([])
  const [pictureNames, setPictureNames] = useState([])
  const [canUpload, setCanUpload] = useState(false)

  return (
    <Container
      style={{
        borderStyle: 'solid',
        borderColor: `${masa7teeColor}`,
      }}
    >
      <Row style={{ marginTop: '10px' }}>
        <Col md={4}></Col>
        <Col md={'auto'}>
          <h1
            style={{
              borderStyle: 'solid',
              borderColor: `${masa7teeColor}`,
              borderRadius: '10px',
            }}
            className='pr-5 pl-5'
          >
            Safe Space Specifications
          </h1>
        </Col>
      </Row>
      {match ? (
        <SafeSpaceSpecificationsMainPage
          safeSpaceNames={safeSpaceNames}
          setSafeSpaceNames={setSafeSpaceNames}
        />
      ) : (
        <SafeSpaceSpecificationsPicturesPage
          pictureNames={pictureNames}
          setPictureNames={setPictureNames}
          canUpload={canUpload}
          setCanUpload={setCanUpload}
        />
      )}
    </Container>
  )
}

export default SafeSpaceSpecificationsPage
