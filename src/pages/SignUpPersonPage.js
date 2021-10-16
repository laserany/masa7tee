import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import FormTextBox from '../components/signup/FormTextBox'
import FormDateBox from '../components/signup/FormDateBox'
import FormRadioOption from '../components/signup/FormRadioOption'
import FormRadioOptionWithValidation from '../components/signup/FormRadioOptionWithValidation'
import FormRadioOtherOption from '../components/signup/FormRadioOtherOption'
import { useHistory } from 'react-router-dom'
import BlueArrowRightButton from '../components/signup/BlueArrowRightButton'

const schema = yup.object().shape({
  name: yup.string().required('This is a required question'),
  date: yup.date().required('This is a required question'),
  phone: yup.string().required('This is a required question'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('This is a required question'),
  address: yup.string().required('This is a required question'),
  how: yup.string().required('This is a required question'),
  why: yup.string().required('This is a required question'),
  radio_other: yup.string().when('why', {
    is: 'radio_other',
    then: yup.string().required('This is a required question'),
  }),
})

function SignUpPersonPage() {
  const history = useHistory()
  return (
    <Formik
      validationSchema={schema}
      onSubmit={() => history.push('/submitted')}
      initialValues={{
        name: '',
        date: '',
        phone: '',
        email: '',
        address: '',
        how: '',
        why: '',
        radio_other: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikName'>
              <FormTextBox
                label='الاسم الثلاثي'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && !!errors.name}
                error={errors.name}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikDate'>
              <FormDateBox
                label='تاريخ الميلاد'
                name='date'
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.date && !errors.date}
                isInvalid={touched.date && !!errors.date}
                error={errors.date}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikPhone'>
              <FormTextBox
                label='رقم الهاتف'
                name='phone'
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.phone && !errors.phone}
                isInvalid={touched.phone && !!errors.phone}
                error={errors.phone}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikEmail'>
              <FormTextBox
                label='البريد الإلكتروني'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
                error={errors.email}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikAddress'>
              <FormTextBox
                label='مكان السكن'
                name='address'
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.address && !errors.address}
                isInvalid={touched.address && !!errors.address}
                error={errors.address}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikHow'>
              <Form.Label>كيف عرفت عن المنصة ؟</Form.Label>
              <FormRadioOption
                name='how'
                value='سوشال ميديا'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='how'
                value='أصدقاء و أقارب'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='how'
                value='عن طريق البحث'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOptionWithValidation
                name='how'
                value='مؤسسات المجتمع المدني'
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.how && !errors.how}
                isInvalid={touched.how && !!errors.how}
                error={errors.how}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikWhy'>
              <Form.Label>ما سبب تسجيلك بالمنصة</Form.Label>
              <FormRadioOption
                name='why'
                value='مؤسس مبادرة'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='why'
                value='للتعرف على المساحات'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='why'
                value='التعرف على المنصة'
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <FormRadioOtherOption
                name='why'
                value={values.radio_other}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  (touched.why || touched.radio_other) &&
                  !errors.why &&
                  !errors.radio_other
                }
                isInvalid={
                  (touched.why || touched.radio_other) &&
                  (!!errors.why || !!errors.radio_other)
                }
                error={errors.why || errors.radio_other}
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

export default SignUpPersonPage
