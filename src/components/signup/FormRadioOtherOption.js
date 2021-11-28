import React from 'react'
import Form from 'react-bootstrap/Form'
import { otherInputStyling } from '../common/constants'
const FormRadioOtherOption = ({
  name,
  value,
  onChange,
  onBlur,
  isValid,
  isInvalid,
  error,
}) => {
  return (
    <Form.Check id='radio_other' bsPrefix style={{ marginTop: '5px' }}>
      <Form.Check.Input
        type='radio'
        name={name}
        value='radio_other'
        onChange={onChange}
        onBlur={onBlur}
        bsPrefix
        isValid={isValid}
        isInvalid={isInvalid}
      />

      <Form.Check.Label style={{ paddingLeft: '8px' }}>Other:</Form.Check.Label>
      <Form.Check.Input
        style={otherInputStyling}
        type='text'
        name='radio_other'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Form.Check>
  )
}

export default FormRadioOtherOption
