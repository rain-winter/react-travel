import React from 'react'

import { useParams } from 'react-router-dom'

import { SignForm } from './SignForm'
import { UserLayout } from '../../layouts/userLayout'

export const SignInPage: React.FC = ({ ...props }) => {
  console.log(props)
  const param = useParams()
  console.log(param)
  return (
    <UserLayout>
      <SignForm />
    </UserLayout>
  )
}
