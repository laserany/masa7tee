import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import FormTextBox from '../components/signup/FormTextBox'
import FormRadioOption from '../components/signup/FormRadioOption'
import FormRadioOtherOption from '../components/signup/FormRadioOtherOption'
import FormCheckboxOption from '../components/signup/FormCheckboxOption'
import FormCheckboxOtherOption from '../components/signup/FormCheckboxOtherOption'
import FormRadioOptionWithValidation from '../components/signup/FormRadioOptionWithValidation'
import { useHistory } from 'react-router-dom'
import BlueArrowRightButton from '../components/signup/BlueArrowRightButton'

const schema = yup.object().shape({
  institutionName: yup.string().required('This is a required field'),
  representativeName: yup.string().required('This is a required field'),
  institutionPhone: yup.string().required('This is a required field'),
  representativePhone: yup.string().required('This is a required field'),
  institutionEmail: yup
    .string()
    .email('Please enter a valid email')
    .required('This is a required field'),
  password: yup.string().required('this is a required field'),
  representativeEmail: yup
    .string()
    .email('Please enter a valid email')
    .required('This is a required field'),
  field: yup.string().required('This is a required field'),
  safeSpaceNumber: yup.string().required('This is a required field'),
  capacity: yup
    .number()
    .typeError('Field must be a positive number')
    .positive()
    .required('This is a required question'),
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
  const history = useHistory()
  return (
    <Formik
      validationSchema={schema}
      onSubmit={() => history.push('/safe-space-specifications')}
      initialValues={{
        institutionName: '',
        representativeName: '',
        institutionPhone: '',
        representativePhone: '',
        institutionEmail: '',
        password: '',
        representativeEmail: '',
        field: '',
        safeSpaceNumber: '',
        capacity: '',
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
            <Form.Group as={Col} md='4' controlId='validationFormikPassword'>
              <FormTextBox
                label='كلمة السر'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
                error={errors.password}
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
          <Form.Row>
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikSafeSpaceNumber'
            >
              <Form.Label>عدد القاعات التي سوف تؤمن للشباب</Form.Label>
              <FormRadioOption
                name='safeSpaceNumber'
                value='قاعة واحدة'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='safeSpaceNumber'
                value='قاعتين'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='safeSpaceNumber'
                value='ثلاثة قاعات'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOptionWithValidation
                name='safeSpaceNumber'
                value='أربع قاعات'
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.safeSpaceNumber && !errors.safeSpaceNumber}
                isInvalid={touched.safeSpaceNumber && !!errors.safeSpaceNumber}
                error={errors.safeSpaceNumber}
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
