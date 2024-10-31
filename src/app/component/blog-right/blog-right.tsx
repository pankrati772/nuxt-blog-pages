
import RightCard from './right-card'

export default function BlogRight() {
 
    const cardMsg2 = [
        {
            title: '联系方式',
            content: '17702084823'
        },
        {
            title: '个人邮箱',
            content: '939392270@qq.com'
        },
        {
            title: '技术栈',
            type: 'tag',
            content: ['vue', 'react', 'node', 'mysql', 'mongodb', 'git']
        }
    ]
    
    return (
        <div>

            <RightCard title={'个人信息'} cardMsg={cardMsg2}></RightCard>
        </div>
    )
}