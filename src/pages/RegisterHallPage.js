import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import FormTextBox from '../components/signup/FormTextBox'
import FormCheckboxOption from '../components/signup/FormCheckboxOption'
import FormCheckboxOtherOption from '../components/signup/FormCheckboxOtherOption'
import BlueArrowRightButton from '../components/signup/BlueArrowRightButton'
import FormFileBox from '../components/signup/FormFileBox'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

const schema = yup.object().shape({
  hallName: yup.string().required('This is a required field'),
  capacity: yup
    .number()
    .typeError('Field must be a positive number')
    .positive()
    .required('This is a required question'),
  price: yup
    .number()
    .typeError('Field must be a positive number')
    .positive()
    .required('This is a required question'),
  picture: yup
    .mixed()
    .required('This is a required field')
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  time: yup.string().required('This is a required field'),
  logistic: yup.array().min(1, 'This is a required field'),
  radio_other: yup.string().when('field', {
    is: 'radio_other',
    then: yup.string().required('This is a required field'),
  }),
  checkbox_other: yup.string().when('logistic', {
    is: (logistic) => logistic.length === 1 && logistic[0] === 'checkbox_other',
    then: yup.string().required('This is a required field'),
  }),
  covid: yup.string().required('This is a required field'),
})

function SignUpSafeSpaceProviderPage() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(e) => console.log(e)}
      initialValues={{
        hallName: '',
        capacity: '',
        price: '',
        picture: '',
        time: '',
        logistic: [],
        radio_other: '',
        checkbox_other: '',
        covid: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikHallName'>
              <FormTextBox
                label='اسم القاعة'
                name='hallName'
                value={values.hallName}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.hallName && !errors.hallName}
                isInvalid={touched.hallName && !!errors.hallName}
                error={errors.hallName}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikCapacity'>
              <FormTextBox
                label='السعة الكبرى للقاعة ؟'
                name='capacity'
                value={values.capacity}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.capacity && !errors.capacity}
                isInvalid={touched.capacity && !!errors.capacity}
                error={errors.capacity}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikPrice'>
              <FormTextBox
                label='المبلغ'
                name='price'
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.price && !errors.price}
                isInvalid={touched.price && !!errors.price}
                error={errors.price}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikTime'>
              <FormTextBox
                label='أيام وأوقات الدوام'
                name='time'
                value={values.time}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.time && !errors.time}
                isInvalid={touched.time && !!errors.time}
                error={errors.time}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikLogistic'>
              <Form.Label>اللوجستيات المتوفرة</Form.Label>
              <FormCheckboxOption
                name='logistic'
                value='تدفئة'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormCheckboxOption
                name='logistic'
                value='شاشة'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormCheckboxOption
                name='logistic'
                value='قرطاسية'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormCheckboxOption
                name='logistic'
                value='Coffee break'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormCheckboxOtherOption
                name='logistic'
                value={values.checkbox_other}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  (touched.logistic || touched.checkbox_other) &&
                  !errors.logistic &&
                  !errors.checkbox_other
                }
                isInvalid={
                  (touched.logistic || touched.checkbox_other) &&
                  (!!errors.logistic || !!errors.checkbox_other)
                }
                error={errors.logistic || errors.checkbox_other}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikCovid'>
              <FormTextBox
                label='ما هي اشتراطات السلامة العامة؟'
                name='covid'
                value={values.covid}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.covid && !errors.covid}
                isInvalid={touched.covid && !!errors.covid}
                error={errors.covid}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikPicture'>
              <FormFileBox
                label='صورة القاعة'
                name='picture'
                setFieldValue={setFieldValue}
                onBlur={handleBlur}
                isValid={touched.picture && !errors.picture}
                isInvalid={touched.picture && !!errors.picture}
                error={errors.picture}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className='mt-3'>
            <Col md={10}></Col>
            <Col>
              <BlueArrowRightButton />
            </Col>
          </Form.Row>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpSafeSpaceProviderPage
