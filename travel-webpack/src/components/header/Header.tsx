import { Button, Dropdown, Layout, Menu, Typography, Input } from "antd";
import React from "react";
import { GlobalOutlined } from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'

import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  const nav = useNavigate()
  // const params = useParams()
  // const location = useLocation()

  // console.log(nav)
  // console.log(params)
  // console.log(location)


  return (
    <div className={styles["app-header"]}>
      {/* 最顶部 */}
      <div className={styles["top-header"]}>
        <div className={styles['top-header-inner']}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item key={'chinise'}>中文</Menu.Item>
                <Menu.Item key={'english'}>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
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