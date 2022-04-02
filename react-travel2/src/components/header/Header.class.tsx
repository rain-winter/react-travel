import React from "react";

import { Button, Dropdown, Layout, Menu, Typography, Input } from "antd";
import { GlobalOutlined } from "@ant-design/icons"

import { LanguageState } from '../../redux/languageReducer'
import store from "../../redux/store";
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

import { withTranslation, WithTranslation } from 'react-i18next'

interface Props { }
interface State extends LanguageState { }

class HeaderComponent extends React.Component<Props & WithTranslation, State> {
  constructor(props: Props & WithTranslation) {
    super(props)
    const storeState = store.getState() // 通过store对象的方法获取state
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList
    }
    store.subscribe(() => {
      const storeState = store.getState()
      this.setState({
        language: storeState.language,
        languageList: storeState.languageList
      })
    })
  }


  muenClickHandler = (e: any) => {
    // 设计store
    if (e.key === 'new') {
      // 处理新语言添加
      const action = {
        type: 'add_language',
        payload: { code: 'new_lang', name: '新语言' }
      }
      store.dispatch(action)
    } else {
      const action = {
        type: 'change_language',
        payload: e.key
      }
      // 分发action
      store.dispatch(action)
    }
  }

  render() {
    const { t } = this.props
    return (
      <div className={styles["app-header"]}>
        {/* 最顶部 */}
        <div className={styles["top-header"]}>
          <div className={styles['top-header-inner']}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.muenClickHandler}>
                  {
                    this.state.languageList.map(item => {
                      return <Menu.Item key={item.code}>{item.name}</Menu.Item>
                    })
                  }
                  <Menu.Item key='new'>添加语言</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.state.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button>{t('header.register')}</Button>
              <Button>{t('header.signin')}</Button>
            </Button.Group>
          </div>
        </div>

        {/* React 旅游网及搜索框 */}
        <Layout.Header className={styles["main-header"]}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles['title']}>React 旅游网</Typography.Title>
          <Input.Search className={styles['search-input']} placeholder={"请输入旅游目的地、主题、或关键字"}></Input.Search>
        </Layout.Header>
        {/*  */}
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
          <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
        </Menu>
      </div>
    )
  }

}

export const Header = withTranslation()(HeaderComponent)