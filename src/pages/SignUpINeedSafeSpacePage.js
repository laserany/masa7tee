import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import FormTextBox from '../components/signup/FormTextBox'
import FormRadioOption from '../components/signup/FormRadioOption'
import FormRadioOtherOption from '../components/signup/FormRadioOtherOption'
import BlueArrowRightButton from '../components/signup/BlueArrowRightButton'
import { useHistory } from 'react-router-dom'

const schema = yup.object().shape({
  institutionName: yup.string().required('This is a required question'),
  representativeName: yup.string().required('This is a required question'),
  institutionPhone: yup.string().required('This is a required question'),
  representativePhone: yup.string().required('This is a required question'),
  institutionEmail: yup
    .string()
    .email('Please enter a valid email')
    .required('This is a required question'),
  representativeEmail: yup
    .string()
    .email('Please enter a valid email')
    .required('This is a required question'),
  field: yup.string().required('This is a required question'),
  radio_other: yup.string().when('field', {
    is: 'radio_other',
    then: yup.string().required('This is a required question'),
  }),
})

function SignUpINeedSafeSpacePage() {
  const history = useHistory()
  return (
    <Formik
      validationSchema={schema}
      onSubmit={() => history.push('/submitted')}
      initialValues={{
        institutionName: '',
        representativeName: '',
        institutionPhone: '',
        representativePhone: '',
        institutionEmail: '',
        representativeEmail: '',
        field: '',
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
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikInstitutionName'
            >
              <FormTextBox
                label='اسم المؤسسة \ المنظمة'
                name='institutionName'
                value={values.institutionName}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.institutionName && !errors.institutionName}
                isInvalid={touched.institutionName && !!errors.institutionName}
                error={errors.institutionName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md='4' controlId='validationFormikField'>
              <Form.Label>مجال العمل</Form.Label>
              <FormRadioOption
                name='field'
                value='اجتماعي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='field'
                value='ثقافي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='field'
                value='تنموي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='field'
                value='خيري'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='field'
                value='سياسي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='field'
                value='رقمي'
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <FormRadioOtherOption
                name='field'
                value={values.radio_other}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  (touched.field || touched.radio_other) &&
                  !errors.field &&
                  !errors.radio_other
                }
                isInvalid={
                  (touched.field || touched.radio_other) &&
                  (!!errors.field || !!errors.radio_other)
                }
                error={errors.field || errors.radio_other}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikInstitutionPhone'
            >
              <FormTextBox
                label='رقم هاتف المؤسسة'
                name='institutionPhone'
                value={values.institutionPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.institutionPhone && !errors.institutionPhone}
                isInvalid={
                  touched.institutionPhone && !!errors.institutionPhone
                }
                error={errors.institutionPhone}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikInstitutionEmail'
            >
              <FormTextBox
                label='البريد الإلكتروني الخاص بالمؤسسة'
                name='institutionEmail'
                value={values.institutionEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.institutionEmail && !errors.institutionEmail}
                isInvalid={
                  touched.institutionEmail && !!errors.institutionEmail
                }
                error={errors.institutionEmail}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikRepresentativeName'
            >
              <FormTextBox
                label='الاسم الثلاثي للمسؤول'
                name='representativeName'
                value={values.representativeName}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  touched.representativeName && !errors.representativeName
                }
                isInvalid={
                  touched.representativeName && !!errors.representativeName
                }
                error={errors.representativeName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikRepresentativePhone'
            >
              <FormTextBox
                label='رقم هاتف المسؤول'
                name='representativePhone'
                value={values.representativePhone}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  touched.representativePhone && !errors.representativePhone
                }
                isInvalid={
                  touched.representativePhone && !!errors.representativePhone
                }
                error={errors.representativePhone}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikRepresentativeEmail'
            >
              <FormTextBox
                label='البريد الإلكتروني الخاص بالمسؤول'
                name='representativeEmail'
                value={values.representativeEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  touched.representativeEmail && !errors.representativeEmail
                }
                isInvalid={
                  touched.representativeEmail && !!errors.representativeEmail
                }
                error={errors.representativeEmail}
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

export default SignUpINeedSafeSpacePage
