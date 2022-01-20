import React from 'react'
import Form from 'react-bootstrap/Form'

const FormTextBox = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  isValid,
  isInvalid,
  error,
}) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={name === 'password' ? 'password' : 'text'}
        placeholder='Your answer'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isValid={isValid}
        isInvalid={isInvalid}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </>
  )
}

export default FormTextBox
