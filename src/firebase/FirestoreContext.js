import * as React from 'react'
import { getFirestore } from 'firebase/firestore'

const FirestoreContext = React.createContext(undefined)

const FirestoreProvider = ({ children }) => {
  const [db, setDb] = React.useState(null)
  const value = { db }

  React.useEffect(() => {
    setDb(getFirestore())
  }, [])

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  )
}

function useFirestore() {
  const context = React.useContext(FirestoreContext)
  if (context === undefined) {
    throw new Error('useFirestore must be used within a FirestoreProvider')
  }
  return context.db
}

export { FirestoreProvider, useFirestore }
