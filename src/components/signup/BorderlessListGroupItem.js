import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
const BorderlessListGroupItem = ({ href, children }) => {
  return (
    <ListGroup.Item action href={href} className='border-0'>
      {children}
    </ListGroup.Item>
  )
}

export default BorderlessListGroupItem
