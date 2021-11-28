import React from 'react'
import BlueRadioButton from './BlueRadioButton'
import BorderedListGroupItem from './BorderedListGroupItem'

const BorderedListGroupItemWithBlueRadioButton = ({ href, children }) => {
  return (
    <BorderedListGroupItem href={href}>
      <BlueRadioButton />
      {children}
    </BorderedListGroupItem>
  )
}

export default BorderedListGroupItemWithBlueRadioButton
