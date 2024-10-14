interface Params {
  params: {
      dong: string;
  }
}
export default function About(
  { params }: Params
) {
  return (
   <div>
    这个是About页面
    <div>参数：{JSON.stringify(params)}</div>
   </div>
  );
}
