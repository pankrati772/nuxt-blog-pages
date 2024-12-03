// 顶部返回头部

'use client'
import React from 'react'

import { Button } from 'antd'
import { useRouter } from 'next/navigation';
function artTop() {
  const router = useRouter()

  const goBack = () => {
    // router.back()
    router.push('/')
  }
  return (
  <div className='art-top w-[98%] h-auto bg-white m-5 p-5 rounded-t-lg rounded-br-lg'>
      <Button type='primary' onClick={goBack}>返回</Button>
    </div>
  )
}

export default artTop

