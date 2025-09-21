import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function ResultPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">공사 결과 관리</h1>
        <p className="text-muted-foreground">
          공사 완료 후 결과를 정리하고 관리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">결과 관리 항목</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>공사 완료 보고서</li>
            <li>준공 도면 정리</li>
            <li>시설물 등록</li>
            <li>보증서 발급</li>
            <li>사후 관리 계획</li>
            <li>고객 인수인계</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
