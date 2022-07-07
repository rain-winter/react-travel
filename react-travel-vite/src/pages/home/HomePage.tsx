import React from "react";
// 引入 react-i18next
import {withTranslation, WithTranslation} from "react-i18next";
// 引入footer和header组件
import {Header,Footer} from '../../components'
// 引入新品上市的数据
import { productList1, productList2, productList3 } from './mockup'
// 引入 新品上市左侧轮播图
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css'

class HomePageComponent extends React.Component<WithTranslation>{
    render() {
        console.log(this.props.t)
        const {t} = this.props
        return (
            <div className={styles.App}>
                <Header/>
            </div>
        );
    }
}

export const HomePage = withTranslation()(HomePageComponent)