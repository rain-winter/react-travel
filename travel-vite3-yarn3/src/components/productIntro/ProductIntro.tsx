import styles from './ProductIntro.module.css'
import React from "react";
import { Typography, Carousel, Image, Rate, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
//  商品简介
interface PropsType {
    title: string,
    shortDescription: string
    price: string | number
    coupons: string
    points: string
    discount: string
    rating: string | number
    pictures: string[]
}

interface RowType {
    title: string
    description: string | number | JSX.Element
    key: string
}

const columns: ColumnsType<RowType> = [
    // 表头
    {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        align: 'left',
        width: 120
    },
    // 内容
    {
        title: "description",
        dataIndex: "description",
        key: "description",
        align: "center",
    }
]

// 函数组件
export const ProductIntro: React.FC<PropsType> = ({
    title,
    shortDescription,
    price,
    coupons,
    discount,
    rating,
    pictures
}) => {
    console.log('title', title)
    // 表单数据
    const tableDataSource: RowType[] = [
        {
            key: '0',
            title: "路线名称",
            description: title,
        },
        {
            key:'1',
            title: "价格",
            description: (
                <>
                    ¥{" "}
                    <Typography.Text type="danger" strong>
                        {price}
                    </Typography.Text>
                </>
            ),
        },
        {
            key: '2',
            title: "限时抢购折扣",
            description: discount ? (
                <>
                    ¥ <Typography.Text delete>{price}</Typography.Text>{" "}
                    <Typography.Text type="danger" strong>
                        ¥ {discount}
                    </Typography.Text>
                </>
            ) : (
                "暂无折扣"
            ),
        },
        {
            key: '3',
            title: "领取优惠",
            description: coupons ? discount : "无优惠券可领",
        },
        {
            key: '4',
            title: "线路评价",
            description: (
                <>
                    <Rate allowHalf defaultValue={+rating} />
                    <Typography.Text style={{ marginLeft: 10 }}>
                        {rating} 星
                    </Typography.Text>
                </>
            ),
        },
    ]

    return <div className={styles['intro-container']}>
        <Typography.Title level={4}>{title}</Typography.Title>
        <Typography.Text>{shortDescription}</Typography.Text>
        <div className={styles['intro-detail-content']}>
            <Typography.Text style={{ marginLeft: 20 }}>
                ￥<span className={styles['intro-detail-strong-text']}>{price}</span>
                /人起
            </Typography.Text>
            <Typography.Text style={{ marginLeft: 50 }}>
                ￥<span className={styles['intro-detail-strong-text']}>{rating}</span>
                分
            </Typography.Text>
        </div>
        {/*  轮播  */}
        <Carousel autoplay slidesToShow={3}>
            {/* 它需要一个key */}
            {
                pictures.map((p,index) => <Image height={150} key={index} src={p} />)
            }
        </Carousel>
        <Table size='small' bordered={false} pagination={false} columns={columns} dataSource={tableDataSource}></Table>
    </div>
}