import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import SmallLogo from "@/assets/mobile-logo.svg?react"
import {Typography} from "@/components/ui/typography.tsx";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation()
  
  // path에 따라 앱 이름과 역할 결정
  const getAppInfo = () => {
    const path = location.pathname
    
    if (path.includes('/guide/epc/admin')) {
      return { app: 'EPC 업무지원시스템', role: '(에버온)' }
    }
    if (path.includes('/guide/epc/company')) {
      return { app: 'EPC', role: 'Company' }
    }
    
    // 다른 앱들도 여기에 추가할 수 있습니다
    // if (path.includes('/guide/another-app/user')) {
    //   return { app: 'Another App', role: 'User' }
    // }
    
    return { app: 'Guide', role: null } // 기본값
  }

  const { app, role } = getAppInfo()
  const title = role ? `${app} ${role} Guide` : `${app} Docs`

  return (
    <header className="fixed w-full border-b border-border bg-background z-20">
      <div className="container relative flex h-14 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="ml-4 mr-6 flex items-center space-x-2">
          <SmallLogo className="w-7 h-7" />
          <Typography variant="smallBold">
            {title}
          </Typography>
        </div>
        
        {/* Search - 화면 중앙에 절대 위치 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-text-subtle" />
            <Input
              type="search"
              placeholder="검색어를 입력하세요."
              className="pl-8 w-full"
            />
          </div>
        </div>
        
        {/* Right side - empty for now */}
        <div className="flex items-center space-x-2 ml-auto">
        </div>
      </div>
    </header>
  )
}
