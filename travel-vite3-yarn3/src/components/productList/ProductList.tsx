import React from 'react'
import { Link } from 'react-router-dom'
import { List, Rate, Space, Image, Tag, Typography } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'

const { Text } = Typography

// 定义泛型
interface PropsType {
  data: any[]
  paging: any
  onPageChange?: (nextPage, pageSize) => void
}

interface Product {
  departureCity: string
  description: string
  discountPresent: number
  id: string
  originalPrice: number
  price: number
  rating: number
  title: string
  touristRoutePictures: any[]
  travelDays: string
  tripType: string
  imgSrc?: string
  tags?: string
}

const listData = productList => {
  return productList.data.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    tags: (
      <>
        {p.departureCity && <Tag color="#f50">{p.departureCity}出发</Tag>}
        {p.travelDays && <Tag color="#108ee9">{p.travelDays} 天 </Tag>}
        {p.discountPresent && <Tag color="#87d068">超低折扣</Tag>}
        {p.tripType && <Tag color="#2db7f5">{p.tripType}</Tag>}
      </>
    ),
    imgSrc: p.touristRoutePictures[0].url,
    price: p.price,
    originalPrice: p.originalPrice,
    discountPresent: p.discountPresent,
    rating: p.rating,
  }))
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
export const ProductList: React.FC<PropsType> = ({ data, paging, onPageChange }) => {
  const products = listData(data)

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          current: 1,
          onChange: page => onPageChange && onPageChange(page, paging.pageSize),
          pageSize: 10,
          total: 100,
        }}
        dataSource={products}
        footer={
          <div>
            搜索总路线: <Text strong>{paging.totalCount}</Text> 条
          </div>
        }
        renderItem={(item: Product) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <>
                <Rate defaultValue={3} />
                <Text strong className="ant-rate-text">
                  {item.rating}
                </Text>
              </>,
            ]}
            extra={<Image width={272} height={172} alt="image" src={item.imgSrc} />}
          >
            <List.Item.Meta
              title={
                <>
                  {item.discountPresent ? (
                    <>
                      <Text style={{ fontSize: 20, fontWeight: 400 }} delete>
                        ¥ {item.originalPrice}
                      </Text>
                      <Text type="danger" style={{ fontSize: 20, fontWeight: 400 }}>
                        {' '}
                        ¥ {item.price}
                      </Text>
                    </>
                  ) : (
                    <Text style={{ fontSize: 20, fontWeight: 400 }}>¥ {item.price}</Text>
                  )}
                  <Link to={'/detail/' + item.id}> {item.title}</Link>
                </>
              }
              description={item.tags}
            />
            {item.description}
          </List.Item>
        )}
      />
    </>
  )
}
