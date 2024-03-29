import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import VerificationEmailPage from './pages/VerificationEmailPage'
import Container from 'react-bootstrap/Container'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookHallPage from './pages/BookHallPage.js'
import RegisterHallPage from './pages/RegisterHallPage.js'
import { initializeApp } from 'firebase/app'
import SignOutPage from './pages/SignOutPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import { FirebaseAuthProvider } from './firebase/FirebaseAuthContext'
import { FirestoreProvider } from './firebase/FirestoreContext'
import AuthRoute from './routes/AuthRoute'
import { FirebaseStorageProvider } from './firebase/FirebaseStorageContext'
import { useState } from 'react'
import BookHallDetailsPage from './pages/BookHallDetailsPage'
import EditHallPage from './pages/EditHallPage'
import EditHallDetailsPage from './pages/EditHallDetailsPage'

function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAhvsdq59-74iBHOfy3iAz3pDocMDseck4',
    authDomain: 'masa7tee.firebaseapp.com',
    projectId: 'masa7tee',
    storageBucket: 'masa7tee.appspot.com',
    messagingSenderId: '629309523720',
    appId: '1:629309523720:web:8227b27b19f7aa46280ebd',
    measurementId: 'G-SYJKX0YZMW',
  }

  initializeApp(firebaseConfig)

  const [loading, setLoading] = useState(true)

  return (
    <FirebaseAuthProvider setLoading={setLoading}>
      <FirestoreProvider>
        <FirebaseStorageProvider>
          <Container>
            {!loading && (
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/sign-in' component={SignInPage} />
                <Route path='/sign-up' component={SignUpPage} />
                <Route path='/forgot-password' component={ForgotPasswordPage} />
                <Route path='/reset-password' component={ResetPasswordPage} />
                <Route path='/submitted' component={VerificationEmailPage} />
                <AuthRoute>
                  <Switch>
                    <Route path='/sign-out' component={SignOutPage} />
                    <Route path='/register-hall' component={RegisterHallPage} />
                    <Route
                      path='/book-hall/:id'
                      component={BookHallDetailsPage}
                    />
                    <Route path='/book-hall' component={BookHallPage} />
                    <Route
                      path='/edit-hall/:id'
                      component={EditHallDetailsPage}
                    />
                    <Route path='/edit-hall' component={EditHallPage} />
                    <Redirect to='/home' />
                  </Switch>
                </AuthRoute>
                <Redirect to='/home' />
              </Switch>
            )}
          </Container>
        </FirebaseStorageProvider>
      </FirestoreProvider>
    </FirebaseAuthProvider>
  )
}

export default App
