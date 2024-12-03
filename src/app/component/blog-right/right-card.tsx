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
                        <div className='card-item m-2 flex' key={index}>{item.title}:{item.type === 'tag' ? item.content.map((item: any, index: any) => {
                            return (
                                <Tag key={index} color='blue'>{item}</Tag>
                            )
                        }) : <div className='font-serif font-medium mx-2'>{item.content}</div>}</div>
                    )
                })}
            {/* </From> */}

        </Card>


        // </div>
    )
}