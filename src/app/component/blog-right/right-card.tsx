import './card.css';
import { Tag, Card } from 'antd';
export default function showCard(props: any) {
    const { cardMsg, title } = props


    return (
        // <div className="card">

        <Card title={title}>
            {/* <From layout="horizontal" labelCol={{ span: 4 }} */}
                {/* wrapperCol={{ span: 14 }}> */}
                {cardMsg.map((item: any, index: any) => {
                    return (
                        <div className='card-item' key={index}>{item.title}:{item.type === 'tag' ? item.content.map((item: any, index: any) => {
                            return (
                                <Tag key={index} color='blue'>{item}</Tag>
                            )
                        }) : item.content}</div>
                        // <From.Item label={item.title} key={index}>
                        //     {item.type === 'tag' ? item.content.map((item: any, index: any) => {
                        //         return (
                        //             <Tag key={index} color='blue'>{item}</Tag>
                        //         )
                        //     }) : item.content}
                        // </From.Item>
                    )
                })}
            {/* </From> */}

        </Card>


        // </div>
    )
}