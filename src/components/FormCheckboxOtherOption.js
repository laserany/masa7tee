import React from 'react'
import Form from 'react-bootstrap/Form'

const FormCheckboxOtherOption = ({
  name,
  value,
  onChange,
  onBlur,
  isValid,
  isInvalid,
  error,
}) => {
  return (
    <Form.Check id='checkbox_other' bsPrefix style={{ marginTop: '5px' }}>
      <Form.Check.Input
        type='checkbox'
        name={name}
        value='checkbox_other'
        onChange={onChange}
        onBlur={onBlur}
        bsPrefix
        isValid={isValid}
        isInvalid={isInvalid}
      />

      <Form.Check.Label style={{ paddingLeft: '8px' }}>Other:</Form.Check.Label>
      <Form.Check.Input
        style={{
          marginLeft: '10px',
          marginTop: '-2px',
          borderStyle: 'none none solid none',
        }}
        type='text'
        name='checkbox_other'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Form.Check>
  )
}

export default FormCheckboxOtherOption
