import { createContext } from 'react'

// 타입 정의
export type AppType = 'epc'
export type UserType = 'admin' | 'company'

export interface GuideContextType {
  app: AppType | null
  userType: UserType | null
  isMangoAdmin: boolean
  hasAccess: (targetApp: AppType, targetUserType: UserType) => boolean
  updateFromUrl: () => void
}

// Context 생성
export const GuideContext = createContext<GuideContextType | undefined>(undefined)
