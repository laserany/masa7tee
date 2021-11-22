import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Masa7teeButton from '../components/common/Masa7teeButton'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

const SafeSpaceSpecificationsPicturesPage = ({
  pictureNames,
  setPictureNames,
  canUpload,
  setCanUpload,
}) => {
  useEffect(() => {
    setCanUpload(pictureNames.length >= 5)
  }, [pictureNames, setCanUpload])
  return (
    <>
      <Row className='mt-5'>
        <Col>
          <p>
            Please provide us with atleast <b>five</b> clear pictures for the
            safe space
          </p>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={3}>
          <Form.File
            id='custom-file'
            label='Upload Pictures'
            custom
            onChange={(e) =>
              setPictureNames([
                ...pictureNames,
                e.target.value.replace(/.*[/\\]/, ''),
              ])
            }
          />
        </Col>
        <Col md={1}>
          <Link to='/safe-space-specifications'>
            <Masa7teeButton disabled={!canUpload}>Upload</Masa7teeButton>
          </Link>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {pictureNames.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {element}
                  <Masa7teeButton
                    className='ml-4'
                    onClick={() =>
                      setPictureNames(
                        pictureNames.filter((val, i) => i !== index)
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
    </>
  )
}

export default SafeSpaceSpecificationsPicturesPage
