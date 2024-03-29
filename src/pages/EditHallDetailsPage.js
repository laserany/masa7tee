import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import FormTextBox from '../components/signup/FormTextBox'
import FormCheckboxOption from '../components/signup/FormCheckboxOption'
import FormCheckboxOtherOption from '../components/signup/FormCheckboxOtherOption'
import BlueArrowRightButton from '../components/signup/BlueArrowRightButton'
import FormFileBox from '../components/signup/FormFileBox'
import Table from 'react-bootstrap/Table'
import CenteredTableHead from '../components/common/CenteredTableHead'
import Masa7teeButton from '../components/common/Masa7teeButton'
import { getAuth } from 'firebase/auth'
import { updateDoc, doc, getDoc } from 'firebase/firestore'
import { useFirestore } from '../firebase/FirestoreContext'
import { useHistory } from 'react-router-dom'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useFirebaseStorage } from '../firebase/FirebaseStorageContext'
import FormSelectBox from '../components/signup/FormSelectBox'
import { useFirebaseAuth } from '../firebase/FirebaseAuthContext'
import { Redirect } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
const checkboxOptionsArray = ['تدفئة', 'شاشة', 'قرطاسية', 'Coffee break']

function EditHallDetailsPage() {
  const user = useFirebaseAuth()
  const schema = yup.object().shape({
    hallName: yup.string().required('This is a required field'),
    capacity: yup
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
    location: yup.string().required('This is a required field'),
    logistic: yup.array().min(1, 'This is a required field'),
    checkbox_other: yup.string().when('logistic', {
      is: (logistic) =>
        logistic.length === 1 && logistic[0] === 'checkbox_other',
      then: yup.string().required('This is a required field'),
    }),
    covid: yup.string().required('This is a required field'),
  })

  const history = useHistory()
  const auth = getAuth()
  const db = useFirestore()
  const { id } = useParams()
  const storage = useFirebaseStorage()

  const [other, setOther] = useState('')
  const [initialHallData, setInitialHallData] = useState()
  const [rows, setRows] = useState([])
  const [dawamList, setDawamList] = useState([])

  useEffect(() => {
    async function fetchHallDetails() {
      const hallRef = doc(db, 'halls', id)
      const hallSnap = await getDoc(hallRef)
      const storageRef = ref(storage, `hallImages/${hallSnap.data().name}`)
      const photoDownloadUrl = await getDownloadURL(storageRef)
      const response = await fetch(photoDownloadUrl)
      const blob = await response.blob()
      const file = new File([blob], hallSnap.data().name, {
        type: blob.type,
      })

      setInitialHallData({ ...hallSnap.data(), file: [file] })
    }
    fetchHallDetails()
  }, [db, id, storage])

  useEffect(() => {
    if (initialHallData) {
      setDawamList(initialHallData.dawamList)
      for (let i = 0; i < initialHallData.dawamList.length; i++) {
        setRows((rows) =>
          rows.concat(
            <tr key={i}>
              <td
                contentEditable
                onKeyUp={(e) =>
                  (initialHallData.dawamList[i].price =
                    e.target.innerText.trim())
                }
              >
                {initialHallData.dawamList[i].price.trim()}
              </td>
              <td>
                <Form.Control
                  as='select'
                  id='reservationCapability'
                  onChange={(e) =>
                    (initialHallData.dawamList[i].reservationCapability =
                      e.target.value)
                  }
                >
                  <option
                    selected={
                      initialHallData.dawamList[i].reservationCapability ===
                      'حجز'
                    }
                  >
                    حجز
                  </option>
                  <option
                    selected={
                      initialHallData.dawamList[i].reservationCapability ===
                      'عدم حجز'
                    }
                  >
                    عدم حجز
                  </option>
                </Form.Control>
              </td>
              <td>
                {' '}
                <Form.Control
                  as='select'
                  id='availability'
                  onChange={(e) =>
                    (initialHallData.dawamList[i].availability = e.target.value)
                  }
                >
                  <option
                    selected={
                      initialHallData.dawamList[i].reservationCapability ===
                      'فراغ'
                    }
                  >
                    فراغ
                  </option>
                  <option
                    selected={
                      initialHallData.dawamList[i].reservationCapability ===
                      'عدم فراغ'
                    }
                  >
                    عدم فراغ
                  </option>
                </Form.Control>
              </td>
              <td
                contentEditable
                onKeyUp={(e) =>
                  (initialHallData.dawamList[i].time =
                    e.target.innerText.trim())
                }
              >
                {initialHallData.dawamList[i].time.trim()}
              </td>
              <td
                contentEditable
                onKeyUp={(e) =>
                  (initialHallData.dawamList[i].date =
                    e.target.innerText.trim())
                }
              >
                {initialHallData.dawamList[i].date.trim()}
              </td>
            </tr>
          )
        )
      }
    }
  }, [initialHallData])

  let onSubmit = async (data, { setErrors }) => {
    const storageRef = ref(storage, `hallImages/${data.hallName}`)
    await uploadBytes(storageRef, data.picture)
    try {
      await updateDoc(doc(db, 'halls', id), {
        institutionID: auth.currentUser.uid,
        name: data.hallName,
        capacity: data.capacity,
        location: data.location,
        logistic:
          other.length > 0
            ? [...data.logistic, other].filter((e) => e !== 'checkbox_other')
            : data.logistic,
        covid: data.covid,
        photoUrl: `https://storage.googleapis.com/masa7tee.appspot.com/hallImages/${data.hallName}`,
        dawamList: dawamList,
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    history.push('/home')
  }

  if (user.displayName === 'Institution') {
    if (initialHallData) {
      return (
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{
            hallName: initialHallData.name,
            capacity: initialHallData.capacity,
            picture: '',
            location: initialHallData.location,
            logistic: initialHallData.logistic,
            checkbox_other: '',
            covid: initialHallData.covid,
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
                <Form.Group
                  as={Col}
                  md='4'
                  controlId='validationFormikHallName'
                >
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
                <Form.Group
                  as={Col}
                  md='4'
                  controlId='validationFormikCapacity'
                >
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
                <Form.Group
                  as={Col}
                  md='4'
                  controlId='validationFormikLogistic'
                >
                  <Form.Label>اللوجستيات المتوفرة</Form.Label>
                  {checkboxOptionsArray.map((checkboxOption) => (
                    <FormCheckboxOption
                      name='logistic'
                      value={checkboxOption}
                      defaultChecked={initialHallData.logistic.includes(
                        checkboxOption
                      )}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ))}
                  <FormCheckboxOtherOption
                    name='logistic'
                    value={values.checkbox_other}
                    defaultChecked={
                      initialHallData.logistic.filter(
                        (x) => !checkboxOptionsArray.includes(x)
                      ).length > 0
                    }
                    initialOtherValue={
                      initialHallData.logistic.filter(
                        (x) => !checkboxOptionsArray.includes(x)
                      )[0] || ''
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    setOther={setOther}
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
                    file={initialHallData.file}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    isValid={touched.picture && !errors.picture}
                    isInvalid={touched.picture && !!errors.picture}
                    error={errors.picture}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md='4'
                  controlId='validationFormikLocation'
                >
                  <FormSelectBox
                    label='موقع القاعة'
                    name='location'
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.location && !errors.location}
                    isInvalid={touched.location && !!errors.location}
                    error={errors.location}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Masa7teeButton
                  onClick={() => {
                    setDawamList((dawamList) => dawamList.concat({}))
                    let i = rows.length
                    setRows((rows) =>
                      rows.concat(
                        <tr key={i}>
                          <td
                            contentEditable
                            onKeyUp={(e) =>
                              setDawamList((dawamList) => {
                                dawamList[i].price = e.target.innerText.trim()
                                return dawamList
                              })
                            }
                          ></td>
                          <td>
                            <Form.Control
                              as='select'
                              id='reservationCapability'
                              onChange={(e) =>
                                setDawamList((dawamList) => {
                                  dawamList[i].reservationCapability =
                                    e.target.value
                                  return dawamList
                                })
                              }
                            >
                              <option>حجز</option>
                              <option>عدم حجز</option>
                            </Form.Control>
                          </td>
                          <td>
                            {' '}
                            <Form.Control
                              as='select'
                              id='availability'
                              onChange={(e) =>
                                setDawamList((dawamList) => {
                                  dawamList[i].availability = e.target.value
                                  return dawamList
                                })
                              }
                            >
                              <option>فراغ</option>
                              <option>عدم فراغ</option>
                            </Form.Control>
                          </td>
                          <td
                            contentEditable
                            onKeyUp={(e) =>
                              setDawamList((dawamList) => {
                                dawamList[i].time = e.target.innerText.trim()
                                return dawamList
                              })
                            }
                          ></td>
                          <td
                            contentEditable
                            onKeyUp={(e) =>
                              setDawamList((dawamList) => {
                                dawamList[i].date = e.target.innerText.trim()
                                return dawamList
                              })
                            }
                          ></td>
                        </tr>
                      )
                    )
                  }}
                >
                  Add Row
                </Masa7teeButton>
                <Masa7teeButton
                  onClick={() => {
                    setDawamList((dawamList) => dawamList.slice(0, -1))
                    setRows((rows) => rows.slice(0, -1))
                  }}
                  style={{ marginLeft: '10px' }}
                >
                  Delete Row
                </Masa7teeButton>
              </Form.Row>
              <Form.Row className='mt-3'>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <CenteredTableHead>المبلغ</CenteredTableHead>
                      <CenteredTableHead>الاستطاعة للحجز</CenteredTableHead>
                      <CenteredTableHead>الفراغ / عدم الفراغ</CenteredTableHead>
                      <CenteredTableHead>الوقت</CenteredTableHead>
                      <CenteredTableHead>اليوم والتاريخ</CenteredTableHead>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
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
    } else {
      return <></>
    }
  } else {
    return <Redirect to='/home' />
  }
}

export default EditHallDetailsPage
