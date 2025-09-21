import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function ContractsPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">계약 등록</h1>
        <p className="text-muted-foreground">
          신규 계약을 시스템에 등록하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">계약 등록 절차</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>계약 기본 정보 입력</li>
            <li>계약 조건 설정</li>
            <li>계약서 업로드</li>
            <li>관련 서류 첨부</li>
            <li>승인 절차 진행</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
