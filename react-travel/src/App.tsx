import React from 'react'
import styles from './App.module.css'

import { Header, Footer, SideMenu, Carousel } from './components'
import { Row, Col, Typography } from 'antd'
import { ProductCollection } from './components'
// 引入首页推荐数据
import { productList1, productList2, productList3 } from './mockups'
import sideImage from './assets/images/sider_2019_12-09.png'
import sideImage2 from './assets/images/sider_2019_02-04.png'
import sideImage3 from './assets/images/sider_2019_02-04-2.png';
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
        {/* title传递了antd个性化title */}
        {/* 传入数据 */}
        {/* 传入图片 */}
        <ProductCollection
          title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollection
          title={<Typography.Title level={3} type="warning">新品上市</Typography.Title>}
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={<Typography.Title level={3} type="warning">国内游推荐</Typography.Title>}
          sideImage={sideImage3}
          products={productList3}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
