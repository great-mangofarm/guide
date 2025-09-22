import { useContext } from 'react'
import { GuideContext, type GuideContextType } from '@/contexts/GuideContext'

export const useGuide = (): GuideContextType => {
  const context = useContext(GuideContext)
  if (context === undefined) {
    throw new Error('useGuide must be used within a GuideProvider')
  }
  return context
}
