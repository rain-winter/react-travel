import React, { PropsWithChildren } from 'react'
import { Button, Dropdown, Layout, Menu } from 'antd'
const { Header, Footer, Content } = Layout

import styles from './UserLayout.module.css'
import { CaretDownOutlined } from '@ant-design/icons'

interface childrenProps {
  children: any
}
const items = [
  { label: '中文', key: 'zh' }, // 菜单项务必填写 key
  { label: 'english', key: 'en' },
]

export const UserLayout: React.FC<PropsWithChildren<childrenProps>> = ({ children }) => {
  return (
    <Layout className={styles['user-layout-container']}>
      <Header className={styles['header']}>
        <div className={styles['lang']}>
          {/* <Dropdown overlay={items} placement="bottomLeft" arrow>
            <Button>bottomLeft</Button>
          </Dropdown> */}
        </div>
      </Header>
    </Layout>
  )
}
