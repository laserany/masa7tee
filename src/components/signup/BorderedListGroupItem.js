import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { masa7teeColor } from '../common/constants'
const BorderedListGroupItem = ({ href, children }) => {
  return (
    <>
      <style type='text/css'>
        {`
.active {
background-color: ${masa7teeColor} !important;
}

`}
      </style>
      <ListGroup.Item
        action
        href={href}
        style={{ border: `3px solid ${masa7teeColor}` }}
      >
        {children}
      </ListGroup.Item>
    </>
  )
}

export default BorderedListGroupItem
