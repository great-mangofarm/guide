import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function CompaniesPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">업체 정보 관리</h1>
        <p className="text-muted-foreground">
          등록된 업체들의 정보를 조회하고 관리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">주요 기능</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>업체 목록 조회</li>
            <li>업체 정보 수정</li>
            <li>업체 상태 변경</li>
            <li>계약 이력 조회</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
