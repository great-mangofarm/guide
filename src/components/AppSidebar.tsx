import { Home, BookOpen, Settings, HelpCircle, BookOpenCheck, Building2, FileText, Construction, Package } from "lucide-react"
import { useLocation } from "react-router-dom"
import { useCallback } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// EPC 어드민 메뉴 아이템들
const epcAdminMenuItems = [
  {
    title: "EPC 시작하기",
    url: "/guide/epc/admin",
    icon: BookOpenCheck,
  }
]

const epcAdminMenuGroups = [
  {
    label: "운영 관리",
    icon: Building2,
    items: [
      { title: "업체등록", url: "/guide/epc/admin/operation/addCompany" },
      { title: "업체 정보 관리", url: "/guide/epc/admin/operation/companies" },
    ]
  },
  {
    label: "계약 전 관리",
    icon: FileText,
    items: [
      { title: "현장등록", url: "/guide/epc/admin/pre-contract/addSite" },
      { title: "현장 정보 관리", url: "/guide/epc/admin/pre-contract/sites" },
      { title: "영업 진행 관리", url: "/guide/epc/admin/pre-contract/sales" },
      { title: "실사 요청", url: "/guide/epc/admin/pre-contract/requestInspection" },
      { title: "실사 관리", url: "/guide/epc/admin/pre-contract/inspections" },
    ]
  },
  {
    label: "계약 관리",
    icon: FileText,
    items: [
      { title: "계약 등록", url: "/guide/epc/admin/contract/contracts" },
      { title: "계약 서류 관리", url: "/guide/epc/admin/contract/papers" },
      { title: "환경부 승인", url: "/guide/epc/admin/contract/approval" },
    ]
  },
  {
    label: "공사 관리",
    icon: Construction,
    items: [
      { title: "공사 요청 관리", url: "/guide/epc/admin/construction/request" },
      { title: "공사 진행 (입고~완공)", url: "/guide/epc/admin/construction/constructionExecution" },
      { title: "공사 진행 (완공~점검)", url: "/guide/epc/admin/construction/constructionInspection" },
      { title: "공사 결과 관리", url: "/guide/epc/admin/construction/result" },
    ]
  },
  {
    label: "물동관리",
    icon: Package,
    items: [
      { title: "충전기 입고", url: "/guide/epc/admin/inventory/inbound" },
      { title: "충전기 출고", url: "/guide/epc/admin/inventory/outbound" },
    ]
  }
]

// 기본 메뉴 아이템들
const defaultMenuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "EPC 업무지원 시스템 가이드",
    url: "/guide/epc/admin",
    icon: BookOpen,
  },
  {
    title: "EPC Company Guide",
    url: "/guide/epc/company",
    icon: BookOpen,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help",
    url: "#",
    icon: HelpCircle,
  },
]

export function AppSidebar() {
  const location = useLocation()
  
  // 메모이제이션으로 불필요한 재계산 방지
  const isActiveMenu = useCallback((url: string) => {
    // 정확히 일치하는 경우만 active로 처리
    if (url === "/guide/epc/admin") {
      return location.pathname === url
    }
    // 다른 URL들은 startsWith로 처리
    return location.pathname.startsWith(url)
  }, [location.pathname])
  
  const getMenuContent = () => {
    const path = location.pathname
    
    if (path.includes('/guide/epc/admin')) {
      return 'epc-admin'
    }
    if (path.includes('/guide/epc/company')) {
      return 'epc-company'
    }
    return 'default'
  }
  
  const menuType = getMenuContent()
  
  if (menuType === 'epc-admin') {
    return (
      <Sidebar>
        <SidebarContent>
          {/* 시작하기 섹션 */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {epcAdminMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActiveMenu(item.url)}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* 메뉴 그룹들 */}
          {epcAdminMenuGroups.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActiveMenu(item.url)}>
                        <a href={item.url}>
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    )
  }
  
  // 기본 사이드바 (기존 코드)
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Guide Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {defaultMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveMenu(item.url)}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
