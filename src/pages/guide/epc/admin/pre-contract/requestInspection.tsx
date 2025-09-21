import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function RequestInspectionPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">실사 요청</h1>
        <p className="text-muted-foreground">
          현장 실사를 요청하는 절차와 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">실사 요청 절차</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>실사 대상 현장 선택</li>
            <li>실사 일정 조율</li>
            <li>실사팀 배정</li>
            <li>실사 요청서 작성</li>
            <li>승인 및 일정 확정</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
