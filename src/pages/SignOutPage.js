import React, { useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import ConfirmationParagraph from '../components/common/ConfirmationParagraph'

const SignOutPage = () => {
  const history = useHistory()
  useEffect(() => {
    async function signUserOut() {
      const auth = getAuth()
      await signOut(auth)
      setTimeout(function () {
        history.push('/')
      }, 3000)
    }
    signUserOut()
  }, [history])
  return (
    <ConfirmationParagraph>
      You have been successfully signed out. You will be redirected to home page
      shortly
    </ConfirmationParagraph>
  )
}

export default SignOutPage
