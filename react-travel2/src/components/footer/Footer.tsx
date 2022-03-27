import { Layout, Typography } from "antd";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={4} style={{ textAlign: 'center' }}>
        版权所有 @ React 旅游网
      </Typography.Title>
    </Layout.Footer>
  )
}