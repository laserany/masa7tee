import React from 'react'
import Form from 'react-bootstrap/Form'

const FormSelectBox = ({
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
        as='select'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isValid={isValid}
        isInvalid={isInvalid}
      >
        <option></option>
        <option>الزرقاء</option>
        <option>عمان</option>
        <option>اربد</option>
        <option>البلقاء</option>
        <option>جرش</option>
        <option>عجلون</option>
        <option>المفرق</option>
        <option>الطفيلة</option>
        <option>مأدبا</option>
        <option>الكرك</option>
        <option>معان</option>
        <option>العقبة</option>
      </Form.Control>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </>
  )
}

export default FormSelectBox
