import './index.css'
import BlogRight from '@/app/component/blog-right/blog-right'
import ArtTop from './art-top'
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="layout-art">
        <div className="art-left">
          <div>
            <ArtTop></ArtTop>
          </div>
          <div>{children}</div>
        </div>
        <div className="art-right">
          <BlogRight></BlogRight>
        </div>
      </div>

    </div>
  )
}
