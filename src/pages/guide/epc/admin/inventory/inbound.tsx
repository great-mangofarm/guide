import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function InboundPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">충전기 입고</h1>
        <p className="text-muted-foreground">
          충전기 입고 절차와 관리 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">입고 절차</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>입고 예정 확인</li>
            <li>납품서 검토</li>
            <li>실물 검수</li>
            <li>품질 점검</li>
            <li>재고 등록</li>
            <li>보관 위치 지정</li>
          </ol>
        </div>
      </div>
    </DocsLayout>
  )
}
