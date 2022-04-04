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
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut,
} from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { useFirestore } from '../firebase/FirestoreContext'

function SignUpPersonPage() {
  const schema = yup.object().shape({
    name: yup.string().required('This is a required field'),
    dateOfBirth: yup.date().required('This is a required field'),
    phone: yup.string().required('This is a required field'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('This is a required field'),
    password: yup
      .string()
      .min(6, 'Password must be atleast 6 characters')
      .required('this is a required field'),
    address: yup.string().required('This is a required field'),
    hallReference: yup.string().required('This is a required field'),
    registrationReason: yup.string().required('This is a required field'),
    radio_other: yup.string().when('registrationReason', {
      is: 'radio_other',
      then: yup.string().required('This is a required field'),
    }),
  })
  const history = useHistory()
  const auth = getAuth()
  const db = useFirestore()
  let onSubmit = async (data, { setErrors }) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
    } catch (err) {
      if (err.message.includes('auth/email-already-in-use')) {
        setErrors({
          email: 'This email is already registered.',
        })
      }
    }
    try {
      await addDoc(collection(db, 'persons'), {
        personID: auth.currentUser.uid,
        name: data.name,
        dateOfBirth: data.dateOfBirth,
        phone: data.phone,
        email: data.email,
        address: data.address,
        hallReference: data.hallReference,
        registrationReason: data.registrationReason,
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    await sendEmailVerification(auth.currentUser, {
      url: 'http://localhost:3000/sign-in',
    })
    await updateProfile(auth.currentUser, {
      displayName: 'Person',
    })
    await signOut(auth)
    history.push('/submitted')
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        name: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        password: '',
        address: '',
        hallReference: '',
        registrationReason: '',
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
            <Form.Group as={Col} md='4' controlId='validationFormikDateOfBirth'>
              <FormDateBox
                label='تاريخ الميلاد'
                name='dateOfBirth'
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.dateOfBirth && !errors.dateOfBirth}
                isInvalid={touched.dateOfBirth && !!errors.dateOfBirth}
                error={errors.dateOfBirth}
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
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikHallReference'
            >
              <Form.Label>كيف عرفت عن المنصة ؟</Form.Label>
              <FormRadioOption
                name='hallReference'
                value='سوشال ميديا'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='hallReference'
                value='أصدقاء و أقارب'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='hallReference'
                value='عن طريق البحث'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOptionWithValidation
                name='hallReference'
                value='مؤسسات المجتمع المدني'
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.hallReference && !errors.hallReference}
                isInvalid={touched.hallReference && !!errors.hallReference}
                error={errors.hallReference}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              md='4'
              controlId='validationFormikRegistrationReason'
            >
              <Form.Label>ما سبب تسجيلك بالمنصة</Form.Label>
              <FormRadioOption
                name='registrationReason'
                value='مؤسس مبادرة'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='registrationReason'
                value='للتعرف على المساحات'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormRadioOption
                name='registrationReason'
                value='التعرف على المنصة'
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <FormRadioOtherOption
                name='registrationReason'
                value={values.radio_other}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  (touched.registrationReason || touched.radio_other) &&
                  !errors.registrationReason &&
                  !errors.radio_other
                }
                isInvalid={
                  (touched.registrationReason || touched.radio_other) &&
                  (!!errors.registrationReason || !!errors.radio_other)
                }
                error={errors.registrationReason || errors.radio_other}
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
