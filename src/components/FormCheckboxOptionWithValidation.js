import React from 'react'
import Form from 'react-bootstrap/Form'

const FormCheckboxOptionWithValidation = ({
  name,
  value,
  onChange,
  onBlur,
  isValid,
  isInvalid,
  error,
}) => {
  return (
    <Form.Check id={value} bsPrefix style={{ marginTop: '5px' }}>
      <Form.Check.Input
        type='checkbox'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        bsPrefix
        isValid={isValid}
        isInvalid={isInvalid}
      />
      <Form.Check.Label>{value}</Form.Check.Label>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Form.Check>
  )
}

export default FormCheckboxOptionWithValidation
