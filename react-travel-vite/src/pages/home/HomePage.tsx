import React from "react";
import {Col, Row, Typography} from "antd";
import {useTranslation} from 'react-i18next'
// 引入footer和header组件
import {Header, Footer, SideMenu, Carousel, BusinessPartners, ProductCollection} from '../../components'
// 引入新品上市的数据
import {productList1, productList2, productList3} from './mockup'
// 引入 新品上市左侧轮播图
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css'



export const HomePage: React.FC = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.App}>
            {/*头部*/}
            <Header/>
            {/* main */}
            <div className={styles['page-content']}>
                {/* 左侧多重菜单和轮播图 */}
                <Row style={{marginTop: 20}}>
                    <Col span={6}><SideMenu/></Col>
                    <Col span={18}><Carousel/></Col>
                </Row>
                {/* 爆款推荐 */}
                <ProductCollection title={
                    <Typography.Title level={3} type='danger'>
                        {t('home_page.hot_recommended')}
                    </Typography.Title>
                } sideImage={sideImage} products={productList1}/>
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
                {/*  合作伙伴  */}
                <BusinessPartners/>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    );
}