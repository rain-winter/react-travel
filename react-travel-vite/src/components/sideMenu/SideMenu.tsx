import {Menu} from "antd";
import React from "react";

import {sideMenuList} from './mockup'
import styles from './SideMenu.module.css'

export const SideMenu: React.FC = () => {
    return (
        <Menu className={styles['side-menu']}>
            {
                sideMenuList.map((item, index) => (
                    <Menu.SubMenu key={index} title={item.title}>
                        {
                            item.subMenu.map((sitem, sindex) => (
                                <Menu.SubMenu key={`${index}-${sindex}`} title={sitem.title}>
                                    {
                                        sitem.subMenu.map((ssitem, ssindex) => (
                                            <Menu.Item key={`${index}-${sindex}-${ssindex}`}>
                                                {ssitem}
                                            </Menu.Item>
                                        ))
                                    }
                                </Menu.SubMenu>
                            ))
                        }
                    </Menu.SubMenu>
                ))
            }
        </Menu>
    )
}

/**
 * Menu
 * 第一级 SubMenu title
 * 第二级 SubMenu title
 * 第三级级 Menu.Item title
 */