import React from "react";

import { Button, Dropdown, Layout, Menu, Typography, Input } from "antd";
import { GlobalOutlined } from "@ant-design/icons"

import { LanguageState } from '../../redux/languageReducer'
import store from "../../redux/store";
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

interface Props { }
interface State extends LanguageState { }

class HeaderComponent extends React.Component<Props, State> {
  constructor(props: Props) {
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
              <Button>注册</Button>
              <Button>登陆</Button>
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
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key="4"> 自由行 </Menu.Item>
          <Menu.Item key="5"> 私家团 </Menu.Item>
          <Menu.Item key="6"> 邮轮 </Menu.Item>
          <Menu.Item key="7"> 酒店+景点 </Menu.Item>
          <Menu.Item key="8"> 当地玩乐 </Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
          <Menu.Item key="14"> 高端游 </Menu.Item>
          <Menu.Item key="15"> 爱玩户外 </Menu.Item>
          <Menu.Item key="16"> 保险 </Menu.Item>
        </Menu>
      </div>
    )
  }

}

export const Header = HeaderComponent