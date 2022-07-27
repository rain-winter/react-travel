import React from "react";
import {GlobalOutlined} from "@ant-design/icons"
import {Button, Dropdown, Layout, Menu, Typography, Input} from "antd"; // antdesign
import type {MenuProps} from 'antd'; // 按钮事件类型
// react-router
import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next' // i18n
// 使用 redux Toolkit
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {changeLanguage} from '../../redux/language/LanguageSlice'
// 引入样式文件、logo
import styles from './Header.module.css'
import logo from '../../assets/react.svg'

export const Header: React.FC = () => {
    const {language, languageList} = useSelector((state: RootState) => state.language)
    const nav = useNavigate()
    const {t} = useTranslation()
    const dispatch = useDispatch()

    const menuClick: MenuProps['onClick'] = ({key}) => {
        console.log(key)
        dispatch(changeLanguage(key))
    };

    const items = [
        {label: '中文', key: 'zh'}, // 菜单项务必填写 key
        {label: 'english', key: 'en'},
    ];
    const items2 = [
        {label: t('header.home_page'), key: '1'},
        {label: t('header.weekend'), key: '2'},
        {label: t('header.group'), key: '3'},
        {label: t('header.backpack'), key: '4'},
        {label: t('header.private'), key: '5'},
        {label: t('header.cruise'), key: '6'},
        {label: t('header.hotel'), key: '7'},
        {label: t('header.local'), key: '8'},
        {label: t('header.theme'), key: '9'},
        {label: t('header.custom'), key: '10'},
        {label: t('header.study'), key: '11'},
        {label: t('header.visa'), key: '12'},
        {label: t('header.enterprise'), key: '13'},
        {label: t('header.high_end'), key: '16'},
        {label: t('header.outdoor'), key: '14'},
        {label: t('header.insurance'), key: '15'},
    ]
    return (
        <div className={styles["app-header"]}>
            {/* 最顶部 */}
            <div className={styles["top-header"]}>
                <div className={styles['top-header-inner']}>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <Dropdown.Button
                        style={{marginLeft: 15}}
                        overlay={
                            <Menu onClick={menuClick} items={items}/>
                        }
                        icon={<GlobalOutlined/>}
                    >
                        语言
                    </Dropdown.Button>
                    <Button.Group className={styles["button-group"]}>
                        <Button onClick={() => nav(`/register`)}>注册</Button>
                        <Button onClick={() => nav(`/signIn`)}>登陆</Button>
                    </Button.Group>
                </div>
            </div>

            {/* React 旅游网及搜索框 */}
            <Layout.Header className={styles["main-header"]}>
                <img src={logo} alt="logo" className={styles["App-logo"]}/>
                <Typography.Title level={3} className={styles['title']}>React 旅游网</Typography.Title>
                <Input.Search className={styles['search-input']} placeholder={"请输入旅游目的地、主题、或关键字"}></Input.Search>
            </Layout.Header>
            {/*  */}
            <Menu mode={"horizontal"} className={styles["main-menu"]} items={items2}>
            </Menu>
        </div>
    )
}