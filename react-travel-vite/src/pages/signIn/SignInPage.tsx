import React from "react";

import { useParams } from 'react-router-dom'
export const SignInPage: React.FC = ({ ...props }) => {
  console.log(props)
  const param = useParams()
  console.log(param)
  return <h1>登录界面</h1>
}