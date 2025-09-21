import { DocsLayout } from '@/components/layouts/DocsLayout'

export default function PapersPage() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">계약 서류 관리</h1>
        <p className="text-muted-foreground">
          계약 관련 서류들을 관리하고 처리하는 방법을 안내합니다.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">관리 대상 서류</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>계약서 원본</li>
            <li>부속 계약서</li>
            <li>인허가 서류</li>
            <li>보험 관련 서류</li>
            <li>기타 첨부 서류</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  )
}
