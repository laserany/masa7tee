import React, { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useFirebaseAuth } from '../firebase/FirebaseAuthContext'
import Masa7teeButton from '../components/common/Masa7teeButton'
import { Link } from 'react-router-dom'
import { useFirestore } from '../firebase/FirestoreContext'

const EditHallPage = () => {
  const user = useFirebaseAuth()
  const db = useFirestore()
  const [hallButtons, setHallButtons] = useState([])
  useEffect(() => {
    async function fetchHalls() {
      const q = query(
        collection(db, 'halls'),
        where('institutionID', '==', user.uid)
      )
      const institutionHallsDocs = await getDocs(q)
      institutionHallsDocs.forEach((doc) =>
        setHallButtons((hallButtons) =>
          hallButtons.concat(
            <div class='row justify-content-center'>
              <Link to={`edit-hall/${doc.id}`}>
                <Masa7teeButton style={{ display: 'block', marginTop: '25px' }}>
                  {doc.data().name}
                </Masa7teeButton>
              </Link>
            </div>
          )
        )
      )
    }
    fetchHalls()
  }, [db, user.uid])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Choose the hall to edit</h1>
      {hallButtons}
    </div>
  )
}

export default EditHallPage
