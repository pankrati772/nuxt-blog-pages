import Link from "next/link"
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
          <div>
              左侧菜单
              <Link href="/about">跳转到about</Link>
          </div>
          <div>{children}</div>
      </div>
    )
  }
  