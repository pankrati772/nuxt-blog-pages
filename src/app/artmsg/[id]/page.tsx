// 文章详情页

interface Params {
  params: {
      id: string;
  }
}
export default function artmsg(
  { params }: Params
) {
  return (
   <div>
    <div>参数：{JSON.stringify(params.id)}</div>
   </div>
  );
}
