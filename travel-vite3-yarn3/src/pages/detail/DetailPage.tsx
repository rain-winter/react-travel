import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Spin, DatePicker, Divider, Typography, Anchor } from 'antd'

import styles from './Detail.module.css'
import { ProductIntro, ProductComments } from '../../components'
import { commentMockData } from './mockup' // 模拟的数据
import { productDetailSlice, getProductDetail } from '../../redux/productDetail/slice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
// 布局
import { MainLayout } from '../../layouts/mainLayout'

const { RangePicker } = DatePicker // 日期选择
const { Link } = Anchor // 锚点

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams()
  const { loading, error } = useSelector((state: RootState) => state.productDetail)
  const product = useSelector((state: RootState) => state.productDetail.data)

  const dispatch = useDispatch()

  useEffect(() => {
    // TODO 这个报错没有解决
    dispatch(getProductDetail(touristRouteId))
  }, [])

  if (loading) {
    return (
      // 加载图标
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100px',
        }}
      />
    )
  }

  if (error) {
    return <div>网站出错：{error}</div>
  }

  return (
    <MainLayout>
      {/* 产品简介 与 日期选择 */}
      <div className={styles['product-intro-container']}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={product.touristRoutePictures.map((p: { url: any }) => p.url)}
            />
          </Col>
          <Col span={11}>
            {/* 日期控件 */}
            <RangePicker open style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </div>
      {/* 锚点菜单 */}
      <Anchor className={styles['product-detail-anchor']}>
        <Link href="#feature" title="产品特色" />
        <Link href="#fees" title="费用" />
        <Link href="#notes" title="预订须知" />
        <Link href="#comments" title="用户评价" />
      </Anchor>

      {/* 产品特色 */}
      <div id="feature" className={styles['product-detail-container']}>
        <Divider orientation="center">
          <Typography.Title level={3}>产品特色</Typography.Title>
        </Divider>
        <div dangerouslySetInnerHTML={{ __html: product.features }} style={{ margin: 50 }}></div>
      </div>
      {/* 费用 */}
      <div id="fees" className={styles['product-detail-container']}>
        <Divider orientation="center">
          <Typography.Title level={3}>费用</Typography.Title>
        </Divider>
        <div dangerouslySetInnerHTML={{ __html: product.fees }} style={{ margin: 50 }}></div>
      </div>
      {/* 预定须知 */}
      <div id="notes" className={styles['product-detail-container']}>
        <Divider orientation="center">
          <Typography.Title level={3}>预订须知</Typography.Title>
        </Divider>
        <div dangerouslySetInnerHTML={{ __html: product.notes }} style={{ margin: 50 }}></div>
      </div>
      {/* 商品评价 */}
      <div id="comments" className={styles['product-detail-container']}>
        <Divider orientation="center">
          <Typography.Title level={3}>商品评论</Typography.Title>
        </Divider>
        <div style={{ margin: 40 }}>
          <ProductComments data={commentMockData} />
        </div>
      </div>
    </MainLayout>
  )
}
