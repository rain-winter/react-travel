import React, { PropsWithChildren } from 'react'
import { Button, Dropdown, Layout, Menu, Typography } from 'antd'
const { Header, Footer, Content } = Layout

import logo from '../../assets/react.svg'
import styles from './UserLayout.module.css'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

interface childrenProps {
  children: any
}
const items = [
  { label: '中文', key: 'zh' }, // 菜单项务必填写 key
  { label: 'english', key: 'en' },
]
const menu = (
  <Menu
    items={[
      { label: '中文', key: 'zh' }, // 菜单项务必填写 key
      { label: 'english', key: 'en' },
    ]}
  ></Menu>
)

export const UserLayout: React.FC<PropsWithChildren<childrenProps>> = ({ children }) => {
  return (
    <Layout className={styles['user-layout-container']}>
      <Header className={styles['header']}>
        <div className={styles['lang']}>
          <Dropdown overlay={menu}>
            <Button>
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles['content']}>
        <div className={styles['top']}>
          <div className={styles['content-header']}>
            <Link to="/">
              <img alt="logo" src={logo} className={styles['logo']} />
              <Typography.Text className={styles['title']}>React 旅游网</Typography.Text>
            </Link>
          </div>
          <div className={styles['desc']}>!!!</div>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', fontSize: '20px' }}>footer</Footer>
    </Layout>
  )
}
