import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useFirestore } from '../firebase/FirestoreContext'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import CenteredTableHead from '../components/common/CenteredTableHead'
import Masa7teeButton from '../components/common/Masa7teeButton'
import { Link } from 'react-router-dom'
import CenteredTableData from '../components/common/CenteredTableData'

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
        const disabled =
          dawamList[i].availability === 'فراغ' &&
          dawamList[i].reservationCapability === 'حجز'
        setDawamRows((dawamRows) =>
          dawamRows.concat(
            <tr key={i}>
              <CenteredTableData>
                <Link to='/home'>
                  <Masa7teeButton disabled={!disabled}>احجز</Masa7teeButton>
                </Link>
              </CenteredTableData>
              <CenteredTableData>{dawamList[i].price}</CenteredTableData>
              <CenteredTableData>
                {dawamList[i].reservationCapability}
              </CenteredTableData>
              <CenteredTableData>{dawamList[i].availability}</CenteredTableData>
              <CenteredTableData>{dawamList[i].time}</CenteredTableData>
              <CenteredTableData>{dawamList[i].date}</CenteredTableData>
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
