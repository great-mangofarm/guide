import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function RequestPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">공사 요청 관리</h1>
        <p className="text-muted-foreground">
          공사 요청을 접수하고 관리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">공사 요청 처리</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>공사 요청 접수</li>
            <li>현장 조건 검토</li>
            <li>공사팀 배정</li>
            <li>일정 수립</li>
            <li>착공 승인</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
