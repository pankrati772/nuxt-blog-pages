// 顶部返回头部

'use client'
import React from 'react'

import { Button } from 'antd'
import { useRouter } from 'next/navigation';
import './index.css'
function artTop() {
  const router = useRouter()

  const goBack = () => {
    // router.back()
    router.push('/')
  }
  return (
    <div className='art-top'>
      <Button type='primary' onClick={goBack}>返回</Button>
    </div>
  )
}

export default artTop

