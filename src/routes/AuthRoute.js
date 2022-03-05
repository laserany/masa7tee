import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useFirebaseAuth } from '../firebase/FirebaseAuthContext'

function AuthRoute({ children }) {
  const user = useFirebaseAuth()
  const location = useLocation()
  return !!user ? (
    children
  ) : (
    <Redirect to='/home' state={{ path: location.pathname }} />
  )
}

export default AuthRoute
