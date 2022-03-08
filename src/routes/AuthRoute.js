import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useFirebaseAuth } from '../firebase/FirebaseAuthContext'

function AuthRoute({ children }) {
  const user = useFirebaseAuth()
  const location = useLocation()
  if (user === null) {
    return <Redirect to='/home' state={{ path: location.pathname }} />
  } else {
    return children
  }
}

export default AuthRoute
