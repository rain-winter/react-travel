import React from "react";
import { Col, Row, Typography } from 'antd';
// 高级组件、泛型定义
import { withTranslation, WithTranslation } from 'react-i18next'

import { BusinessPartners, Header } from '../../components'
import { SideMenu } from '../../components'
import { Carousel } from '../../components'
import { ProductCollection } from '../../components'
import { Footer } from '../../components';
// 引入新品上市的数据
import { productList1, productList2, productList3 } from './mockup'
// 引入 新品上市左侧轮播图
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css'

class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    console.log(this.props.t)
    const { t } = this.props
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles['page-content']}>
          {/* 左侧多重菜单和轮播图 */}
          <Row style={{ marginTop: 20 }}>
            <Col span={6}><SideMenu /></Col>
            <Col span={18}><Carousel /></Col>
          </Row>
          {/* 爆款推荐 */}
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          />

          {/* 新品上市 */}
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          {/* 国内游推荐 */}
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />
          {/* 合作伙伴 */}
          <BusinessPartners />
        </div>
        {/* footer */}
        <Footer />
      </div>
    )
  }
}

export const HomePage = withTranslation()(HomePageComponent)