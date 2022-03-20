import React from 'react'
import styles from './App.module.css'

import { Header, Footer, SideMenu, Carousel } from './components'
import { Row, Col, Typography } from 'antd'

// 引入首页推荐数据
import { productList1, productList2, productList3 } from './mockups'
import sideImage from './assets/images/sider_2019_12-09.png'
import sideImage2 from './assets/images/sider_2019_02-04.png'
import sideImage3 from './assets/images/sider_2019_02_04-2.png'
function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          {/* 左侧多重菜单和走马灯 */}
          <Col span={6}>
            <div>
              <SideMenu />
            </div>
          </Col>
          <Col span={18}>
            <div>
              <Carousel />
            </div>
          </Col>
        </Row>
        {/*  */}
        <ProductCollection
          title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
          sideImage={sideImage}
          products={productList1}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
