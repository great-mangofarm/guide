import type {ReactNode} from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { Header } from '@/components/Header'
import { TableOfContents } from '@/components/TableOfContents'

interface DocsLayoutProps {
  children: ReactNode
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const location = useLocation()

  // URL hash 처리 - FAQ 페이지가 아닌 일반 페이지의 헤딩 스크롤
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && !location.pathname.includes('/faq')) {
      // FAQ 페이지가 아닌 경우에만 일반 헤딩 스크롤 처리
      setTimeout(() => {
        scrollToElement(hash)
      }, 300)
    }
  }, [location.hash, location.pathname])

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerHeight = 56 // 헤더 높이
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetTop = elementTop - headerHeight - 16
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (

      <div className="min-h-screen flex flex-col pb-9">
        {/* Header - 전체 상단 */}
        <Header />

        {/* Sidebar + Content 영역 */}
        <div className="flex flex-1">
          <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1 flex mt-14">
            {/* 메인 컨텐츠 영역 */}
            <div className="flex-1 space-y-4 py-6 pr-6 pl-12">
              {children}
            </div>
            
            {/* TOC 영역 - 360px 고정 너비 */}
            <div className="w-[320px] pt-6 pl-12">
              <TableOfContents />
            </div>
          </SidebarInset>
          </SidebarProvider>
        </div>

      </div>
  )
}
