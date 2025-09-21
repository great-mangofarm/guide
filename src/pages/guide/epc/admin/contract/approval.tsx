import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function ApprovalPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">환경부 승인</h1>
        <p className="text-muted-foreground">
          환경부 승인 절차와 관련 업무를 처리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">승인 절차</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>승인 신청서 작성</li>
            <li>필요 서류 준비</li>
            <li>환경부 제출</li>
            <li>승인 진행 상황 추적</li>
            <li>승인 완료 처리</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
