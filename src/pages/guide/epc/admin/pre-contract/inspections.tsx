import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function InspectionsPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">실사 관리</h1>
        <p className="text-muted-foreground">
          실사 진행 상황을 관리하고 결과를 처리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">실사 관리 기능</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>실사 일정 관리</li>
            <li>실사 진행 상황 추적</li>
            <li>실사 보고서 작성</li>
            <li>실사 결과 승인</li>
            <li>후속 조치 관리</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
