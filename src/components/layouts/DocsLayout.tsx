import type {ReactNode} from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { Header } from '@/components/Header'
import { TableOfContents } from '@/components/TableOfContents'

interface DocsLayoutProps {
  children: ReactNode
}

export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (

      <div className="min-h-screen flex flex-col">
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
