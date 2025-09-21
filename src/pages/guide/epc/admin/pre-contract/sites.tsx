import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function SitesPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">현장 정보 관리</h1>
        <p className="text-muted-foreground">
          등록된 현장들의 정보를 조회하고 관리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">관리 기능</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>현장 목록 조회</li>
            <li>현장 상세 정보 수정</li>
            <li>현장 상태 관리</li>
            <li>진행 단계 추적</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
