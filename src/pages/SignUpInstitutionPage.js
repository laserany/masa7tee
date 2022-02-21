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
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut,
} from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { useFirestore } from '../firebase/FirestoreContext'

function SignUpInstitutionPage() {
  const schema = yup.object().shape({
    institutionName: yup.string().required('This is a required field'),
    representativeName: yup.string().required('This is a required field'),
    institutionPhone: yup.string().required('This is a required field'),
    representativePhone: yup.string().required('This is a required field'),
    institutionEmail: yup
      .string()
      .email('Please enter a valid email')
      .required('This is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be atleast 6 characters')
      .required('this is a required field'),
    representativeEmail: yup
      .string()
      .email('Please enter a valid email')
      .required('This is a required field'),
    workField: yup.string().required('This is a required field'),
    radio_other: yup.string().when('workField', {
      is: 'radio_other',
      then: yup.string().required('This is a required field'),
    }),
  })
  const history = useHistory()
  const auth = getAuth()
  const db = useFirestore()
  let onSubmit = async (data, { setErrors }) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.institutionEmail,
        data.password
      )
    } catch (err) {
      if (err.message.includes('auth/email-already-in-use')) {
        setErrors({
          email: 'This email is already registered.',
        })
      }
    }

    try {
      await addDoc(collection(db, 'institutions'), {
        institutionID: auth.currentUser.uid,
        institutionName: data.institutionName,
        representativeName: data.representativeName,
        institutionPhone: data.institutionPhone,
        representativePhone: data.representativePhone,
        institutionEmail: data.institutionEmail,
        representativeEmail: data.representativeEmail,
        workField: data.workField,
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    await sendEmailVerification(auth.currentUser)
    await updateProfile(auth.currentUser, {
      displayName: 'Institution',
    })
    await signOut(auth)
    history.push('/submitted')
  }
  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        institutionName: '',
        representativeName: '',
        institutionPhone: '',
        representativePhone: '',
        institutionEmail: '',
        password: '',
        representativeEmail: '',
        workField: '',
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
            <Form.Group as={Col} md='4' controlId='validationFormikWorkField'>
              <Form.Label>مجال العمل</Form.Label>
              <FormRadioOption
                name='workField'
                value='اجتماعي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='workField'
                value='ثقافي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='workField'
                value='تنموي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='workField'
                value='خيري'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='workField'
                value='سياسي'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='workField'
                value='رقمي'
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <FormRadioOtherOption
                name='workField'
                value={values.radio_other}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  (touched.workField || touched.radio_other) &&
                  !errors.workField &&
                  !errors.radio_other
                }
                isInvalid={
                  (touched.workField || touched.radio_other) &&
                  (!!errors.workField || !!errors.radio_other)
                }
                error={errors.workField || errors.radio_other}
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

export default SignUpInstitutionPage
