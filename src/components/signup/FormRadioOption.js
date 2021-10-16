import React from 'react'
import Form from 'react-bootstrap/Form'

const FormRadioOption = ({ name, value, onChange, onBlur }) => {
  return (
    <Form.Check id={value} style={{ marginTop: '5px' }}>
      <Form.Check.Input
        type='radio'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Form.Check.Label>{value}</Form.Check.Label>
    </Form.Check>
  )
}

export default FormRadioOption
