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
   <div className="m-5 p-4 bg-white w-[98%]">
    <div>参数：{JSON.stringify(params.id)}</div>
   </div>
  );
}
