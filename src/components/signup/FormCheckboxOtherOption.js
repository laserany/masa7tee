import React from 'react'
import Form from 'react-bootstrap/Form'
import { otherInputStyling } from '../common/constants'

const FormCheckboxOtherOption = ({
  name,
  value,
  onChange,
  onBlur,
  setOther,
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
        style={otherInputStyling}
        type='text'
        name='checkbox_other'
        value={value}
        onChange={(e) => {
          setOther(e.target.value)
          onChange(e)
        }}
        onBlur={onBlur}
      />

      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Form.Check>
  )
}

export default FormCheckboxOtherOption
