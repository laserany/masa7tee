import * as React from 'react'
import { getStorage } from 'firebase/storage'

const FirebaseStorageContext = React.createContext(undefined)

const FirebaseStorageProvider = ({ children }) => {
  const [storage, setStorage] = React.useState(null)
  const value = { storage }

  React.useEffect(() => {
    setStorage(getStorage())
  }, [])

  return (
    <FirebaseStorageContext.Provider value={value}>
      {children}
    </FirebaseStorageContext.Provider>
  )
}

function useFirebaseStorage() {
  const context = React.useContext(FirebaseStorageContext)
  if (context === undefined) {
    throw new Error(
      'useFirebaseStorage must be used within a FirebaseStorageProvider'
    )
  }
  return context.storage
}

export { FirebaseStorageProvider, useFirebaseStorage }
