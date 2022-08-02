import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

import styles from './RegisterForm.module.css'

export const RegisterForm: React.FC = () => {
  const navigator = useNavigate()

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values)
    const { data } = await axios.post(
      'https://www.fastmock.site/mock/4ea3c838db55570bb2cd810bff0f92a8/api/auth/register',
      {
        username: values.username,
        password: values.password,
        confirmPassword: values.confirmPassword,
      }
    )
    navigator('/signIn/')
  }

  return (
    <Form
      name="normal_login"
      className={styles['register-form']}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className={styles['site-form-item-icon']} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className={styles['site-form-item-icon']} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: 'Please confirm your Password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject('密码不一致')
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className={styles['site-form-item-icon']} />}
          type="password"
          placeholder="confirm Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  )
}
