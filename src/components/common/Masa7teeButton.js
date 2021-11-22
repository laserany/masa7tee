import React from 'react'
import Button from 'react-bootstrap/Button'
import { masa7teeColor } from './constants'

const Masa7teeButton = (props) => {
  return (
    <>
      <style type='text/css'>
        {`
    .btn-masa7tee {
      background-color: ${masa7teeColor};
      color: black;
      border-color: white;
      box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.3);
      height: 38px;
      width: 83px;
    }
    `}
      </style>
      <Button variant='masa7tee' {...props}>
        {props.children}
      </Button>
    </>
  )
}

export default Masa7teeButton
