import React, { Component } from 'react'
import { List, Avatar } from 'antd'
import Link from 'next/link'

interface Props {
    title?: string
    list: any[]
}
export class artList extends Component<Props> {
    render() {
        const { title, list } = this.props
        return (
            // <div>
            //     {list.map((item: any, index: any) => {
            //         return (<div>
            //             {item.title}
            //         </div>)
            //     })}
            // </div>


<List
    itemLayout="horizontal"
    dataSource={list}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<Link href={`/artmsg/${item.id}`}>{item.title}</Link>}
          description={item.description|| '点击查看详情'}
        />
      </List.Item>
    )}
  />
        )
    }
}

export default artList
