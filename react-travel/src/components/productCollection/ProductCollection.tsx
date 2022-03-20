import React from "react";
import styles from './ProductCollection.module.css'
import { Row, Col, Typography, Divider } from 'antd'
interface PropsType {
  title: JSX.Element
  sideImage: any
  products: any[]
}
export const ProductCollection: React.FC<PropsType> = ({ title, sideImage, products }) => {
  return <div className="styles.content">
    <Divider orientation="left">{title}</Divider>
    <Row>
      <Col span={4}></Col>
      <Col span={20}></Col>
    </Row>
  </div>
}