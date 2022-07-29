import React, { PropsWithChildren } from 'react'

import { Header, Footer } from '../../components'
import styles from './MainLayout.module.css'

interface childrenProps {
  children: any
}

export const MainLayout: React.FC<PropsWithChildren<childrenProps>> = ({ children }) => {
  return (
    <>
      <Header />
      {/* HomePage中间的内容会渲染到chindren里 */}
      <div className={styles['page-content']}>{children}</div>
      <Footer />
    </>
  )
}
// 文档 https://zh-hans.reactjs.org/docs/glossary.html#propschildren
