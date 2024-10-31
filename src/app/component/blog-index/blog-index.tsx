
'use client';
import React, { Component } from 'react';
import './blog-index.css'
import BlogTop from '../blog-top/blog-top';
import BlogRight from '../blog-right/blog-right';
import BlogCont from '../blog-cont/blog-cont';

import { Button } from 'antd';



interface HomesState {
  counter: number;
}

class BlogIndex extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // 相当于 Vue 的 mounted 钩子
  componentDidMount() {
    console.log('组件挂载');
  }

  // 相当于 Vue 的 updated 钩子：组件更新时触发
  //   componentDidUpdate(prevProps: HomesProps) {
  //     if (prevProps.title !== this.props.title) {
  //       console.log('Title 更新');
  //     }
  //   }

  // 相当于 Vue 的 beforeDestroy 或 destroyed 钩子
  componentWillUnmount() {
    console.log('组件卸载');
  }

  render() {
    return (
      <div className='blog'>
        <div className="left">
          <div className="topbox showbox">
            <BlogTop></BlogTop>
          </div>
          <div className="contbox">
            <BlogCont></BlogCont>
          </div>
        </div>
        <div className="right">
          <BlogRight></BlogRight>
        </div>


      </div>
    );
  }
}

export default BlogIndex;
