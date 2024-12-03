import BlogRight from '@/app/component/blog-right/blog-right'
import ArtTop from './art-top'
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="layout-art flex pt-0.5 w-full h-dvh bg-zinc-100">
        <div className="art-left  w-4/5">
          <div>
            <ArtTop></ArtTop>
          </div>
          <div>{children}</div>
        </div>
        <div className="art-right w-1/5">
          <BlogRight></BlogRight>
        </div>
      </div>

    </div>
  )
}
