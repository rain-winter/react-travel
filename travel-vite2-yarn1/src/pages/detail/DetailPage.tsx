import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Spin, DatePicker } from 'antd'

import styles from './Detail.module.css'
import axios from 'axios'
import { Footer, Header } from '../../components'

interface MatchParams {
    touristRouteId: String
}
const { RangePicker } = DatePicker;

export const DetailPage: React.FC<MatchParams> = () => {
    const { touristRouteId } = useParams()
    const [loading, setLoading] = useState<boolean>()
    const [product, setProduct] = useState<any>()
    const [error, setError] = useState<string | null>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get(
                    `https://www.fastmock.site/mock/4ea3c838db55570bb2cd810bff0f92a8/api`
                )
                setProduct(data)
                setLoading(false)
            } catch (e: any) {
                setError(e.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return (
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

    return <>
        <Header />
        <div className={styles['page-content']}>
            {/* 产品简介 与 日期选择 */}
            <div className={styles['product-intro-container']}>
                <Row>
                    <Col span={13}></Col>
                    <Col span={11}>
                        {/* 日期控件 */}
                        <RangePicker open style={{ marginTop: 20 }} />
                    </Col>
                </Row>
            </div>
            {/* 锚点菜单 */}
            <div className={styles['product-detail-anchor']}></div>
            {/* 产品特色 */}
            <div id='feature' className={styles['product-detail-container']}></div>
            {/* 费用 */}
            <div id='fees' className={styles['product-detail-container']} ></div>
            {/* 预定须知 */}
            <div id='notes' className={styles['product-detail-container']}></div>
            {/* 商品评价 */}
            <div id='comments' className={styles['product-detail-container']}></div>
        </div>
        <Footer />
    </>
}
