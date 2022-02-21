import React from 'react'
import SignUpPersonPage from './SignUpPersonPage'
import SignUpInstitutionPage from './SignUpInstitutionPage'
import SignUpMainPage from './SignUpMainPage'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { masa7teeColor } from '../components/common/constants'
const SignUpPage = ({ match }) => {
  return (
    <Route
      path={`${match.url}`}
      render={({ match: { url } }) => (
        <Container
          style={{
            borderStyle: 'solid',
            borderColor: `${masa7teeColor}`,
          }}
        >
          <Switch>
            <Route path={`${url}/person`} component={SignUpPersonPage} />
            <Route
              path={`${url}/institution`}
              component={SignUpInstitutionPage}
            />
            <Route component={SignUpMainPage} />
          </Switch>
        </Container>
      )}
    />
  )
}

export default SignUpPage
