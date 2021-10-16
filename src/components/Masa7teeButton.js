import React from 'react'
import Button from 'react-bootstrap/Button'

const Masa7teeButton = (props) => {
  return (
    <Button
      variant='primary'
      style={{
        color: 'black',
        borderColor: 'white',
        boxShadow: '0px 0px 10px 4px rgba(0,0,0,0.3)',
        height: '38px',
        width: '83px',
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default Masa7teeButton
