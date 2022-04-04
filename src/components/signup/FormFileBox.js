import React, { useState, useEffect, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Masa7teeButton from '../common/Masa7teeButton'

const FormFileBox = ({
  label,
  name,
  file,
  onBlur,
  isValid,
  isInvalid,
  setFieldValue,
  error,
}) => {
  const [fileName, setFileName] = useState(
    file ? file[0].name : 'Upload Picture'
  )
  const inputRef = useRef(file)
  const handleUpload = () => {
    inputRef.current.click()
  }
  const handleDisplayFileDetails = () => {
    inputRef.current.files && setFileName(inputRef.current.files[0].name)
  }

  useEffect(() => {
    if (file) {
      setFieldValue('picture', file[0])
    }
  }, [file, setFieldValue])

  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        ref={inputRef}
        className='d-none'
        type='file'
        placeholder={fileName}
        custom
        name={name}
        accept='image/*'
        setFieldValue={setFieldValue}
        onChange={() => {
          handleDisplayFileDetails()
          setFieldValue('picture', inputRef.current.files[0])
        }}
        onBlur={onBlur}
        isValid={isValid}
        isInvalid={isInvalid}
      />
      <Masa7teeButton onClick={handleUpload} style={{ marginLeft: '10px' }}>
        {fileName ? fileName : 'Upload Picture'}
      </Masa7teeButton>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </>
  )
}

export default FormFileBox
