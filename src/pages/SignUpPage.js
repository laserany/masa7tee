import React from 'react'
import SignUpPersonPage from './SignUpPersonPage'
import SignUpINeedSafeSpacePage from './SignUpINeedSafeSpacePage'
import SignUpSafeSpaceProviderPage from './SignUpSafeSpaceProviderPage'
import SignUpMainPage from './SignUpMainPage'
import { useParams } from 'react-router-dom'
const SignUpPage = () => {
  let { signUpType } = useParams()
  switch (signUpType) {
    case 'person':
      return <SignUpPersonPage />
    case 'i-need-safe-space':
      return <SignUpINeedSafeSpacePage />
    case 'safe-space-provider':
      return <SignUpSafeSpaceProviderPage />
    default:
      return <SignUpMainPage />
  }
}

export default SignUpPage
