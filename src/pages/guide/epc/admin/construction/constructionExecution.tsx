import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function ConstructionExecutionPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">공사 진행 (입고~완공)</h1>
        <p className="text-muted-foreground">
          충전기 입고부터 공사 완공까지의 과정을 관리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">진행 단계</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>충전기 입고 확인</li>
            <li>현장 준비 작업</li>
            <li>기초 공사</li>
            <li>충전기 설치</li>
            <li>전기 배선 작업</li>
            <li>시운전 및 테스트</li>
            <li>완공 확인</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
