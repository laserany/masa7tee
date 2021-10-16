import React from 'react'
import BlueRadioButton from './BlueRadioButton'
import BorderlessListGroupItem from './BorderlessListGroupItem'

const BorderlessListGroupItemWithBlueRadioButton = ({ href, children }) => {
  return (
    <BorderlessListGroupItem action href={href}>
      <BlueRadioButton />
      {children}
    </BorderlessListGroupItem>
  )
}

export default BorderlessListGroupItemWithBlueRadioButton
