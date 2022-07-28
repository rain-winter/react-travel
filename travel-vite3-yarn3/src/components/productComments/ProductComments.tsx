import { Comment, Tooltip, List, Avatar } from 'antd'
import React from 'react'
// 评论
interface PropsType {
    data: { author: string, avatar: string, content: string, createDate: string }[]
}

export const ProductComments: React.FC<PropsType> = ({ data }) => {
    return <List
        dataSource={data}
        itemLayout='horizontal'
        renderItem={(item) => {
            return <li>
                <Comment
                    author={item.author}
                    avatar={<Avatar src={item.avatar} alt="Han Solo" />}
                    content={item.content}
                    datetime={item.createDate}
                />
            </li>
        }}
    >
    </List>
}