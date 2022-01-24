import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import VerificationEmailPage from './pages/VerificationEmailPage'
import Container from 'react-bootstrap/Container'
import { Switch, Route, Redirect } from 'react-router-dom'
import SaraQuestionsPage from './pages/SaraQuestionsPage'
import SafeSpaceSpecificationsPage from './pages/SafeSpaceSpecificationsPage'
import HomePage from './pages/HomePage'
import BookHallsPage from './pages/BookHallsPage.js'
import { initializeApp } from 'firebase/app'

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

  return (
    <Container>
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/sign-in' component={SignInPage} />
        <Route path='/sign-up' component={SignUpPage} />
        <Route path='/questions' component={SaraQuestionsPage} />
        <Route path='/submitted' component={VerificationEmailPage} />
        <Route
          path='/safe-space-specifications'
          component={SafeSpaceSpecificationsPage}
        />
        <Route path='/book-halls' component={BookHallsPage} />
        <Redirect to='/home' />
      </Switch>
    </Container>
  )
}

export default App
