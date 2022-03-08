import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useFirestore } from '../firebase/FirestoreContext'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import CenteredTableHead from '../components/common/CenteredTableHead'
import Masa7teeButton from '../components/common/Masa7teeButton'
import { Link } from 'react-router-dom'

const BookHallDetailsPage = () => {
  const db = useFirestore()
  const { id } = useParams()
  const [dawamRows, setDawamRows] = useState([])
  useEffect(() => {
    async function fetchHallDetails() {
      setDawamRows([])
      const hallRef = doc(db, 'halls', id)
      const hallSnap = await getDoc(hallRef)
      const dawamList = hallSnap.data().dawamList
      for (let i = 0; i < dawamList.length; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        setDawamRows((dawamRows) =>
          dawamRows.concat(
            <tr key={i}>
              <td>
                <Link to='/home'>
                  <Masa7teeButton>احجز</Masa7teeButton>
                </Link>
              </td>
              <td>{dawamList[i].price}</td>
              <td>{dawamList[i].reservationCapability}</td>
              <td>{dawamList[i].availability}</td>
              <td>{dawamList[i].time}</td>
              <td>{dawamList[i].date}</td>
            </tr>
          )
        )
      }
    }
    fetchHallDetails()
  }, [db, id])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <CenteredTableHead></CenteredTableHead>
          <CenteredTableHead>المبلغ</CenteredTableHead>
          <CenteredTableHead>الاستطاعة للحجز</CenteredTableHead>
          <CenteredTableHead>الفراغ / عدم الفراغ</CenteredTableHead>
          <CenteredTableHead>الوقت</CenteredTableHead>
          <CenteredTableHead>اليوم والتاريخ</CenteredTableHead>
        </tr>
      </thead>
      <tbody>{dawamRows}</tbody>
    </Table>
  )
}

export default BookHallDetailsPage
