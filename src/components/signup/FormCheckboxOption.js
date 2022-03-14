import React from 'react'
import Form from 'react-bootstrap/Form'

const FormCheckboxOption = ({
  name,
  value,
  defaultChecked,
  onChange,
  onBlur,
}) => {
  return (
    <Form.Check id={value} style={{ marginTop: '5px' }}>
      <Form.Check.Input
        type='checkbox'
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Form.Check.Label>{value}</Form.Check.Label>
    </Form.Check>
  )
}

export default FormCheckboxOption
