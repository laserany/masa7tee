import { useEffect, useRef, useState, useContext, createContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const FirebaseAuthContext = createContext(undefined)

const FirebaseAuthProvider = ({ children, setLoading }) => {
  const [user, setUser] = useState()
  const value = { user }
  const isInitialMount = useRef(true)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, setUser)
    return unsubscribe
  }, [])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      setLoading(false)
    }
  }, [user, setLoading])
  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext)
  if (context === undefined) {
    throw new Error(
      'useFirebaseAuth must be used within a FirebaseAuthProvider'
    )
  }
  return context.user
}

export { FirebaseAuthProvider, useFirebaseAuth }
