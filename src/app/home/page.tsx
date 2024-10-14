
'use client'; 
import React, { Component } from 'react';

import {Button} from 'antd';

interface HomesProps {
  title: string;
  content: string;
}

interface HomesState {
  counter: number;
}

class Homes extends Component<HomesProps, HomesState> {
  constructor(props: HomesProps) {
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
  componentDidUpdate(prevProps: HomesProps) {
    if (prevProps.title !== this.props.title) {
      console.log('Title 更新');
    }
  }

  // 相当于 Vue 的 beforeDestroy 或 destroyed 钩子
  componentWillUnmount() {
    console.log('组件卸载');
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <p>计数: {this.state.counter}</p>
        <Button type="primary" onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          增加计数
        </Button>
      </div>
    );
  }
}

export default Homes;
