import { Routes, Route, Navigate } from 'react-router-dom'
import { GuideProvider } from '@/contexts/GuideContext'
import { DebugGuideContext } from '@/components/DebugGuideContext'
import EPCAdminGuide from '@/pages/guide/epc/admin'
import EPCCompanyGuide from '@/pages/guide/epc/company'
import TestPage from '@/pages/TestPage'

// 운영 관리
import AddCompanyPage from '@/pages/guide/epc/admin/operation/addCompany.tsx'
import CompaniesPage from '@/pages/guide/epc/admin/operation/companies.tsx'

// 계약 전 관리
import AddSitePage from '@/pages/guide/epc/admin/pre-contract/addSite.tsx'
import SitesPage from '@/pages/guide/epc/admin/pre-contract/sites.tsx'
import SalesPage from '@/pages/guide/epc/admin/pre-contract/sales.tsx'
import RequestInspectionPage from '@/pages/guide/epc/admin/pre-contract/requestInspection.tsx'
import InspectionsPage from '@/pages/guide/epc/admin/pre-contract/inspections.tsx'

// 계약 관리
import ContractsPage from '@/pages/guide/epc/admin/contract/contracts.tsx'
import PapersPage from '@/pages/guide/epc/admin/contract/papers.tsx'
import ApprovalPage from '@/pages/guide/epc/admin/contract/approval.tsx'

// 공사 관리
import RequestPage from '@/pages/guide/epc/admin/construction/request.tsx'
import ConstructionExecutionPage from '@/pages/guide/epc/admin/construction/constructionExecution.tsx'
import ConstructionInspectionPage from '@/pages/guide/epc/admin/construction/constructionInspection.tsx'
import ResultPage from '@/pages/guide/epc/admin/construction/result.tsx'

// 물동관리
import InboundPage from '@/pages/guide/epc/admin/inventory/inbound.tsx'
import OutboundPage from '@/pages/guide/epc/admin/inventory/outbound.tsx'

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
        
        {/* 운영 관리 */}
        <Route path="/guide/epc/admin/operation/addCompany" element={<AddCompanyPage />} />
        <Route path="/guide/epc/admin/operation/companies" element={<CompaniesPage />} />
        
        {/* 계약 전 관리 */}
        <Route path="/guide/epc/admin/pre-contract/addSite" element={<AddSitePage />} />
        <Route path="/guide/epc/admin/pre-contract/sites" element={<SitesPage />} />
        <Route path="/guide/epc/admin/pre-contract/sales" element={<SalesPage />} />
        <Route path="/guide/epc/admin/pre-contract/requestInspection" element={<RequestInspectionPage />} />
        <Route path="/guide/epc/admin/pre-contract/inspections" element={<InspectionsPage />} />
        
        {/* 계약 관리 */}
        <Route path="/guide/epc/admin/contract/contracts" element={<ContractsPage />} />
        <Route path="/guide/epc/admin/contract/papers" element={<PapersPage />} />
        <Route path="/guide/epc/admin/contract/approval" element={<ApprovalPage />} />
        
        {/* 공사 관리 */}
        <Route path="/guide/epc/admin/construction/request" element={<RequestPage />} />
        <Route path="/guide/epc/admin/construction/constructionExecution" element={<ConstructionExecutionPage />} />
        <Route path="/guide/epc/admin/construction/constructionInspection" element={<ConstructionInspectionPage />} />
        <Route path="/guide/epc/admin/construction/result" element={<ResultPage />} />
        
        {/* 물동관리 */}
        <Route path="/guide/epc/admin/inventory/inbound" element={<InboundPage />} />
        <Route path="/guide/epc/admin/inventory/outbound" element={<OutboundPage />} />
        
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
