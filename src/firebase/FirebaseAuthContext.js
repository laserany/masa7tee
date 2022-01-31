import * as React from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const FirebaseAuthContext = React.createContext(undefined)

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const value = { user }

  React.useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, setUser)
    return unsubscribe
  }, [])

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

function useFirebaseAuth() {
  const context = React.useContext(FirebaseAuthContext)
  if (context === undefined) {
    throw new Error(
      'useFirebaseAuth must be used within a FirebaseAuthProvider'
    )
  }
  return context.user
}

export { FirebaseAuthProvider, useFirebaseAuth }
