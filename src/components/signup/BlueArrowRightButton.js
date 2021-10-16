import React from 'react'
import BlueArrowRight from '../common/BlueArrowRight'
import Button from 'react-bootstrap/Button'

const BlueArrowRightButton = () => {
  return (
    <Button
      as='button'
      style={{ border: 'none', backgroundColor: 'transparent' }}
    >
      <BlueArrowRight />
    </Button>
  )
}

export default BlueArrowRightButton
