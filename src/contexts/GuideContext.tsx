import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// 타입 정의
export type AppType = 'epc'
export type UserType = 'admin' | 'company'

interface GuideContextType {
  app: AppType | null
  userType: UserType | null
  isMangoAdmin: boolean
  hasAccess: (targetApp: AppType, targetUserType: UserType) => boolean
  updateFromUrl: () => void
}

// Context 생성
const GuideContext = createContext<GuideContextType | undefined>(undefined)

// Custom hook
export const useGuide = () => {
  const context = useContext(GuideContext)
  if (context === undefined) {
    throw new Error('useGuide must be used within a GuideProvider')
  }
  return context
}

// Provider 컴포넌트
interface GuideProviderProps {
  children: ReactNode
}

export const GuideProvider = ({ children }: GuideProviderProps) => {
  const [app, setApp] = useState<AppType | null>(null)
  const [userType, setUserType] = useState<UserType | null>(null)
  const [isMangoAdmin, setIsMangoAdmin] = useState(false)

  // referrer에서 앱 결정하는 함수
  const getAppFromReferrer = (referrer: string): AppType | null => {
    if (referrer.includes('epc')) {
      return 'epc'
    }
    return null
  }

  // URL에서 쿼리 파라미터 파싱
  const parseUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const pathParts = window.location.pathname.split('/').filter(Boolean)
    
    // mango 어드민 체크 (최우선)
    const hasMangoAdmin = urlParams.has('mango')
    
    // path에서 앱과 타입 추출: /guide/epc/admin
    let pathApp: AppType | null = null
    let pathUserType: UserType | null = null
    
    if (pathParts[0] === 'guide' && pathParts[1] === 'epc') {
      pathApp = 'epc'
      if (pathParts[2] === 'admin' || pathParts[2] === 'company') {
        pathUserType = pathParts[2] as UserType
      }
    }
    
    return { hasMangoAdmin, pathApp, pathUserType }
  }

  // URL 업데이트 함수
  const updateFromUrl = () => {
    const { hasMangoAdmin, pathApp, pathUserType } = parseUrlParams()
    
    // mango 어드민이면 무조건 어드민 모드 (한번 설정되면 계속 유지)
    if (hasMangoAdmin) {
      setIsMangoAdmin(true)
      return
    }
    
    // 이미 mango 어드민이면 다른 정보가 와도 무시
    if (isMangoAdmin) {
      return
    }
    
    // path에서 앱/타입 정보가 있으면 업데이트
    if (pathApp && pathUserType) {
      setApp(pathApp)
      setUserType(pathUserType)
      return
    }
    
    // 새로운 정보가 없으면 referrer 체크 (최초 로드시에만)
    const referrer = document.referrer
    if (referrer && !app) {
      const referrerApp = getAppFromReferrer(referrer)
      if (referrerApp) {
        setApp(referrerApp)
        setUserType('company') // 기본값
      }
    }
  }

  // 접근 권한 체크 함수
  const hasAccess = (targetApp: AppType, targetUserType: UserType): boolean => {
    // mango 어드민은 모든 접근 가능
    if (isMangoAdmin) {
      return true
    }
    
    // 현재 앱이 같아야 함
    if (app !== targetApp) {
      return false
    }
    
    // admin은 company도 볼 수 있음
    if (userType === 'admin') {
      return true
    }
    
    // company는 자신의 타입만 볼 수 있음
    if (userType === 'company') {
      return targetUserType === 'company'
    }
    
    return false
  }

  // 최초 로드와 URL 변경시 업데이트
  useEffect(() => {
    updateFromUrl()
  }, [])

  // URL 변경 감지 (React Router 사용시)
  useEffect(() => {
    updateFromUrl()
  }, [window.location.pathname, window.location.search])

  const contextValue: GuideContextType = {
    app,
    userType,
    isMangoAdmin,
    hasAccess,
    updateFromUrl
  }

  return (
    <GuideContext.Provider value={contextValue}>
      {children}
    </GuideContext.Provider>
  )
}
