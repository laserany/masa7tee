import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import VerificationEmailPage from './pages/VerificationEmailPage'
import Container from 'react-bootstrap/Container'
import { Switch, Route, Redirect } from 'react-router-dom'
import SaraQuestionsPage from './pages/SaraQuestionsPage'
import SafeSpaceSpecificationsPage from './pages/SafeSpaceSpecificationsPage'
import HomePage from './pages/HomePage'
import HallsPage from './pages/HallsPage.js'
function App() {
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
        <Route path='/halls' component={HallsPage} />
        <Redirect to='/home' />
      </Switch>
    </Container>
  )
}

export default App
