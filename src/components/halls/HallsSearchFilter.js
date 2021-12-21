import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Masa7teeButton from '../common/Masa7teeButton'

function HallsSearchFilter({ setLocation, setCapacity, setName }) {
  const handleSubmit = () => {
    console.log('hello')
  }
  return (
    <header className='App-header'>
      <Container fluid className='p-3'>
        <Row>
          <Col>
            <Form>
              <Form.Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
                        </svg>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      as='select'
                      id='location'
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value='0'>الزرقاء</option>
                      <option value='1'>عمان</option>
                      <option value='2'>إربد</option>
                      <option value='3'>البلقاء</option>
                      <option value='4'>جرش</option>
                      <option value='5'>عجلون</option>
                      <option value='6'>المفرق</option>
                      <option value='7'>الطفيلة</option>
                      <option value='8'>مأدبا</option>
                      <option value='9'>الكرك</option>
                      <option value='10'>معان</option>
                      <option value='11'>العقبة</option>
                    </Form.Control>
                  </InputGroup>
                </Col>
                <Col md={3}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <title>ic_fluent_people_28_filled</title>
                          <desc>Created with Sketch.</desc>
                          <g
                            id='🔍-Product-Icons'
                            stroke='none'
                            stroke-width='1'
                            fill='none'
                            fill-rule='evenodd'
                          >
                            <g
                              id='ic_fluent_people_28_filled'
                              fill='#212121'
                              fill-rule='nonzero'
                            >
                              <path
                                d='M4,16 L15,16.001 C16.0538182,16.001 16.9181157,16.8164855 16.9945109,17.8516842 L17,18.001 L17,20.5 C16.999,24.7 12.713,26 9.5,26 C6.35126,26 2.1710504,24.75148 2.00510151,20.7485328 L2,20.5 L2,18 C2,16.9461818 2.81639669,16.0818843 3.85080841,16.0054891 L4,16 Z M17.22,16.001 L24,16 C25.0538182,16 25.9181157,16.8163967 25.9945109,17.8508084 L26,18 L26,20 C25.999,23.759 22.57,25 20,25 C18.942,25 17.741,24.785 16.691,24.275 C17.4432667,23.3808667 17.9315867,22.2428222 17.9933526,20.8112714 L18,20.5 L18,18.001 C18,17.2991818 17.7512397,16.6601736 17.3461307,16.1500909 L17.22,16.001 L24,16 L17.22,16.001 Z M9.5,3 C12.537,3 15,5.463 15,8.5 C15,11.537 12.537,14 9.5,14 C6.463,14 4,11.537 4,8.5 C4,5.463 6.463,3 9.5,3 Z M20.5,5 C22.985,5 25,7.015 25,9.5 C25,11.985 22.985,14 20.5,14 C18.015,14 16,11.985 16,9.5 C16,7.015 18.015,5 20.5,5 Z'
                                id='🎨-Color'
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      as='select'
                      id='capacity'
                      onChange={(e) => setCapacity(e.target.value)}
                    >
                      <option value='0'>&le; 50</option>
                      <option value='1'>&gt; 50 and &lt; 100</option>
                      <option value='2'>&ge; 100</option>
                    </Form.Control>
                  </InputGroup>
                </Col>
                <Col md={2}>
                  <Form.Control
                    placeholder='اسم القاعة'
                    id='name'
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col md={1}>
                  <Masa7teeButton onClick={handleSubmit}>
                    <svg width='15px' height='15px'>
                      <path d='M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 '></path>
                    </svg>
                  </Masa7teeButton>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default HallsSearchFilter
