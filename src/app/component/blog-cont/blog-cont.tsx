import React, { Component } from 'react'
import { Card, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ArtList from '../art-list/art-list';
import './blog-cont.css'

import vueArt from '../../../assets/article/vue.json'
export class BlogCont extends Component {
  render() {

    const title = 'vue.js'

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Vue.js',
          children: <ArtList title={title} list={vueArt} />,
        },
        {
          key: '2',
          label: 'Node.js',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Webpack',
          children: 'Content of Tab Pane 3',
        },
      ];

    //   tabs 切换回调
      const onChange = (key: string) => {
        console.log(key);
      }
    return (
        <Card>
            <div className='blog-content'>

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
        </Card>

    )
  }
}

export default BlogCont
