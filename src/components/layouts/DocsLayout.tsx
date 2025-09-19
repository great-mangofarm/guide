import type {ReactNode} from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { Header } from '@/components/Header'

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
          <SidebarInset className="flex-1">
            <div className="space-y-4 p-8">
              {children}
            </div>
          </SidebarInset>
          </SidebarProvider>
        </div>

      </div>
  )
}
