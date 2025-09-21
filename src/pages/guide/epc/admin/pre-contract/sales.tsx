import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function SalesPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">영업 진행 관리</h1>
        <p className="text-muted-foreground">
          영업 과정의 진행 상황을 관리하고 추적하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">영업 단계</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>초기 상담</li>
            <li>현장 조사</li>
            <li>견적 제공</li>
            <li>계약 협상</li>
            <li>계약 체결</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
