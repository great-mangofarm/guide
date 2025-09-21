import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function ConstructionInspectionPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">공사 진행 (완공~점검)</h1>
        <p className="text-muted-foreground">
          공사 완공 후 점검 및 검수 과정을 관리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">점검 단계</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>완공 신고</li>
            <li>자체 점검</li>
            <li>안전 검사</li>
            <li>성능 테스트</li>
            <li>고객 검수</li>
            <li>최종 승인</li>
            <li>준공 처리</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
