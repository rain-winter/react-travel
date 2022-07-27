import React from "react";
import { Col, Divider, Row, Typography } from "antd";

import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';
import styles from './BusinessPartners.module.css'

const companies = [
  { src: image1, title: "Microsoft" },
  { src: image2, title: "Youtube" },
  { src: image3, title: "Ins" },
  { src: image4, title: "Facebook" }
]

export const BusinessPartners: React.FC = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Divider orientation="left">
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      {/* 使用Row 包裹 四个列（Col）Col包裹img */}
      <Row>
        {
          companies.map((item, index) => (
            <Col span={6} key={index}>
              <img src={item.src} alt="" className={styles.BusinessPartnersImg} />
            </Col>
          ))
        }
      </Row>

    </div>
  )
}