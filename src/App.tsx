import { Routes, Route, Navigate } from 'react-router-dom'
import { GuideProvider } from '@/contexts/GuideContext'
import { DebugGuideContext } from '@/components/DebugGuideContext'
import EPCAdminGuide from '@/pages/guide/epc/admin'
import EPCCompanyGuide from '@/pages/guide/epc/company'
import TestPage from '@/pages/TestPage'

function App() {
  return (
    <GuideProvider>
      <Routes>
        {/* 테스트 페이지 */}
        <Route path="/test" element={<TestPage />} />
        
        {/* 기본 루트 - 적절한 가이드로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/test" replace />} />
        
        {/* EPC 가이드 라우트 */}
        <Route path="/guide/epc/admin" element={<EPCAdminGuide />} />
        <Route path="/guide/epc/company" element={<EPCCompanyGuide />} />
        
        {/* 404 처리 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">404</h1>
              <p className="text-muted-foreground mb-4">페이지를 찾을 수 없습니다.</p>
              <a href="/" className="text-primary hover:underline">홈으로 돌아가기</a>
            </div>
          </div>
        } />
      </Routes>
      
      {/* 개발 중에만 표시되는 디버그 컴포넌트 */}
      {import.meta.env.DEV && <DebugGuideContext />}
    </GuideProvider>
  )
}

export default App
