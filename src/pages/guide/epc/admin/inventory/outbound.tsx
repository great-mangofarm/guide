import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function OutboundPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">충전기 출고</h1>
        <p className="text-muted-foreground">
          충전기 출고 절차와 관리 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">출고 절차</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>출고 요청 확인</li>
            <li>재고 확인</li>
            <li>충전기 점검</li>
            <li>포장 및 라벨링</li>
            <li>운송 준비</li>
            <li>출고 처리</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
