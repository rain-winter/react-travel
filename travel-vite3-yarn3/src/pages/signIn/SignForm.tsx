import styles from './SignForm.module.css'
import { Button, Checkbox, Form, Input } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../redux/user/slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'

export const SignForm: React.FC = () => {
  const { loading, error, token } = useSelector((state: RootState) => state.user)
  const navigator = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (token !== null) {
      // 用户已登录
      navigator('/')
    }
  }, [token])

  // 表单验证成功进入这个函数
  const onFinish = (values: any) => {
    console.log('Success:', values)
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    )
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['register-form']}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
